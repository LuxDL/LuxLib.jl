module LuxLibLuxCUDATrackerExt

using LuxCUDA, LuxLib, Tracker
import Tracker: @grad,
                data, nobacksies, track, TrackedArray, TrackedVector, TrackedReal
import LuxLib: AA, AV, batchnorm_cudnn, ∇batchnorm_cudnn, _get_batchnorm_statistics,
               FP_32_64, ∂∅, __is_tracked

# api/batchnorm.jl
const TR_CUDNN_BN_ARRAY_TYPE = Union{TrackedArray{<:Any, <:Any, <:CuArray{<:FP_32_64, 2}},
    TrackedArray{<:Any, <:Any, <:CuArray{<:FP_32_64, 4}},
    TrackedArray{<:Any, <:Any, <:CuArray{<:FP_32_64, 5}}}
const TR_BNParamType = Union{Nothing, TrackedArray{<:Any, <:Any, <:CuVector{<:FP_32_64}},
    CuVector{<:FP_32_64}}

function LuxLib.batchnorm(x::TR_CUDNN_BN_ARRAY_TYPE, scale::TR_BNParamType,
        bias::TR_BNParamType, running_mean::TR_BNParamType, running_var::TR_BNParamType;
        momentum::Real, training::Val, epsilon::Real)
    rm, rv = _get_batchnorm_statistics(x, running_mean, running_var, training)

    x_ = batchnorm_cudnn(rm, rv, scale, bias, x, momentum, epsilon, training)[1]
    return x_, (; running_mean=rm, running_var=rv)
end

for RM in (:TrackedVector, :Nothing, :AbstractVector),
    RV in (:TrackedVector, :Nothing, :AbstractVector),
    S in (:TrackedVector, :Nothing, :AbstractVector),
    B in (:TrackedVector, :Nothing, :AbstractVector),
    XT in (:TrackedArray, :AbstractArray)

    __is_tracked(RM, RV, S, B, XT) || continue

    @eval function batchnorm_cudnn(running_mean::$RM, running_var::$RV, scale::$S,
            bias::$B, x::$XT, momentum, eps, training::Val)
        return track(batchnorm_cudnn, running_mean, running_var, scale, bias, x, momentum,
            eps, training)
    end
end

__make_nothing(x) = x
__make_nothing(::CuPtr{Nothing}) = 0

@grad function LuxLib.batchnorm_cudnn(running_mean, running_var, scale, bias, x, momentum,
        eps, training)
    y, xmean, xivar = batchnorm_cudnn(data(running_mean), data(running_var), data(scale),
        data(bias), data(x), momentum, eps, training)
    function ∇batchnorm_cudnn_internal(Δ)
        ∂y = first(Δ)
        ∂g, ∂b, ∂x = ∇batchnorm_cudnn(data(scale), data(bias), data(x), ∂y,
            data(running_mean), data(running_var), xmean, xivar; ϵ=eps)
        return (nothing, nothing, ∂g, ∂b, ∂x, nothing, nothing, nothing)
    end
    return (y, __make_nothing(xmean), __make_nothing(xivar)), ∇batchnorm_cudnn_internal
end

end
