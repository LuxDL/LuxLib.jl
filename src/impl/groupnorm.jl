groupnorm_reduce_dims(::AbstractArray{T, N}) where {T, N} = ntuple(static, N - 1)

CRC.@non_differentiable groupnorm_reduce_dims(::Any)

function groupnorm(x::AbstractArray{xT, N}, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, groups::Int, act::F, ϵ::Real) where {F, N, xT}
    x′ = reshape(x, size(x)[1:(N - 2)]..., size(x, N - 1) ÷ groups, groups, size(x, N))
    (μ, σ²), _ = compute_batch_statistics(
        x′, nothing, nothing, groupnorm_reduce_dims(x), False(), nothing)
    return reshape(groupnorm_affine_normalize(act, x′, μ, σ², γ, β, ϵ), size(x))
end

function groupnorm_affine_normalize(
        act::F, x::AbstractArray{xT, N}, μ::AbstractArray{μT, N},
        σ²::AbstractArray{σ²T, N}, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real) where {F, N, xT, μT, σ²T}
    return groupnorm_affine_normalize(
        internal_operation_mode((x, μ, σ², γ, β)), act, x, μ, σ², γ, β, ϵ)
end

function groupnorm_affine_normalize(
        ::GenericBroadcastOp, act::F, x::AbstractArray{xT, N}, μ::AbstractArray{μT, N},
        σ²::AbstractArray{σ²T, N}, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real) where {F, N, xT, μT, σ²T}
    return affine_normalize(
        act, x, μ, σ², reshape_norm_dims(x, γ), reshape_norm_dims(x, β), ϵ)
end

@generated function groupnorm_affine_normalize(
        opmode::AbstractInternalArrayOpMode, act::F, x::AbstractArray{xT, N},
        μ::AbstractArray{μT, N}, σ²::AbstractArray{σ²T, N}, γ::Optional{<:AbstractVector},
        β::Optional{<:AbstractVector}, ϵ::Real) where {F, N, xT, μT, σ²T}
    reshape_calls = if γ != Nothing
        quote
            γ′ = reshape(γ, 1, size(x, N - 2), size(x, N - 1), 1)
            β′ = reshape(β, 1, size(x, N - 2), size(x, N - 1), 1)
        end
    else
        quote
            γ′ = nothing
            β′ = nothing
        end
    end

    return quote
        x′ = reshape(x, :, size(x, N - 2), size(x, N - 1), size(x, N))
        μ′ = reshape(μ, 1, 1, size(x, N - 1), size(x, N))
        σ²′ = reshape(σ², 1, 1, size(x, N - 1), size(x, N))
        $(reshape_calls)
        return reshape(
            groupnorm_affine_normalize_internal(opmode, act, x′, μ′, σ²′, γ′, β′, ϵ),
            size(x))
    end
end

@stable default_mode="disable" function groupnorm_affine_normalize_internal(
        opmode::AbstractInternalArrayOpMode, act::F,
        x::AbstractArray{xT, 4}, μ::AbstractArray{μT, 4}, σ²::AbstractArray{σ²T, 4},
        γ::Optional{<:AbstractArray{<:Any, 4}}, β::Optional{<:AbstractArray{<:Any, 4}},
        ϵ::Real) where {F, xT, μT, σ²T}
    y = similar(x,
        promote_type(Utils.eltype(x), Utils.eltype(μ), Utils.eltype(σ²),
            Utils.eltype(γ), Utils.eltype(β)))
    groupnorm_affine_normalize_internal!(y, opmode, act, x, μ, σ², γ, β, ϵ)
    return y
end

function groupnorm_affine_normalize_internal!(
        y::AbstractArray{yT, 4}, ::Union{GPUBroadcastOp, LoopedArrayOp}, act::F,
        x::AbstractArray{xT, 4}, μ::AbstractArray{μT, 4}, σ²::AbstractArray{σ²T, 4},
        γ::Optional{<:AbstractArray{<:Any, 4}}, β::Optional{<:AbstractArray{<:Any, 4}},
        ϵ::Real) where {F, yT, xT, μT, σ²T}
    backend = KA.get_backend(y)
    Utils.run_ka_kernel(
        groupnorm_affine_normalize_kernel!, backend, nothing, size(y),
        y, act, x, μ, σ², γ, β, ϵ)
    KA.synchronize(backend)
end

@kernel inbounds=true function groupnorm_affine_normalize_kernel!(
        y::AbstractArray{<:Number, 4}, @Const(f),
        @Const(x), @Const(μ), @Const(σ²), @Const(γ::Nothing), @Const(β::Nothing), @Const(ϵ))
    i, j, k, l = @index(Global, NTuple)
    γ′ = inv(sqrt(σ²[1, 1, k, l] + ϵ))
    β′ = -μ[1, 1, k, l] * γ′
    y[i, j, k, l] = f(muladd(x[i, j, k, l], γ′, β′))
end

@kernel inbounds=true function groupnorm_affine_normalize_kernel!(
        y::AbstractArray{<:Number, 4}, @Const(f), @Const(x),
        @Const(μ), @Const(σ²), @Const(γ), @Const(β), @Const(ϵ))
    i, j, k, l = @index(Global, NTuple)
    γ′ = γ[1, j, k, 1] / sqrt(σ²[1, 1, k, l] + ϵ)
    β′ = muladd(-μ[1, 1, k, l], γ′, β[1, j, k, 1])
    y[i, j, k, l] = f(muladd(x[i, j, k, l], γ′, β′))
end

