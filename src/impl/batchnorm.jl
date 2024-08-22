function batchnorm_cudnn end   # Defined in LuxLibcuDNNExt
function ∇batchnorm_cudnn end  # Defined in LuxLibcuDNNExt

function batchnorm_reduce_dims(::AbstractArray{T, N}) where {T, N}
    return (ntuple(static, N - 2)..., static(N))
end

CRC.@non_differentiable batchnorm_reduce_dims(::Any...)

function get_batchnorm_statistics(::AbstractArray, rμ::Optional{<:AbstractVector},
        rσ²::Optional{<:AbstractVector}, ::True)
    return Utils.copy_drop_gradients(rμ), Utils.copy_drop_gradients(rσ²)
end

function get_batchnorm_statistics(x::AbstractArray, ::Nothing, ::Nothing, ::False)
    μ, σ² = mean_var(x; dims=Utils.known(batchnorm_reduce_dims(x)), corrected=false)
    return Utils.vec(μ), Utils.vec(σ²)
end

function get_batchnorm_statistics(
        ::AbstractArray, rμ::AbstractVector, rσ²::AbstractVector, ::False)
    return rμ, rσ²
end

CRC.@non_differentiable get_batchnorm_statistics(::Any...)

function batchnorm(x::AbstractArray{xT, N}, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, rμ::Optional{<:AbstractVector},
        rσ²::Optional{<:AbstractVector}, training::StaticBool, act::F,
        momentum::Real, ϵ::Real) where {F, xT, N}
    (μ, σ²), (rμ, rσ²) = compute_batch_statistics(
        x, reshape_norm_dims(x, rμ), reshape_norm_dims(x, rσ²),
        batchnorm_reduce_dims(x), training, momentum)
    return (batchnorm_affine_normalize(act, x, μ, σ², γ, β, ϵ),
        get_utils(:vec)(rμ), get_utils(:vec)(rσ²))
end

function batchnorm_affine_normalize(
        act::F, x::AbstractArray{xT, N}, μ::AbstractArray{μT, N},
        σ²::AbstractArray{σ²T, N}, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real) where {F, xT, μT, σ²T, N}
    return batchnorm_affine_normalize(
        internal_operation_mode((x, μ, σ², γ, β)), act, x, μ, σ², γ, β, ϵ)
end

function batchnorm_affine_normalize(
        ::GenericBroadcastOp, act::F, x::AbstractArray{xT, N}, μ::AbstractArray{μT, N},
        σ²::AbstractArray{σ²T, N}, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real) where {F, xT, μT, σ²T, N}
    return affine_normalize(
        act, x, μ, σ², reshape_norm_dims(x, γ), reshape_norm_dims(x, β), ϵ)
end

function batchnorm_affine_normalize(
        opmode::AbstractInternalArrayOpMode, act::F, x::AbstractArray{xT, N},
        μ::AbstractArray{μT, N}, σ²::AbstractArray{σ²T, N},
        γ::Optional{<:AbstractVector}, β::Optional{<:AbstractVector},
        ϵ::Real) where {F, xT, μT, σ²T, N}
    x′ = reshape(x, :, size(x, N - 1), size(x, N))
    return reshape(
        batchnorm_affine_normalize_internal(opmode, act, x′, vec(μ), vec(σ²), γ, β, ϵ),
        size(x))
end

@stable default_mode="disable" function batchnorm_affine_normalize_internal(
        opmode::AbstractInternalArrayOpMode, act::F, x::AbstractArray{xT, 3},
        μ::AbstractVector, σ²::AbstractVector, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real) where {F, xT}
    y = similar(x,
        promote_type(Utils.eltype(x), Utils.eltype(μ), Utils.eltype(σ²),
            Utils.eltype(γ), Utils.eltype(β)))
    batchnorm_affine_normalize_internal!(y, opmode, act, x, μ, σ², γ, β, ϵ)
    return y
end

