function __update_statistics(rμ, rσ², μ, σ², m1, m2)
    return __update_statistics(
        internal_operation_mode((rμ, rσ², μ, σ²)), rμ, rσ², μ, σ², m1, m2)
end

function __update_statistics(::GenericBroadcastOp, rμ, rσ², μ, σ², m1, m2)
    m3 = 1 - m1
    rμ2 = @. m3 * rμ + m1 * μ
    rσ²2 = @. m3 * rσ² + m2 * σ²
    return rμ2, rσ²2
end

function __update_statistics(opmode, rμ, rσ², μ, σ², m1, m2)
    m3 = 1 - m1
    rμ2 = similar(rμ, promote_type(eltype(rμ), eltype(μ), typeof(m3), typeof(m1)))
    rσ²2 = similar(rσ², promote_type(eltype(rσ²), eltype(σ²), typeof(m2), typeof(m3)))
    __update_statistics!(rμ2, rσ²2, opmode, rμ, rσ², μ, σ², m1, m2, 1 - m1)
    return rμ2, rσ²2
end

CRC.@non_differentiable __update_statistics(::Any...)

function __update_statistics!(rμ2, rσ²2, ::LoopedArrayOp, rμ, rσ², μ, σ², m1, m2, m3)
    if LoopVectorization.check_args(rμ2, rσ²2, rμ, rσ², μ, σ²)
        @tturbo for I in indices((rμ2, rσ²2))
            rμ2[I] = m3 * rμ[I] + m1 * μ[I]
            rσ²2[I] = m3 * rσ²[I] + m2 * σ²[I]
        end
    else
        @batch for I in indices((rμ2, rσ²2))
            rμ2[I] = m3 * rμ[I] + m1 * μ[I]
            rσ²2[I] = m3 * rσ²[I] + m2 * σ²[I]
        end
    end
end
function __update_statistics!(rμ2, rσ²2, ::GPUBroadcastOp, rμ, rσ², μ, σ², m1, m2, m3)
    backend = KA.get_backend(rμ2)
    kernel! = __update_statistics_kernel!(backend)
    kernel!(rμ2, rσ²2, rμ, rσ², μ, σ², m1, m2, m3; ndrange=length(rμ2))
    KA.synchronize(backend)
end

@kernel function __update_statistics_kernel!(rμ2, rσ²2, @Const(rμ), @Const(rσ²), @Const(μ),
        @Const(σ²), @Const(m1), @Const(m2), @Const(m3))
    I = @index(Global)
    @inbounds rμ2[I] = m3 * rμ[I] + m1 * μ[I]
    @inbounds rσ²2[I] = m3 * rσ²[I] + m2 * σ²[I]
end

EnzymeRules.inactive(::typeof(__update_statistics!), ::Any...) = nothing

function _update_normalization_statistics(
        x::AbstractArray{T, N}, rμ::AbstractArray{<:Number, N},
        rσ²::AbstractArray{<:Number, N}, μ::AbstractArray{<:Number, N},
        σ²::AbstractArray{<:Number, N}, momentum::Real, reduce_dims) where {T, N}
    if last(reduce_dims) != N
        μ = fast_mean(μ; dims=N)
        σ² = fast_mean(σ²; dims=N)
    end
    m = remove_tracking(T(__accum_size(x, reduce_dims)))
    return __update_statistics(rμ, rσ², μ, σ², momentum, momentum * m / (m - one(m)))
end

CRC.@non_differentiable _update_normalization_statistics(::Any...)

__accum_size(x, reduce_dims) = prod(Base.Fix1(size, x), __known_fixed(reduce_dims))

function _get_batch_statistics(
        x::AbstractArray, ::Nothing, ::Nothing, reduce_dims, _, momentum)
    μ, σ² = fast_mean_var(x; dims=__known_fixed(reduce_dims), corrected=false)
    return (ArrayInterface.aos_to_soa(μ), ArrayInterface.aos_to_soa(σ²)), (nothing, nothing)
end

function _get_batch_statistics(
        ::AbstractArray, rμ::AbstractArray, rσ²::AbstractArray, _, ::False, momentum)
    return (rμ, rσ²), (rμ, rσ²)
end

function _get_batch_statistics(x::AbstractArray, rμ::AbstractArray,
        rσ²::AbstractArray, reduce_dims, ::True, momentum)
    μ, σ² = map(ArrayInterface.aos_to_soa,
        fast_mean_var(x; dims=__known_fixed(reduce_dims), corrected=false))
    rμ, rσ² = _update_normalization_statistics(
        remove_tracking(x), remove_tracking(rμ), remove_tracking(rσ²),
        remove_tracking(μ), remove_tracking(σ²), momentum, reduce_dims)
    return (μ, σ²), (rμ, rσ²)
end

# NOTE: marking it as stable makes everything type unstable in the backward pass
function _normalization(x::AbstractArray, running_mean::Optional{<:AbstractVector},
        running_var::Optional{<:AbstractVector}, scale::Optional{<:AbstractVector},
        bias::Optional{<:AbstractVector}, reduce_dims,
        training::StaticBool, momentum, epsilon, act::F=identity) where {F}
    (μ, σ²), (rμ, rσ²) = _get_batch_statistics(
        x, _reshape_into_normalization_shape(running_mean, x),
        _reshape_into_normalization_shape(running_var, x), reduce_dims, training, momentum)
    return _affine_normalize(act, x, μ, σ², _reshape_into_normalization_shape(scale, x),
        _reshape_into_normalization_shape(bias, x), epsilon), _vec(rμ), _vec(rσ²)
end

_reshape_into_normalization_shape(::Nothing, y) = nothing
function _reshape_into_normalization_shape(x, y)
    return reshape(x, _get_norm_reshape_dims(size(y), length(x)))
end

@inbounds function _get_norm_reshape_dims(sx::NTuple{N, <:Int}, ly::Int) where {N}
    if ly == sx[N - 1]
        return ntuple(i -> i == N - 1 ? ly : 1, N)
    elseif N > 2 && ly == sx[N - 1] * sx[N - 2]
        return ntuple(i -> i == (N - 1) || i == (N - 2) ? sx[i] : 1, N)
    end
    throw(ArgumentError("Invalid Dimensions!"))
end

CRC.@non_differentiable _get_norm_reshape_dims(::Any...)

# Generally you want to use `_normalization` but calling these functions lead to faster
# code.
function _groupnorm_impl(x::AbstractArray, scale::Optional{<:AbstractVector},
        bias::Optional{<:AbstractVector}, reduce_dims, epsilon, act::F=identity) where {F}
    (μ, σ²), _ = _get_batch_statistics(x, nothing, nothing, reduce_dims, False(), nothing)
    return _affine_normalize_gn(act, x, μ, σ², scale, bias, epsilon)
end

function _batchnorm_impl(x::AbstractArray, running_mean::Optional{<:AbstractVector},
        running_var::Optional{<:AbstractVector}, scale::Optional{<:AbstractVector},
        bias::Optional{<:AbstractVector}, reduce_dims,
        training::StaticBool, momentum, epsilon, act::F=identity) where {F}
    (μ, σ²), (rμ, rσ²) = _get_batch_statistics(
        x, _reshape_into_normalization_shape(running_mean, x),
        _reshape_into_normalization_shape(running_var, x), reduce_dims, training, momentum)
    return _affine_normalize_bn(act, x, μ, σ², scale, bias, epsilon), _vec(rμ), _vec(rσ²)
end
