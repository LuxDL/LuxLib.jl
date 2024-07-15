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

    This function is deprecated, use `fast_broadcast!!` instead
"""
@stable default_mode="warn" function fast_activation!!(σ::F, x::AbstractArray) where {F}
    Base.depwarn("`fast_activation!!` is deprecated, use `fast_broadcast!!` instead",
        :fast_activation!!)
    return fast_broadcast!!(σ, x)
end

"""
    fast_broadcast!!(f::F, x::AbstractArray, args...) where {F}

if `x` is an immutable array, it computes `@. f(x, args...)`. Otherwise, it computes
`@. x = f(x, args...)`.

Additionally, whether `x` is updated in-place, depends on whether this function is being
called inside a differentiated function.
"""
@stable default_mode="warn" function fast_broadcast!!(
        f::F, x::AbstractArray, args...) where {F <: Function}
    return fast_broadcast!!(Val(ArrayInterface.can_setindex(typeof(x))), f, x, args...)
end

function fast_broadcast!!(
        ::Val{true}, f::F, x::AbstractArray, args...) where {F <: Function}
    return _fast_broadcast!(f, x, args...)
end
function fast_broadcast!!(
        ::Val{false}, f::F, x::AbstractArray, args...) where {F <: Function}
    return _fast_broadcast(f, x, args...)
end