function batchnorm_affine_normalize_internal!(
        y::AbstractArray{yT, 3}, opmode::LoopedArrayOp, act::F, x::AbstractArray{xT, 3},
        μ::AbstractVector, σ²::AbstractVector, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real,
        γ′::Optional{<:AbstractVector}=nothing) where {F, xT, yT}
    N = size(y, 2)
    γ′ = γ′ === nothing ?
         similar(x, promote_type(Utils.eltype(γ), Utils.eltype(σ²), Utils.eltype(ϵ)), N) :
         γ′
    β′ = similar(x, promote_type(Utils.eltype(β), Utils.eltype(σ²), Utils.eltype(ϵ)), N)

    compute_batchnorm_scale_bias!(γ′, β′, γ, β, μ, σ², ϵ)

    γ′′ = reshape(γ′, 1, :, 1)
    β′′ = reshape(β′, 1, :, 1)
    if Utils.known(Traits.fuse_cpu_activation(act))
        if Utils.can_strided(y, x, γ′′, β′′)
            @strided @. y = act(x * γ′′ + β′′)
        else
            @. y = act(x * γ′′ + β′′)
        end
    else
        if Utils.can_strided(y, x, γ′′, β′′)
            @strided @. y = x * γ′′ + β′′
        else
            @. y = x * γ′′ + β′′
        end
        activation!(y, opmode, act, y)
    end
    return
end

@fastmath @inbounds function compute_batchnorm_scale_bias!(
        γ′, β′, ::Nothing, ::Nothing, μ, σ², ϵ)
    @simd ivdep for I in eachindex(γ′, β′, σ², μ)
        γ′[I] = inv(sqrt(σ²[I] + ϵ))
        β′[I] = -μ[I] * γ′[I]
    end
end

@fastmath @inbounds function compute_batchnorm_scale_bias!(
        γ′, β′, γ, β, μ, σ², ϵ)
    @simd ivdep for I in eachindex(γ′, β′, γ, β, σ², μ)
        γ′[I] = γ[I] / sqrt(σ²[I] + ϵ)
        β′[I] = β[I] - μ[I] * γ′[I]
    end
end

function batchnorm_affine_normalize_internal!(
        y::AbstractArray{yT, 3}, ::GPUBroadcastOp, act::F, x::AbstractArray{xT, 3},
        μ::AbstractVector, σ²::AbstractVector, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real,
        γ′::Optional{<:AbstractVector}=nothing) where {F, xT, yT}
    backend = KA.get_backend(y)
    Utils.run_ka_kernel(
        batchnorm_affine_normalize_internal_kernel!, backend, nothing, size(y),
        y, γ′, act, x, μ, σ², γ, β, ϵ)
    KA.synchronize(backend)
end

@kernel cpu=false inbounds=true function batchnorm_affine_normalize_internal_kernel!(
        y::AbstractArray{<:Number, 3}, @Const(γ′::Nothing),
        @Const(f), @Const(x), @Const(μ), @Const(σ²),
        @Const(γ::Nothing), @Const(β::Nothing), @Const(ϵ))
    i, j, k = @index(Global, NTuple)
    γ′′ = inv(sqrt(σ²[j] + ϵ))
    β′ = -μ[j] * γ′′
    y[i, j, k] = f(muladd(x[i, j, k], γ′′, β′))
end

@kernel cpu=false inbounds=true function batchnorm_affine_normalize_internal_kernel!(
        y::AbstractArray{<:Number, 3}, γ′::AbstractVector{<:Number},
        @Const(f), @Const(x), @Const(μ), @Const(σ²),
        @Const(γ::Nothing), @Const(β::Nothing), @Const(ϵ))
    i, j, k = @index(Global, NTuple)
    γ′[j] = inv(sqrt(σ²[j] + ϵ))
    β′ = -μ[j] * γ′[j]
    y[i, j, k] = f(muladd(x[i, j, k], γ′[j], β′))
end

@kernel cpu=false inbounds=true function batchnorm_affine_normalize_internal_kernel!(
        y::AbstractArray{<:Number, 3}, @Const(γ′::Nothing),
        @Const(f), @Const(x), @Const(μ), @Const(σ²),
        @Const(γ), @Const(β), @Const(ϵ))
    i, j, k = @index(Global, NTuple)
    γ′′ = γ[j] / sqrt(σ²[j] + ϵ)
    β′ = muladd(-μ[j], γ′′, β[j])
    y[i, j, k] = f(muladd(x[i, j, k], γ′′, β′))
end

@kernel cpu=false inbounds=true function batchnorm_affine_normalize_internal_kernel!(
        y::AbstractArray{<:Number, 3}, γ′::AbstractVector{<:Number},
        @Const(f), @Const(x), @Const(μ), @Const(σ²),
        @Const(γ), @Const(β), @Const(ϵ))
    i, j, k = @index(Global, NTuple)
    γ′[j] = γ[j] / sqrt(σ²[j] + ϵ)
    β′ = muladd(-μ[j], γ′[j], β[j])
    y[i, j, k] = f(muladd(x[i, j, k], γ′[j], β′))
end

