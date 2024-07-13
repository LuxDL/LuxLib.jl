function __fast_broadcast_impl(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    if maximum(length, (x, args...)) > 100_000
        return @turbo thread=true @. f(x, args...)
    end
    return @turbo @. f(x, args...)
end

function __fast_broadcast_impl(
        ::Type, f::F, x::AbstractArray, args...) where {F <: Function}
    if __fails_inplace_bcast_gpu(f) && length(args) == 1
        y = first(args)
        return @. f.outer(f.inner(x, y))
    end
    return @. f(x, args...)
end

function __fast_broadcast_impl!(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    if maximum(length, (x, args...)) > 100_000
        @turbo thread=true @. x = f(x, args...)
    else
        @turbo @. x = f(x, args...)
    end
    return x
end

function __fast_broadcast_impl!(
        ::Type, f::F, x::AbstractArray, args...) where {F <: Function}
    if __fails_inplace_bcast_gpu(f) && length(args) == 1
        y = first(args)
        @. x = f.outer(f.inner(x, y))
    else
        @. x = f(x, args...)
    end
    return x
end
