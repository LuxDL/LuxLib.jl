@doc doc"""
    dropout(rng::AbstractRNG, x, p, ::Val{training}, invp, dims)
    dropout(rng::AbstractRNG, x, mask, p, ::Val{training}, ::Val{update_mask}, invp, dims)

Dropout: Simple Way to prevent Neural Networks for Overfitting. For details see [1].

## Arguments

  - `rng`: Random number generator
  - `x`: Input Array
  - `mask`: Dropout Mask. If not used then it is constructed automatically
  - `p`: Probability of an element to be dropped out
  - `Val(training)`: If `true` then dropout is applied on `x` with probability `p` along
    `dims`. Else, `x` is returned
  - `Val(update_mask)`: If `true` then the mask is generated and used. Else, the `mask`
    provided is directly used
  - `invp`: Inverse of the probability
  - `dims`: Dimensions along which dropout is applied
  - `invp`: Inverse of the probability (``\frac{1}{p}``)

## Returns

  - Output Array after applying dropout
  - Dropout Mask (if `training == false`, the returned value is meaningless)
  - Updated state for the random number generator

## References

[1] Srivastava, Nitish, et al. "Dropout: a simple way to prevent neural networks from
    overfitting." The journal of machine learning research 15.1 (2014): 1929-1958.
"""
function dropout(
        rng::AbstractRNG, x::AbstractArray, p::T, ::Val{true}, invp::T, dims) where {T}
    rng = LuxCore.replicate(rng)
    mask = _generate_dropout_mask(rng, x, p, invp; dims)
    return (x .* CRC.ignore_derivatives(mask), mask, rng)
end

function dropout(
        rng::AbstractRNG, x::AbstractArray, p::T, ::Val{false}, ::T, dims) where {T}
    return (x, x, rng)
end

function dropout(rng::AbstractRNG, x::AbstractArray, ::AbstractArray,
        p::T, t::Val, ::Val{true}, invp::T, dims) where {T}
    return dropout(rng, x, p, t, invp, dims)
end

function dropout(rng::AbstractRNG, x::AbstractArray{T1, N}, mask::AbstractArray{T2, N},
        p::T, ::Val{true}, ::Val{false}, invp::T, dims) where {T, T1, T2, N}
    size(x) != size(mask) && return dropout(rng, x, p, Val(true), invp, dims)
    return x .* CRC.ignore_derivatives(mask), mask, rng
end

function dropout(rng::AbstractRNG, x::AbstractArray{T1, N}, mask::AbstractArray{T2, N},
        p::T, ::Val{false}, ::Val{false}, invp::T, dims) where {T, T1, T2, N}
    return (x, mask, rng)
end

"""
    alpha_dropout(rng::AbstractRNG, x, p, ::Val{training})
    alpha_dropout(rng::AbstractRNG, x, p, ::Val{training}, α, A, B)

Alpha Dropout: Dropout ensuring that the mean and variance of the output remains same as the
input. For details see [1]. Use the second call signature to avoid recomputing the constants
for a fixed dropout probability.

## Arguments

  - `rng`: Random number generator
  - `x`: Input Array
  - `p`: Probability of an element to be dropped out
  - `Val(training)`: If `true` then dropout is applied on `x` with probability `p`. Else,
    `x` is returned
  - `α`: `-1.7580993408473766`. Computed at limit x tends to infinity, `selu(x) = -λβ = α`
  - `A`: Scaling factor for the mean
  - `B`: Scaling factor for the variance

## Returns

  - Output Array after applying alpha dropout
  - Updated state for the random number generator

## References

[1] Klambauer, Günter, et al. "Self-normalizing neural networks." Advances in neural
information processing systems 30 (2017).
"""
function alpha_dropout(rng::AbstractRNG, x::AbstractArray{T}, p, t::Val{true}) where {T}
    α = T(-1.7580993408473766)
    A = T(inv(sqrt((1 - p) * (1 + p * α^2))))
    B = T(-A * α * p)
    return alpha_dropout(rng, x, p, t, α, A, B)
end

function alpha_dropout(rng::AbstractRNG, x::AbstractArray, p, t::Val{false})
    return alpha_dropout(rng, x, p, t, 0, 0, 0)
end

function alpha_dropout(rng::AbstractRNG, x::AbstractArray, p, ::Val{true}, α, A, B)
    noise, rng = _alpha_dropout_noise(rng, x)
    # NOTE: Combining the last 2 lines causes a compilation error for Tracker on GPU
    y = _alpha_dropout_kernel(noise, p, x, α)
    res = @. A * y + B
    return res, rng
end

alpha_dropout(rng::AbstractRNG, x::AbstractArray, p, ::Val{false}, α, A, B) = (x, rng)

# Mask Generation
@inline _dropout_shape(s, ::Colon) = size(s)
@inline function _dropout_shape(s, dims)
    return tuple((i in dims ? si : 1 for (i, si) in enumerate(size(s)))...)
end

@inline _dropout_kernel(y, p, invp) = ifelse(y > p, invp, oftype(y, 0))

@inline _alpha_dropout_kernel(noise, p, x, α) = @. ifelse(noise > p, x, α)

## Zygote is otherwise type unstable
@inline function CRC.rrule(::typeof(_alpha_dropout_kernel), noise, p, x, α)
    _cond = noise .> p
    y = ifelse.(_cond, x, α)
    _∇alpha_dropout_kernel = @closure Δ -> begin
        return NoTangent(), NoTangent(), NoTangent(), (_cond .* Δ), sum(@.((1 - _cond)*Δ))
    end
    return y, _∇alpha_dropout_kernel
end

@inline _dropout_fptype(x) = float(real(eltype(x)))

CRC.@non_differentiable _dropout_fptype(::Any...)
EnzymeRules.inactive_noinl(::typeof(_dropout_fptype), ::Any...) = nothing

@inline function _alpha_dropout_noise(rng, x)
    rng = LuxCore.replicate(rng)
    noise = similar(x, _dropout_fptype(x))
    rand!(rng, noise)
    return noise, rng
end

CRC.@non_differentiable _alpha_dropout_noise(::Any...)
EnzymeRules.inactive_noinl(::typeof(_alpha_dropout_noise), ::Any...) = nothing

@inline function _generate_dropout_mask(rng::AbstractRNG, x, p, invp; dims)
    realfptype = _dropout_fptype(x)
    y = rand!(rng, similar(x, realfptype, _dropout_shape(x, dims)))
    y .= _dropout_kernel.(y, p, invp)
    return y
end

CRC.@non_differentiable _generate_dropout_mask(::Any...)
EnzymeRules.inactive_noinl(::typeof(_generate_dropout_mask), ::Any...) = nothing
CRC.@non_differentiable _dropout_shape(::Any...)
EnzymeRules.inactive_noinl(::typeof(_dropout_shape), ::Any...) = nothing