function CRC.rrule(
        cfg::RuleConfig{>:HasReverseMode}, ::typeof(batchnorm_affine_normalize_internal),
        opmode::AbstractInternalArrayOpMode, act::F, x::AbstractArray{T, N},
        μ::AbstractVector, σ²::AbstractVector, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real) where {F, T, N}
    y = similar(x,
        promote_type(Utils.eltype(x), Utils.eltype(μ), Utils.eltype(σ²),
            Utils.eltype(γ), Utils.eltype(β)))
    γ′ = similar(
        x, promote_type(Utils.eltype(γ), Utils.eltype(σ²), Utils.eltype(ϵ)), size(x, N - 1))

    batchnorm_affine_normalize_internal!(y, opmode, identity, x, μ, σ², γ, β, ϵ, γ′)
    z, ∇activation = CRC.rrule_via_ad(
        cfg, activation!!, opmode, Traits.is_mutable_array(y), act, y)

    𝒫x, 𝒫μ, 𝒫σ² = CRC.ProjectTo(x), CRC.ProjectTo(μ), CRC.ProjectTo(σ²)
    𝒫γ = γ === nothing ? identity : CRC.ProjectTo(γ)
    𝒫β = β === nothing ? identity : CRC.ProjectTo(β)

    ∇batchnorm_affine_normalize_internal = @closure Δ -> begin
        ∂y = last(∇activation(Δ))
        ∂x, ∂μ, ∂σ², ∂γ, ∂β = ∇batchnorm_affine_normalize(opmode, ∂y, x, μ, σ², γ, β, ϵ, γ′)
        return ∂∅, ∂∅, ∂∅, 𝒫x(∂x), 𝒫μ(∂μ), 𝒫σ²(∂σ²), 𝒫γ(∂γ), 𝒫β(∂β), ∂∅
    end

    return z, ∇batchnorm_affine_normalize_internal
end

function ∇batchnorm_affine_normalize(::LoopedArrayOp, ∂y::AbstractArray{∂yT, 3},
        x::AbstractArray{xT, 3}, μ::AbstractVector, σ²::AbstractVector,
        ::Nothing, ::Nothing, ϵ::Real, γ′::AbstractVector) where {∂yT, xT}
    if Utils.can_strided(∂y, x, μ, σ², γ′)
        idenom = reshape(γ′, 1, :, 1)
        idenom²_2 = @strided @. idenom * idenom / 2
        μ′ = reshape(μ, 1, :, 1)
        xμ = @strided @. x - μ′

        ∂x = @strided @. ∂y * idenom
        ∂μ = @strided mapreduce(-, +, ∂x; dims=(1, 3))

        ∂σ²_full = @strided @. -∂x * xμ * idenom²_2
        ∂σ² = @strided sum(∂σ²_full; dims=(1, 3))

        return ∂x, vec(∂μ), vec(∂σ²), ∂∅, ∂∅
    else
        idenom = reshape(γ′, 1, :, 1)
        idenom²_2 = @. idenom * idenom / 2
        μ′ = reshape(μ, 1, :, 1)
        xμ = @. x - μ′

        ∂x = @. ∂y * idenom
        ∂μ = @. mapreduce(-, +, ∂x; dims=(1, 3))

        ∂σ²_full = @. -∂x * xμ * idenom²_2
        ∂σ² = @. sum(∂σ²_full; dims=(1, 3))

        return ∂x, vec(∂μ), vec(∂σ²), ∂∅, ∂∅
    end
end

function ∇batchnorm_affine_normalize(::LoopedArrayOp, ∂y::AbstractArray{∂yT, 3},
        x::AbstractArray{xT, 3}, μ::AbstractVector, σ²::AbstractVector,
        γ::AbstractVector, β::AbstractVector, ϵ::Real, γ′::AbstractVector) where {∂yT, xT}
    if Utils.can_strided(∂y, x, μ, σ², γ, β, γ′)
        idenom = reshape(@strided(@.(inv(sqrt(σ² + ϵ)))), 1, :, 1)
        idenom² = @strided @. idenom^2
        μ′ = reshape(μ, 1, :, 1)
        xμ = @strided @. x - μ′
        γ′′ = reshape(γ′, 1, :, 1)

        ∂x = @strided @. ∂y * γ′′
        ∂μ = @strided mapreduce(-, +, ∂x; dims=(1, 3))

        ∂σ²_full = @strided @. -∂x * xμ * idenom² / 2
        ∂σ² = @strided sum(∂σ²_full; dims=(1, 3))

        ∂γ_full = @strided @. ∂y * xμ * idenom
        ∂γ = @strided sum(∂γ_full; dims=(1, 3))

        ∂β = @strided sum(∂y; dims=(1, 3))

        return ∂x, vec(∂μ), vec(∂σ²), vec(∂γ), vec(∂β)
    else
        idenom = reshape(γ′, 1, :, 1)
        idenom² = @. idenom^2
        μ′ = reshape(μ, 1, :, 1)
        xμ = @. x - μ′
        γ′′ = reshape(γ′, 1, :, 1)

        ∂x = @. ∂y * γ′′
        ∂μ = @. mapreduce(-, +, ∂x; dims=(1, 3))

        ∂σ²_full = @. -∂x * xμ * idenom² / 2
        ∂σ² = @. sum(∂σ²_full; dims=(1, 3))

        ∂γ_full = @. ∂y * xμ * idenom
        ∂γ = @. sum(∂γ_full; dims=(1, 3))

        ∂β = @. sum(∂y; dims=(1, 3))

        return ∂x, vec(∂μ), vec(∂σ²), vec(∂γ), vec(∂β)
    end
