# Common Activation Gradient
function __activation_gradient(Δ, out, act::F, x) where {F}
    only_deriv = @closure (Δᵢ, oᵢ, xᵢ) -> Δᵢ * only_derivative(oᵢ, act, xᵢ)
    return fast_broadcast(only_deriv, Δ, out, x)
end

# NOTE: The functions below aren't compatible for use with ChainRules.

# TODO: Enzyme would need a split reverse + forward pass to handle LV
#       xref https://github.com/EnzymeAD/Enzyme.jl/issues/1635

function __fast_broadcast_impl(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    y = similar(x, Broadcast.broadcast_shape(size(x), size.(args)...))
    return __fast_broadcast_impl!(T, y, f, x, args...)
end

function __fast_broadcast_impl!(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    @assert size(x) == Broadcast.broadcast_shape(size(x), size.(args)...)
    return __fast_broadcast_impl!(T, x, f, x, args...)  # aliased
end

## CPU -- LV --> FastBroadcast --> Generic Broadcast
## Other backends are handled by the fallback
function __fast_broadcast_impl!(::Type{LuxCPUDevice}, y::AbstractArray{<:LV_ELTYPES},
        f::F, x::AbstractArray{<:LV_ELTYPES},
        args::Union{AbstractArray{<:LV_ELTYPES}, <:LV_ELTYPES}...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl!(Nothing, y, f, x, args...)
    # LV doesn't support broadcasting over singleton first dimensions
    if any(m -> size(m, 1) == 1, (x, args...))
        __fast_broadcast_fb_impl!(y, f, x, args...)
    else
        __fast_broadcast_lv_impl!(y, f, x, args...)
    end
    return y
end

function __fast_broadcast_impl!(::Type{LuxCPUDevice}, y::AbstractArray, f::F,
        x::AbstractArray, args...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl!(Nothing, y, f, x, args...)
    __fast_broadcast_fb_impl!(y, f, x, args...)
    return y
end

function __fast_broadcast_lv_impl!(y, f, x, args...)
    if length(y) > THREADING_THRESHOLD
        @turbo thread=true @. y = f(x, args...)
    else
        @turbo @. y = f(x, args...)
    end
end

function __fast_broadcast_fb_impl!(y, f, x, args...)
    if length(y) > THREADING_THRESHOLD
        @.. thread=true broadcast=true y=f(x, args...)
    else
        @.. broadcast=true y=f(x, args...)
    end
end

for ffail in (sigmoid_fast ∘ +, swish ∘ +)
    @eval function __fast_broadcast_impl!(::Type{<:AbstractLuxGPUDevice}, y::AbstractArray,
            f::typeof($ffail), x::AbstractArray, z)
        @. y = f.outer(f.inner(x, z))
        return y
    end
end

function __fast_broadcast_impl!(::Type{T}, y::AbstractArray, f::F,
        x::AbstractArray, args...) where {F <: Function, T}
    @. y = f(x, args...)
    return y
end
