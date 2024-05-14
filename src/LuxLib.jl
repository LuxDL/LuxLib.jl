module LuxLib

using PrecompileTools: @recompile_invalidations

@recompile_invalidations begin
    using ArrayInterface: ArrayInterface
    using ChainRulesCore: ChainRulesCore, NoTangent
    using EnzymeCore: EnzymeCore, EnzymeRules
    using FastBroadcast: @..
    using FastClosures: @closure
    using GPUArraysCore: GPUArraysCore, AnyGPUArray
    using LinearAlgebra: LinearAlgebra, BLAS, mul!
    using LuxCore: LuxCore
    using Markdown: @doc_str
    using NNlib: NNlib
    using Polyester: @batch
    using Random: Random, AbstractRNG, rand!
    using Reexport: @reexport
    using Statistics: Statistics, mean, var
end

@reexport using NNlib

const CRC = ChainRulesCore

include("utils.jl")

# Low-Level Implementations
include("impl/normalization.jl")
include("impl/fused_dense.jl")
include("impl/fused_conv.jl")
include("impl/fast_activation.jl")

# User Facing
include("api/batchnorm.jl")
include("api/dropout.jl")
include("api/groupnorm.jl")
include("api/instancenorm.jl")
include("api/layernorm.jl")
include("api/dense.jl")
include("api/conv.jl")
include("api/fast_activation.jl")

include("deprecations.jl")

export batchnorm, groupnorm, instancenorm, layernorm, alpha_dropout, dropout
export fused_dense_bias_activation, fused_conv_bias_activation
export fast_activation!!

end