end

function ∇batchnorm_affine_normalize(
        opmode::AbstractInternalArrayOpMode, ∂y::AbstractArray{∂yT, 3},
        x::AbstractArray{xT, 3}, μ::AbstractVector, σ²::AbstractVector,
        γ::Optional{<:AbstractVector}, β::Optional{<:AbstractVector}, ϵ::Real,
        γ′::AbstractVector) where {∂yT, xT}
    ∂x, ∂σ² = similar(x), similar(σ², size(x))
    ∂γ = γ === nothing ? nothing : similar(γ, size(x))

    ∇batchnorm_affine_normalize!(∂x, ∂σ², ∂γ, opmode, ∂y, x, μ, σ², γ, ϵ, γ′)

    ∂μ = dropdims(sum(-, ∂x; dims=(1, 3)); dims=(1, 3))
    ∂σ² = dropdims(sum(∂σ²; dims=(1, 3)); dims=(1, 3))
    ∂γ = γ === nothing ? ∂∅ : dropdims(sum(∂γ; dims=(1, 3)); dims=(1, 3))
    ∂β = β === nothing ? ∂∅ : dropdims(sum(∂y; dims=(1, 3)); dims=(1, 3))

    return ∂x, ∂μ, ∂σ², ∂γ, ∂β
end

function ∇batchnorm_affine_normalize!(
        ∂x::AbstractArray{∂xT, 3}, ∂σ²::AbstractArray{∂σ²T, 3},
        ∂γ::Optional{<:AbstractArray{<:Any, 3}}, ::GPUBroadcastOp,
        ∂y::AbstractArray{∂yT, 3}, x::AbstractArray{xT, 3}, μ::AbstractVector,
        σ²::AbstractVector, γ::Optional{<:AbstractVector}, ϵ::Real,
        γ′::AbstractVector) where {∂xT, ∂σ²T, ∂yT, xT}
    backend = KA.get_backend(∂x)
    Utils.run_ka_kernel(
        ∇batchnorm_affine_normalize_kernel!, backend, nothing, size(∂x),
        ∂x, ∂σ², ∂γ, ∂y, x, μ, σ², ϵ, γ′)
    KA.synchronize(backend)
end

@kernel cpu=false inbounds=true function ∇batchnorm_affine_normalize_kernel!(
        ∂x, ∂σ², @Const(∂γ::Nothing), @Const(∂y), @Const(x),
        @Const(μ), @Const(σ²), @Const(ϵ), @Const(γ′))
    i, j, k = @index(Global, NTuple)
    idenom = γ′[j]
    idenom² = idenom * idenom

    xμ = x[i, j, k] - μ[j]

    ∂x[i, j, k] = ∂y[i, j, k] * γ′[j]
    ∂σ²[i, j, k] = -∂x[i, j, k] * xμ * idenom² / 2
end

@kernel cpu=false inbounds=true function ∇batchnorm_affine_normalize_kernel!(
        ∂x, ∂σ², ∂γ, @Const(∂y), @Const(x),
        @Const(μ), @Const(σ²), @Const(ϵ), @Const(γ′))
    i, j, k = @index(Global, NTuple)
    idenom = inv(sqrt(σ²[j] + ϵ))
    idenom² = idenom * idenom

    xμ = x[i, j, k] - μ[j]

    ∂x[i, j, k] = ∂y[i, j, k] * γ′[j]
    ∂σ²[i, j, k] = -∂x[i, j, k] * xμ * idenom² / 2
    ∂γ[i, j, k] = ∂y[i, j, k] * xμ * idenom
end
