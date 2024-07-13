"""
    fast_broadcast(f::F, x::AbstractArray, args...) where {F <: Function}

Computes `@. f(x, args...)`. If it is possible, we use `LoopVectorization.@turbo` to speed
up the computation.
"""
function fast_broadcast end

function CRC.rrule(cfg::RuleConfig{>:HasReverseMode}, ::typeof(fast_broadcast),
        f::F, x::AbstractArray, args...) where {F <: Function}
    return CRC.rrule_via_ad(cfg, broadcast, f, x, args...)
end

"""
    fast_broadcast!(f::F, x::AbstractArray, args...) where {F <: Function}

Computes `@. x = f(x, args...)` updating `x` in place. This assumes that `x` has the
matching shape as the broadcasted result.

If it is possible, we use `LoopVectorization.@turbo` to speed up the computation.

This function isn't compatible with ChainRules, use [`fast_broadcast!!`](@ref) instead.
"""
function fast_broadcast! end

for (op, impl) in (
    (:fast_broadcast, :__fast_broadcast_impl), (:fast_broadcast!, :__fast_broadcast_impl!))
    @eval function $(op)(f::F, x::AbstractArray, args...) where {F <: Function}
        return $(impl)(get_device_type((x, args...)), f, x, args...)
    end
end

"""
    fast_broadcast!!(f::F, x::AbstractArray, args...) where {F <: Function}

Compues `@. f(x, args...)`. If `x` can be set-indexed, it uses `fast_broadcast!` to
update `x` in place. Otherwise, it falls back to `fast_broadcast`.

Since `x` is not guaranteed to be modified inplace, call the function as
`y = fast_broadcast!!(...)`.
"""
@generated function fast_broadcast!!(f::F, x::AbstractArray, args...) where {F <: Function}
    ArrayInterface.can_setindex(x) && :(return fast_broadcast!(f, x, args...))
    return :(fast_broadcast(f, x, args...))
end

function CRC.rrule(cfg::RuleConfig{>:HasReverseMode}, ::typeof(fast_broadcast!!),
        f::F, x::AbstractArray, args...) where {F <: Function}
    return CRC.rrule_via_ad(cfg, fast_broadcast, f, x, args...)
end
