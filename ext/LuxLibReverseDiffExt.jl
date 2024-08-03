module LuxLibReverseDiffExt

using ChainRulesCore: ChainRulesCore
using LuxLib: LuxLib
using NNlib: NNlib
using ReverseDiff: ReverseDiff, TrackedArray, TrackedVector, TrackedReal,
                   @grad_from_chainrules
using Static: True

const CRC = ChainRulesCore

# Patches: Needs upstreaming (I don't know how to construct an MWE though)
function ReverseDiff.increment_deriv!(
        t::Union{TrackedArray, TrackedReal}, ::CRC.NoTangent, i)
    return ReverseDiff.increment_deriv!(t, zero(eltype(ReverseDiff.value(t))), i)
end
function ReverseDiff.decrement_deriv!(
        t::Union{TrackedArray, TrackedReal}, ::CRC.NoTangent, i)
    return ReverseDiff.decrement_deriv!(t, zero(eltype(ReverseDiff.value(t))), i)
end

# Patch Conv for ReverseDiff
for func in (:conv, :depthwiseconv, :∇conv_data, :∇conv_filter),
    xType in (:AbstractArray, :TrackedArray),
    wType in (:AbstractArray, :TrackedArray)

    LuxLib.__is_tracked(xType, wType) || continue

    @eval @grad_from_chainrules NNlib.$(func)(
        x::$(xType), w::$(wType), cdims::NNlib.ConvDims; kwargs...)
end

# Currently falls back to mapreduce and has a terrible performance
@grad_from_chainrules Base.sum(::typeof(abs2), x::TrackedArray; kwargs...)

for pool in (:maxpool, :meanpool, :lpnormpool)
    @eval @grad_from_chainrules NNlib.$(pool)(x::TrackedArray, ::NNlib.PoolDims; kwargs...)
end

LuxLib.remove_tracking(x::TrackedReal) = ReverseDiff.value(x)
LuxLib.remove_tracking(x::TrackedArray) = ReverseDiff.value(x)
LuxLib.remove_tracking(x::AbstractArray{<:TrackedReal}) = ReverseDiff.value.(x)
LuxLib.remove_tracking(::Type{<:TrackedReal{T}}) where {T} = LuxLib.remove_tracking(T)

LuxLib.is_tracked(::Type{<:TrackedReal}) = True()

end
