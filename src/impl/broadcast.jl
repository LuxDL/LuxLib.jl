# Common Activation Gradient
function __activation_gradient(Δ, out, act::F, x) where {F}
    only_deriv = @closure (oᵢ, xᵢ) -> only_derivative(oᵢ, act, xᵢ)
    if fast_scalar_indexing(out) && eltype(out) <: LV_ELTYPES
        return @turbo @. Δ * only_deriv(out, x)
    end
    return @. Δ * only_deriv(out, x)
end

## Needed for reverse over reverse mode AD
function CRC.rrule(cfg::RuleConfig{>:HasReverseMode},
        ::typeof(__activation_gradient), Δ, out, act::F, x) where {F}
    return CRC.rrule_via_ad(cfg, __activation_gradient_simple, Δ, out, act, x)
end

function __activation_gradient_simple(Δ, out, act::F, x) where {F}
    return @. Δ * only_derivative(out, act, x)
end

# NOTE: The functions below aren't compatible for use with ChainRules.

# TODO: Enzyme would need a split reverse + forward pass to handle LV
#       xref https://github.com/EnzymeAD/Enzyme.jl/issues/1635

function __fast_broadcast_impl(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    return __fast_broadcast_impl!(T, similar(x), f, x, args...)
end

function __fast_broadcast_impl!(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    return __fast_broadcast_impl!(T, x, f, x, args...)  # aliased
end

## CPU -- LV --> FastBroadcast --> Generic Broadcast
## Other backends are handled by the fallback
function __fast_broadcast_impl!(::Type{LuxCPUDevice}, y::AbstractArray{<:LV_ELTYPES},
        f::F, x::AbstractArray{<:LV_ELTYPES},
        args::Union{AbstractArray{<:LV_ELTYPES}, <:LV_ELTYPES}...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl!(Nothing, y, f, x, args...)
    if maximum(length, (x, args...)) > THREADING_THRESHOLD
        @turbo thread=true @. y = f(x, args...)
    else
        @turbo @. y = f(x, args...)
    end
    return y
end

function __fast_broadcast_impl!(::Type{LuxCPUDevice}, y::AbstractArray, f::F,
        x::AbstractArray, args...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl!(Nothing, y, f, x, args...)
    if maximum(length, (x, args...)) > THREADING_THRESHOLD
        @.. thread=true y=f(x, args...)
    else
        @.. y = f(x, args...)
    end
    return y
end

for ffail in (sigmoid_fast ∘ +, swish ∘ +)
    @eval function __fast_broadcast_impl!(
            ::Type{T}, y::AbstractArray, f::typeof($ffail), x::AbstractArray, z) where {T}
        @. y = f.outer(f.inner(x, z))
        return y
    end
end

function __fast_broadcast_impl!(::Type{T}, y::AbstractArray, f::F,
        x::AbstractArray{T}, args...) where {F <: Function, T}
    @. y = f(x, args...)
    return y
end
