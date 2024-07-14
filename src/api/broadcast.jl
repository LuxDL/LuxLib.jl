"""
    fast_activation!!(σ::F, x::AbstractArray) where {F}

Compute `σ.(x)` with the best possible implementation available. If it is possible to
rewrite `x` in-place, it does so. If `x` is an immutable array, it falls back to the
generic implementation.

!!! note

    This function doesn't replace `σ` with `NNlib.fast_act(σ, ...)`, that needs to be
    done by the user if needed.

## Arguments

  - `σ`: Activation function
  - `x`: Input array

## Returns

  - Output Array with the same size as `x`

!!! warning

    Deprecated! Use [`fast_broadcast!!`](@ref) instead.
"""
function fast_activation!!(f::F, x::AbstractArray) where {F}
    Base.depwarn("`fast_activation!!` is deprecated, use `fast_broadcast!!` instead",
        :fast_activation!!)
    return fast_broadcast!!(f, x)
end

"""
    fast_broadcast!!(f::F, x::AbstractArray, args...) where {F <: Function}

Compues `@. f(x, args...)`. If `x` can be set-indexed, it updates `x` in place.
Otherwise, it falls back to allocating a new array.

Since `x` is not guaranteed to be modified inplace, call the function as
`y = fast_broadcast!!(...)`.
"""
@generated function fast_broadcast!!(f::F, x::AbstractArray, args...) where {F <: Function}
    ArrayInterface.can_setindex(x) && :(return fast_broadcast!(f, x, args...))
    return :(fast_broadcast(f, x, args...))
end

fast_broadcast!!(::typeof(identity), x::AbstractArray) = x

@stable default_mode="warn" function fast_broadcast(
        f::F, x::AbstractArray, args...) where {F <: Function}
    unrolled_any(__has_tracked_value, (x, args...)) && return broadcast(f, x, args...)
    return __fast_broadcast_impl(get_device_type((x, args...)), f, x, args...)
end

function CRC.rrule(cfg::RuleConfig{>:HasReverseMode}, ::typeof(fast_broadcast),
        f::F, x::AbstractArray, args...) where {F <: Function}
    return CRC.rrule_via_ad(cfg, broadcast, f, x, args...)
end

@stable default_mode="warn" function fast_broadcast!(
        f::F, x::AbstractArray, args...) where {F <: Function}
    return __fast_broadcast_impl!(get_device_type((x, args...)), f, x, args...)
end

# In the general case, use the generic implementation
function CRC.rrule(cfg::RuleConfig{>:HasReverseMode}, ::typeof(fast_broadcast!!),
        f::F, x::AbstractArray, args...) where {F <: Function}
    return CRC.rrule_via_ad(cfg, broadcast, f, x, args...)
end

# Special case for single argument, this happens for activation functions
function CRC.rrule(cfg::RuleConfig{>:HasReverseMode}, ::typeof(fast_broadcast!!),
        f::F, x::AbstractArray{T}) where {F <: Function, T}
    f === identity && return x, Δ -> (NoTangent(), NoTangent(), Δ)

    ArrayInterface.can_setindex(x) || return CRC.rrule_via_ad(cfg, broadcast, f, x)

    # Now we know that we can set-index into x
    if isconcretetype(Core.Compiler._return_type(only_derivative, Tuple{T, F, NotaNumber}))
        fast_broadcast!(f, x)
        ∇__fast_broadcast_impl_no_cached = @closure Δ -> begin
            ∂x = __activation_gradient(CRC.unthunk(Δ), x, f, NotaNumber())
            return NoTangent(), NoTangent(), ∂x
        end
        return x, ∇__fast_broadcast_impl_no_cached
    end

    if isconcretetype(Core.Compiler._return_type(only_derivative, Tuple{T, F, T}))
        y = fast_broadcast(f, x)
        ∇__fast_broadcast_impl_cached_crc = @closure Δ -> begin
            ∂y = __activation_gradient(CRC.unthunk(Δ), y, f, x)
            return NoTangent(), NoTangent(), ∂y
        end
        return y, ∇__fast_broadcast_impl_cached_crc
    end

    return CRC.rrule_via_ad(cfg, broadcast, f, x)
end
