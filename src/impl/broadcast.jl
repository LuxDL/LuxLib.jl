# NOTE: These functions aren't compatible for use inside ChainRules. Use `fast_broadcast`
#       instead.

# TODO: Enzyme would need a split reverse + forward pass to handle LV
#       xref https://github.com/EnzymeAD/Enzyme.jl/issues/1635
## CPU -- LV --> FastBraodcast --> Generic Broadcast
function __fast_broadcast_impl(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    return __fast_broadcast_impl!(T, similar(x), f, x, args...)
end

function __fast_broadcast_impl!(
        ::Type{T}, f::F, x::AbstractArray, args...) where {F <: Function, T}
    return __fast_broadcast_impl!(T, x, f, x, args...)  # aliased
end

## CPU -- LV --> FastBraodcast --> Generic Broadcast
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

function __fast_broadcast_impl!(::Type{T}, y::AbstractArray{T}, f::F,
        x::AbstractArray{T}, args...) where {F <: Function, T}
    @. y = f(x, args...)
    return y
end
