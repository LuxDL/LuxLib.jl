module LuxLibLuxCUDAExt

isdefined(Base, :get_extension) ? (using LuxCUDA) : (using ..LuxCUDA)
using LinearAlgebra, LuxLib, NNlib
import ChainRulesCore as CRC
import LuxLib: batchnorm, _batchnorm_cudnn!, _get_batchnorm_statistics, FP_32_64, ∂∅

const AnyCuArray = Union{StridedCuArray, Adjoint{T, <:StridedCuArray{T}} where T,
                         Transpose{T, <:StridedCuArray{T}} where T}
const AnyCuMatrix = Union{StridedCuMatrix, Adjoint{T, <:StridedCuMatrix{T}} where T,
                          Transpose{T, <:StridedCuMatrix{T}} where T}
const AnyCuVector = Union{StridedCuVector, Adjoint{T, <:StridedCuVector{T}} where T,
                          Transpose{T, <:StridedCuVector{T}} where T}
const AnyCuVecOrMat = Union{AnyCuVector, AnyCuMatrix}

include("utils.jl")

include("api/batchnorm.jl")

end
