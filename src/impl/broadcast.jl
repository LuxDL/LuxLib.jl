# Common Activation Gradient
function __activation_gradient(Δ, out, act::F, x) where {F}
    only_deriv = @closure (Δᵢ, oᵢ, xᵢ) -> Δᵢ * only_derivative(oᵢ, act, xᵢ)
    return fast_broadcast(only_deriv, Δ, out, x)
end

# NOTE: The functions below aren't compatible for use with ChainRules.

# TODO: Enzyme would need a split reverse + forward pass to handle LV
#       xref https://github.com/EnzymeAD/Enzyme.jl/issues/1635

## CPU -- LV --> FastBroadcast --> Generic Broadcast
## Other backends are handled by the fallback

# First we define the ones that don't operate inplace.
function __fast_broadcast_impl(::Type{LuxCPUDevice}, f::F, x::AbstractArray{<:LV_ELTYPES},
        args::Union{AbstractArray{<:LV_ELTYPES}, <:LV_ELTYPES}...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl(Nothing, f, x, args...)
    # LV doesn't support broadcasting over singleton first dimensions
    if unrolled_any(m -> size(m, 1) == 1, (x, args...))
        return __fast_broadcast_fb_impl(f, x, args...)
    end
    return __fast_broadcast_lv_impl(f, x, args...)
end

@inline function __fast_broadcast_impl(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl(Nothing, f, x, args...)
    return __fast_broadcast_fb_impl(f, x, args...)
end

for ffail in (sigmoid_fast ∘ +, swish ∘ +)
    @eval function __fast_broadcast_impl(
            ::Type{<:AbstractLuxGPUDevice}, f::typeof($ffail), x::AbstractArray, y)
        return @. f.outer(f.inner(x, y))
    end
end

function __fast_broadcast_impl(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    return @. f(x, args...)
end

# Now let's do the ones that update the first argument inplace
function __fast_broadcast_impl!(::Type{LuxCPUDevice}, f::F, x::AbstractArray{<:LV_ELTYPES},
        args::Union{AbstractArray{<:LV_ELTYPES}, <:LV_ELTYPES}...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl!(Nothing, f, x, args...)
    # LV doesn't support broadcasting over singleton first dimensions
    if unrolled_any(m -> size(m, 1) == 1, (x, args...))
        __fast_broadcast_fb_impl!(x, f, x, args...)
    else
        __fast_broadcast_lv_impl!(x, f, x, args...)
    end
    return x
end

@inline function __fast_broadcast_impl!(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl!(Nothing, f, x, args...)
    return __fast_broadcast_fb_impl!(x, f, x, args...)
end

for ffail in (sigmoid_fast ∘ +, swish ∘ +)
    @eval function __fast_broadcast_impl!(
            ::Type{<:AbstractLuxGPUDevice}, f::typeof($ffail), x::AbstractArray, y)
        @. x = f.outer(f.inner(x, y))
        return x
    end
end

function __fast_broadcast_impl!(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    @. x = f(x, args...)
    return x
end

# Implement the same routines with specific backends
function __fast_broadcast_lv_impl!(y, f::F, x, args...) where {F <: Function}
    if length(y) > THREADING_THRESHOLD
        @turbo thread=true @. y = f(x, args...)
    else
        @turbo @. y = f(x, args...)
    end
    return y
end

function __fast_broadcast_lv_impl(f::F, x, args...) where {F <: Function}
    if unrolled_reduce(max, unrolled_map(length, (x, args...))) > THREADING_THRESHOLD
        return @turbo thread=true @. f(x, args...)
    end
    return @turbo @. f(x, args...)
end

function __fast_broadcast_fb_impl!(y, f::F, x, args...) where {F <: Function}
    if length(y) > THREADING_THRESHOLD
        @.. thread=true broadcast=true y=f(x, args...)
    else
        @.. broadcast=true y=f(x, args...)
    end
    return y
end

function __fast_broadcast_fb_impl(f::F, x, args...) where {F <: Function}
    if unrolled_reduce(max, unrolled_map(length, (x, args...))) > THREADING_THRESHOLD
        return @.. thread=true broadcast=true f(x, args...)
    end
    return @.. broadcast=true f(x, args...)
end
