function fast_broadcast end

function fast_broadcast! end

for (op, impl) in (
    (:fast_broadcast, :__fast_broadcast_impl), (:fast_broadcast!, :__fast_broadcast_impl!))
    @eval function $(op)(f::F, x::AbstractArray, args...) where {F <: Function}
        return $(impl)(get_device_type(x, args...), f, x, args...)
    end
end
