"""
    matmul(A, x)

Computes A * x, but allows defining AD rules for Enzyme without type-piracy.
"""
function matmul(A::AType,
                x::xType) where {AType <: AbstractMatrix, xType <: AbstractVecOrMat}
    y = similar(A, promote_type(eltype(A), eltype(x)),
                ndims(x) == 1 ? (size(A, 1),) : (size(A, 1), size(x, 2)))
    matmul!(y, A, x)
    return y
end
@inline matmul(A::FillArrays.AbstractFill, x::AbstractVecOrMat) = A * x
@inline matmul(A::AbstractMatrix, x::FillArrays.AbstractFill) = A * x
@inline matmul(A::FillArrays.AbstractFill, x::FillArrays.AbstractFill) = A * x

matmul(A::AbstractVector, x::AbstractMatrix) = matmul(reshape(A, :, 1), x)
@inline matmul(A::FillArrays.AbstractFill{T, 1}, x::AbstractMatrix) where {T} = A * x

function ∇matmul(∂y, A, x)
    ∂A = CRC.ProjectTo(A)(matmul(∂y, x'))
    ∂x = CRC.ProjectTo(x)(matmul(A', ∂y))
    return ∂∅, ∂A, ∂x
end

"""
    matmul!(y, A, x, α=true, β=false)

Computes y .= β .* y .+ α .* A * x, but allows defining AD rules for Enzyme without
type-piracy.
"""
function matmul! end

function matmul!(O::OType, A::AType, x::xType, α::αType=true,
                 β::βType=false) where {OType <: AbstractVecOrMat, AType <: AbstractMatrix,
                                        xType <: AbstractVecOrMat, αType, βType}
    mul!(O, A, x, α, β)
    return nothing
end
function matmul!(O::OType, A::AType, x::xType, α::αType=true,
                 β::βType=false) where {OType <: AbstractVecOrMat, AType <: AbstractVector,
                                        xType <: AbstractVecOrMat, αType, βType}
    return matmul!(O, reshape(A, :, 1), x, α, β)
end

# AD rules
CRC.rrule(::typeof(matmul), A, x) = matmul(A, x), Δ -> ∇matmul(Δ, A, x)

function ER.augmented_primal(config::ER.ConfigWidth{1}, f::Const{typeof(matmul!)},
                             ::Type{<:Const}, O::Union{Const, Duplicated},
                             A::Union{Const, Duplicated}, x::Union{Const, Duplicated},
                             α::Const, β::Const)
    f.val(O.val, A.val, x.val, α.val, β.val)
    Atape = ER.overwritten(config)[2] && !(A isa Const) && !(O isa Const) ? copy(A.val) :
            nothing
    xtape = ER.overwritten(config)[3] && !(x isa Const) && !(O isa Const) ? copy(x.val) :
            nothing
    return ER.AugmentedReturn(nothing, nothing, (Atape, xtape))
end

function ER.reverse(config::ER.ConfigWidth{1}, f::Const{typeof(matmul!)}, ::Type{<:Const},
                    tape, O::Union{Const, Duplicated}, A::Union{Const, Duplicated},
                    x::Union{Const, Duplicated}, α::Const, β::Const)
    O isa Const && return ntuple(_ -> nothing, 5)

    Aval = ER.overwritten(config)[2] && !(A isa Const) ? first(tape) : A.val
    xval = ER.overwritten(config)[3] && !(x isa Const) ? last(tape) : x.val

    !(x isa Const) && matmul!(x.dval, Aval', O.dval, true, true)
    !(A isa Const) && matmul!(A.dval, O.dval, xval', true, true)

    return ntuple(_ -> nothing, 5)
end