function CRC.rrule(
        cfg::RuleConfig{>:HasReverseMode}, ::typeof(groupnorm_affine_normalize_internal),
        opmode::AbstractInternalArrayOpMode, f::F,
        x::AbstractArray{T, 4}, μ::AbstractArray{μT, 4}, σ²::AbstractArray{σ²T, 4},
        γ::Optional{<:AbstractArray{<:Any, 4}}, β::Optional{<:AbstractArray{<:Any, 4}},
        ϵ::Real) where {F, T, μT, σ²T}
    y = similar(x,
        promote_type(Utils.eltype(x), Utils.eltype(μ), Utils.eltype(σ²),
            Utils.eltype(γ), Utils.eltype(β)))
    groupnorm_affine_normalize_internal!(y, opmode, identity, x, μ, σ², γ, β, ϵ)
    z, ∇activation = CRC.rrule_via_ad(
        cfg, activation!!, opmode, Traits.is_mutable_array(y), f, y)

    𝒫x, 𝒫μ, 𝒫σ² = CRC.ProjectTo(x), CRC.ProjectTo(μ), CRC.ProjectTo(σ²)
    𝒫γ = γ === nothing ? identity : CRC.ProjectTo(γ)
    𝒫β = β === nothing ? identity : CRC.ProjectTo(β)

    ∇groupnorm_affine_normalize_internal = @closure Δ -> begin
        ∂y = last(∇activation(Δ))
        ∂x, ∂μ, ∂σ², ∂γ, ∂β = ∇groupnorm_affine_normalize(opmode, ∂y, x, μ, σ², γ, β, ϵ)
        return ∂∅, ∂∅, ∂∅, 𝒫x(∂x), 𝒫μ(∂μ), 𝒫σ²(∂σ²), 𝒫γ(∂γ), 𝒫β(∂β), ∂∅
    end

    return z, ∇groupnorm_affine_normalize_internal
end

function ∇groupnorm_affine_normalize(
        opmode::AbstractInternalArrayOpMode, ∂y::AbstractArray{∂yT, 4},
        x::AbstractArray{xT, 4}, μ::AbstractArray{μT, 4}, σ²::AbstractArray{σ²T, 4},
        γ::Optional{<:AbstractArray{<:Any, 4}}, β::Optional{<:AbstractArray{<:Any, 4}},
        ϵ::Real) where {∂yT, xT, μT, σ²T}
    ∂x, ∂σ² = similar(x), similar(σ², size(x))
    ∂γ = γ === nothing ? nothing : similar(γ, size(x))

    ∇groupnorm_affine_normalize!(∂x, ∂σ², ∂γ, opmode, ∂y, x, μ, σ², γ, ϵ)

    ∂μ = sum(-, ∂x; dims=(1, 2))
    ∂σ² = sum(∂σ²; dims=(1, 2))
    ∂γ = γ === nothing ? ∂∅ : sum(∂γ; dims=(1, 4))
    ∂β = β === nothing ? ∂∅ : sum(∂y; dims=(1, 4))

    return ∂x, ∂μ, ∂σ², ∂γ, ∂β
end

function ∇groupnorm_affine_normalize!(
        ∂x::AbstractArray{∂xT, 4}, ∂σ²::AbstractArray{∂σ²T, 4},
        ∂γ::Optional{<:AbstractArray{<:Any, 4}}, ::Union{GPUBroadcastOp, LoopedArrayOp},
        ∂y::AbstractArray{∂yT, 4}, x::AbstractArray{xT, 4}, μ::AbstractArray{μT, 4},
        σ²::AbstractArray{σ²T, 4}, γ::Optional{<:AbstractArray{<:Any, 4}},
        ϵ::Real) where {∂xT, ∂σ²T, ∂yT, xT, μT, σ²T}
    backend = KA.get_backend(∂x)
    Utils.run_ka_kernel(
        ∇groupnorm_affine_normalize_kernel!, backend, nothing, size(∂x),
        ∂x, ∂σ², ∂γ, ∂y, x, μ, σ², ϵ, γ)
    KA.synchronize(backend)
end

@kernel inbounds=true function ∇groupnorm_affine_normalize_kernel!(
        ∂x, ∂σ², @Const(∂γ::Nothing), @Const(∂y), @Const(x),
        @Const(μ), @Const(σ²), @Const(ϵ), @Const(γ::Nothing))
    i, j, k, l = @index(Global, NTuple)
    idenom = inv(sqrt(σ²[1, 1, k, l] + ϵ))

    ∂x[i, j, k, l] = ∂y[i, j, k, l] * idenom
    ∂σ²[i, j, k, l] = ∂x[i, j, k, l] * (μ[1, 1, k, l] - x[i, j, k, l]) * idenom * idenom / 2
end

@kernel inbounds=true function ∇groupnorm_affine_normalize_kernel!(
        ∂x, ∂σ², ∂γ, @Const(∂y), @Const(x),
        @Const(μ), @Const(σ²), @Const(ϵ), @Const(γ))
    i, j, k, l = @index(Global, NTuple)
    idenom = inv(sqrt(σ²[1, 1, k, l] + ϵ))
    γ′ = γ[1, j, k, 1] * idenom

    xμ_d = (x[i, j, k, l] - μ[1, 1, k, l]) * idenom

    ∂x[i, j, k, l] = ∂y[i, j, k, l] * γ′
    ∂σ²[i, j, k, l] = -∂x[i, j, k, l] * xμ_d * idenom / 2
    ∂γ[i, j, k, l] = ∂y[i, j, k, l] * xμ_d
end
