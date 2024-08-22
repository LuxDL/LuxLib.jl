function reshaped_bias_dims(x::AbstractArray, bias::AbstractVector)
    return ntuple(i -> ifelse(i == ndims(x) - 1, length(bias), 1), ndims(x))
end

reshape_bias(::AbstractArray, ::Nothing) = nothing
reshape_bias(::AbstractVector, bias::Union{AbstractVector, StaticVector}) = bias
function reshape_bias(x::AbstractArray, bias::AbstractVector)
    return reshape(bias, reshaped_bias_dims(x, bias))
end
function reshape_bias(x::AbstractArray{<:Any, N}, bias::StaticVector) where {N}
    return SArray{Tuple{reshaped_bias_dims(x, bias)...}, eltype(bias), N, length(bias)}(bias.data)
end

## Needed for type stability
function CRC.rrule(::typeof(reshape_bias), x::AbstractArray{xT, N},
        bias::AbstractVector{bT}) where {xT, bT, N}
    bias_r = reshape_bias(x, bias)
    𝒫bias = CRC.ProjectTo(bias)
    return bias_r, Δ -> (∂∅, ∂∅, 𝒫bias(vec(Δ)))
end

∇bias_add(::Nothing, Δ::AbstractArray) = ∂∅
function ∇bias_add(b::AbstractArray{xT, N}, Δ::AbstractArray{yT, N}) where {xT, yT, N}
    return reduce_sum(b, Δ)
end
function ∇bias_add(b::AbstractVector{xT}, Δ::AbstractArray{yT}) where {xT, yT}
    return vec(reduce_sum(reshape_bias(Δ, b), Δ))
end

reduce_sum(::Nothing, ::NoTangent) = ∂∅
function reduce_sum(x::AbstractArray, y::AbstractArray)
    z = similar(x, promote_type(eltype(x), eltype(y)))
    sum!(z, y)
    return z
end

function mean_var(x::AbstractArray; dims=:, corrected::Bool=true)
    μ = mean(x; dims)
    return μ, var(x; dims, corrected, mean=μ)
end

function CRC.rrule(
        ::typeof(mean_var), x::AbstractArray{T}; dims=:, corrected::Bool=true) where {T}
    μ = mean(x; dims)
    xμ = x .- μ
    n = dims_denom(x, dims)
    σ² = sum(abs2, xμ; dims) / (n - corrected)

    𝒫x = CRC.ProjectTo(x)
    ∇mean_var_internal = @closure Δ -> begin
        ∂μ, ∂σ² = CRC.unthunk(Δ)
        ∂x = ∇mean_var(unsum(x, ∂μ / n, dims), xμ, ∂σ², T(2 // (n - corrected)))
        return ∂∅, 𝒫x(∂x)
    end

    return (μ, σ²), ∇mean_var_internal
end

function ∇mean_var(∂x, xμ, ∂σ², pre)
    return ∇mean_var(internal_operation_mode((∂x, xμ, ∂σ²)), ∂x, xμ, ∂σ², pre)
end
function ∇mean_var(::AbstractInternalArrayOpMode, ∂x, xμ, ∂σ², pre)
    @. ∂x += pre * ∂σ² * xμ
    return ∂x
end
function ∇mean_var(::LoopedArrayOp, ∂x, xμ, ∂σ², pre)
    if Utils.can_strided(∂x, xμ, ∂σ²)
        @strided @. ∂x += pre * ∂σ² * xμ
    else
        @. ∂x += pre * ∂σ² * xμ
    end
    return ∂x
end

dims_denom(x, dims) = size(x, dims)
dims_denom(x, ::Colon) = length(x)
function dims_denom(x, dims::Union{Tuple, AbstractArray})
    return mapreduce(Base.Fix1(size, x), Base.mul_prod, unique(dims); init=1)
end

unsum(x, dy, _) = unsum_internal(internal_operation_mode(x), x, dy)
unsum(x, dy, ::Colon) = unsum(x, (dy,), nothing)

unsum_internal(::AbstractInternalArrayOpMode, x, dy) = broadcast(last ∘ tuple, x, dy)
function unsum_internal(::LoopedArrayOp, x, dy)
    if Utils.can_strided(x, dy)
        return @strided @. (last ∘ tuple)(x, dy)
    else
        return broadcast(last ∘ tuple, x, dy)
    end
end
