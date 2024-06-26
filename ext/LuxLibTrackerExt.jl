module LuxLibTrackerExt

using ChainRulesCore: ChainRulesCore
using FastClosures: @closure
using LuxLib: LuxLib
using NNlib: NNlib
using Tracker: Tracker, TrackedArray, TrackedVector, TrackedReal

const CRC = ChainRulesCore

# NNlib: batched_mul
for T1 in (:AbstractArray, :TrackedArray), T2 in (:AbstractArray, :TrackedArray)
    LuxLib.__is_tracked(T1, T2) || continue

    @eval Tracker.@grad_from_chainrules NNlib.batched_mul(x::$T1, y::$T2)
end

# NNlib: gather
Tracker.@grad_from_chainrules NNlib.gather!(
    dst::AbstractArray, src::TrackedArray, idx::AbstractArray)

# Base.repeat
Tracker.@grad_from_chainrules Base.repeat(x::TrackedArray, counts...)

# Base.selectdim -- Needed for GPUArrays
Base.selectdim(x::TrackedArray, d::Integer, i) = Tracker.track(selectdim, x, d, i)

Tracker.@grad function Base.selectdim(x::AbstractArray, d::Integer, i)
    x_ = Tracker.data(x)
    y = selectdim(x_, d, i)
    ∇selectdim = @closure Δ -> begin
        ∂x = zero(x_)
        selectdim(∂x, d, i) .= Tracker.data(Δ)
        return ∂x, nothing, nothing
    end
    return y, ∇selectdim
end

# utils.jl
function LuxLib._copy_autodiff_barrier(x::Union{TrackedArray, TrackedReal})
    return LuxLib._copy_autodiff_barrier(Tracker.data(x))
end

# api/dropout.jl
LuxLib._dropout_fptype(x::TrackedArray) = LuxLib._dropout_fptype(Tracker.data(x))

end
