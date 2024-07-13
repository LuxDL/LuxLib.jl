for op in (:fast_broadcast, :fast_broadcast!)
    @eval function $(op)(f::F, x::AbstractArray, args...) where {F <: Function}
        return $(op)(get_device_type(x, args...), f, x, args...)
    end
end

function fast_broadcast(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    return @turbo @. f(x, args...)
end

function fast_broadcast(::Type, f::F, x::AbstractArray, args...) where {F <: Function}
    return @. f(x, args...)
end

function fast_broadcast!(
        ::Type{LuxCPUDevice}, f::F, x::AbstractArray, args...) where {F <: Function}
    return @turbo @. x = f(x, args...)
end

function fast_broadcast!(::Type, f::F, x::AbstractArray, args...) where {F <: Function}
    if __fails_inplace_bcast_gpu(f) && length(args) == 1
        y = first(args)
        @. x = f.outer(f.inner(x, y))
    else
        @. x = f(x, args...)
    end
    return x
end
