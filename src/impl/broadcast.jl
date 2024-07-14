# Common Activation Gradient
function __activation_gradient(Δ, out, act::F, x) where {F}
    only_deriv = @closure (Δᵢ, oᵢ, xᵢ) -> Δᵢ * only_derivative(oᵢ, act, xᵢ)
    return fast_broadcast(only_deriv, Δ, out, x)
end

# NOTE: The functions below aren't compatible for use with ChainRules.

# TODO: Enzyme would need a split reverse + forward pass to handle LV
#       xref https://github.com/EnzymeAD/Enzyme.jl/issues/1635

## CPU -- LV --> FastBroadcast --> Generic Broadcast
##        LV doesn't support broadcasting over singleton first dimensions
## Other backends are handled by the fallback

# First we define the ones that don't operate inplace.
function __fast_broadcast_impl(::Type{LuxCPUDevice}, f::F, x::AbstractArray{<:LV_ELTYPES},
        args::Union{AbstractArray{<:LV_ELTYPES}, <:LV_ELTYPES}...) where {F <: Function}
    unrolled_all(fast_scalar_indexing, (x, args...)) ||
        return __fast_broadcast_impl(Nothing, f, x, args...)
    __can_loop_vectorize(x, args...) || return __fast_broadcast_fb_impl(f, x, args...)
    return __fast_broadcast_lv_impl(f, x, args...)
end

@inline function __fast_broadcast_impl(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    unrolled_all(fast_scalar_indexing, (x, args...)) ||
        return __fast_broadcast_impl(Nothing, f, x, args...)
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
    unrolled_all(fast_scalar_indexing, (x, args...)) ||
        return __fast_broadcast_impl!(Nothing, f, x, args...)
    if __can_loop_vectorize(x, args...)
        __fast_broadcast_lv_impl!(f, x, args...)
    else
        __fast_broadcast_fb_impl!(f, x, args...)
    end
    return x
end

@inline function __fast_broadcast_impl!(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    fast_scalar_indexing(x) || return __fast_broadcast_impl!(Nothing, f, x, args...)
    return __fast_broadcast_fb_impl!(f, x, args...)
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
# We handle special cases for LV as well:
#   - size(A, 1) == 1 isn't supported by LV. For a single bcast, we just construct a loop
#   - `f.(x, y)` is commonly use for bias activation. Here we check the broadcast dims
#     and if we detect that we can do a fast LV broadcast, we do so. (TODO)

function __fast_broadcast_lv_impl!(f::F, x::AbstractArray) where {F <: Function}
    if length(x) > THREADING_THRESHOLD
        @turbo thread=true for i in eachindex(x)
            x[i] = f(x[i])
        end
        return x
    end
    @turbo for i in eachindex(x)
        x[i] = f(x[i])
    end
    return x
end

function __fast_broadcast_lv_impl!(f::F, x::AbstractArray, args...) where {F <: Function}
    if unrolled_reduce(max, unrolled_map(length, (x, args...))) > THREADING_THRESHOLD
        @turbo thread=true @. x = f(x, args...)
    else
        @turbo @. x = f(x, args...)
    end
    return x
end

function __fast_broadcast_lv_impl(f::F, x::AbstractArray) where {F <: Function}
    y = similar(x, __get_broadcast_return_type(f, eltype(x)))
    if length(x) > THREADING_THRESHOLD
        @turbo thread=true for i in eachindex(y)
            y[i] = f(x[i])
        end
        return y
    end
    @turbo for i in eachindex(y)
        y[i] = f(x[i])
    end
    return y
end

function __fast_broadcast_lv_impl(f::F, x::AbstractArray, args...) where {F <: Function}
    if unrolled_reduce(max, unrolled_map(length, (x, args...))) > THREADING_THRESHOLD
        return @turbo thread=true @. f(x, args...)
    end
    return @turbo @. f(x, args...)
end

function __fast_broadcast_fb_impl!(f::F, x, args...) where {F <: Function}
    if unrolled_reduce(max, unrolled_map(length, (x, args...))) > THREADING_THRESHOLD
        @.. thread=true broadcast=true x=f(x, args...)
    else
        @.. broadcast=true x=f(x, args...)
    end
    return x
end

function __fast_broadcast_fb_impl(f::F, x, args...) where {F <: Function}
    if unrolled_reduce(max, unrolled_map(length, (x, args...))) > THREADING_THRESHOLD
        return @.. thread=true broadcast=true f(x, args...)
    end
    return @.. broadcast=true f(x, args...)
end

function __get_broadcast_return_type(f::F, ::Type{T}) where {F, T}
    rT = Core.Compiler._return_type(f, Tuple{T})
    return isconcretetype(rT) ? rT : T
end

function __can_loop_vectorize(x::AbstractArray, args...)
    unrolled_all(fast_scalar_indexing, (x, args...)) || return false  # Needs scalar indexing
    length(args) == 0 && return true  # We construct a loop
    unrolled_any(m -> size(m, 1) == 1, (x, args...)) && return false  # We can't do LV
    return unrolled_all(LoopVectorization.check_args, (x, args...))
end
