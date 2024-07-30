# Wrappers over Base & LinearAlgen implementations to use poly algs if needed
matmuladd(A, B, ::Nothing) = matmul(A, B)
function matmuladd(A::AbstractMatrix, B::AbstractVector, bias::AbstractVector)
    return vec(matmuladd(A, reshape(B, :, 1), bias))
end
function matmuladd(A::AbstractMatrix, B::AbstractMatrix, bias::AbstractVector)
    C = similar(A, promote_type(eltype(A), eltype(B)), size(A, 1), size(B, 2))
    matmuladd!(C, A, B, bias)
    return C
end

# TODO: Rewrite using internal_operation_mode

function matmuladd!(
        C::AbstractMatrix, A::AbstractMatrix, B::AbstractMatrix, bias::AbstractVector)
    matmuladd!(C, get_device_type((C, A, B)), A, B, bias)
    return nothing
end
function matmuladd!(C::AbstractMatrix, ::Type{<:AbstractDevice},
        A::AbstractMatrix, B::AbstractMatrix, bias::AbstractVector)
    C .= bias
    mul!(C, A, B, true, true)
    return nothing
end
function matmuladd!(C::AbstractMatrix, ::Type{CPUDevice}, A::AbstractMatrix,
        B::AbstractMatrix, bias::AbstractVector)
    if unrolled_all(≤(256), (size(C, 1), size(A, 2), size(B, 2)))
        @tturbo for n in indices((C, B), 2), m in indices((C, A), 1)
            Cmn = zero(eltype(C))
            for k in indices((A, B), (2, 1))
                Cmn += A[m, k] * B[k, n]
            end
            C[m, n] = Cmn + bias[m]
        end
        return nothing
    end
    C .= bias
    mul!(C, A, B, true, true)
    return nothing
end

function matmul(A::AbstractMatrix, B::AbstractVector)
    return vec(matmul(A, reshape(B, :, 1)))
end
function matmul(A::AbstractMatrix, B::AbstractMatrix)
    C = similar(A, promote_type(eltype(A), eltype(B)), size(A, 1), size(B, 2))
    matmul!(C, A, B)
    return C
end

# TODO: `matmul` and `matmuladd` need chainrules rrule

function matmul!(C::AbstractMatrix, A::AbstractMatrix, B::AbstractMatrix)
    matmul!(C, get_device_type((C, A, B)), A, B)
    return nothing
end
function matmul!(
        C::AbstractMatrix, ::Type{<:AbstractDevice}, A::AbstractMatrix, B::AbstractMatrix)
    mul!(C, A, B)
    return nothing
end
function matmul!(C::AbstractMatrix, ::Type{CPUDevice}, A::AbstractMatrix, B::AbstractMatrix)
    if unrolled_all(≤(256), (size(C, 1), size(A, 2), size(B, 2)))
        @tturbo for n in indices((C, B), 2), m in indices((C, A), 1)
            Cmn = zero(eltype(C))
            for k in indices((A, B), (2, 1))
                Cmn += A[m, k] * B[k, n]
            end
            C[m, n] = Cmn
        end
        return nothing
    end
    mul!(C, A, B)
    return nothing
end

# TODO: `matmul!` and `matmuladd!` need EnzymeRules
