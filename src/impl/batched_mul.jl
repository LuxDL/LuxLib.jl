function __batched_matmul_impl(
        ::False, ::Type, A::AbstractArray{<:Any, 3}, B::AbstractArray{<:Any, 3})
    return batched_mul(A, B)  # Simple fallback to NNlib version
end

function __batched_matmul_impl(::True, ::Type{<:AbstractGPUDevice},
        A::AbstractArray{<:Any, 3}, B::AbstractArray{<:Any, 3})
    return batched_mul(A, B)  # GPU versions are well optimized
end

function __batched_matmul_impl(::True, ::Type{AMDGPUDevice}, A::AbstractArray{<:Complex, 3},
        B::AbstractArray{<:Complex, 3})
    @warn "Using fallback implementation of `batched_matmul` for complex numbers on \
           AMDGPUDevice" maxlog=1
    @assert size(A, 3) == size(B, 3) || size(A, 3) == 1 || size(B, 3) == 1
    size(A, 3) == size(B, 3) && return stack(*, batchview(A), batchview(B))
    size(A, 2) == 1 && stack(map(Base.Fix1(*, batchview(A, 1)), batchview(B)))
    return stack(map(Base.Fix2(*, batchview(B, 1)), batchview(A)))
end

function __batched_matmul_impl(
        ::True, ::Type{CPUDevice}, A::AbstractArray{<:Any, 3}, B::AbstractArray{<:Any, 3})
    if (size(A, 3) != size(B, 3) && size(A, 3) != 1 && size(B, 3) != 1) ||
       (size(A, 2) != size(B, 1))
        throw(DimensionMismatch(lazy"size(A) = $(size(A)), size(B) = $(size(B)) inconsistent for batched_matmul."))
    end
    C = similar(A, promote_type(eltype(A), eltype(B)), size(A, 1),
        size(B, 2), max(size(A, 3), size(B, 3)))
    __batched_matmul_impl!(C, internal_operation_mode((C, A, B)), A, B)
    return C
end

function __batched_matmul_impl!(C::AbstractArray{<:Any, 3}, ::AbstractInternalArrayOpMode,
        A::AbstractArray{<:Any, 3}, B::AbstractArray{<:Any, 3})
    batched_mul!(C, A, B)
    return
end

function __batched_matmul_impl!(C::AbstractArray{<:Any, 3}, ::LoopedArrayOp,
        A::AbstractArray{<:Any, 3}, B::AbstractArray{<:Any, 3})
    if !LoopVectorization.check_args(batchview(C, 1), batchview(A, 1), batchview(B, 1))
        batched_mul!(C, A, B)
        return
    end
    __batched_matmul_loopvec_impl!(C, A, B)
    return
end

function __batched_matmul_loopvec_impl!(
        C::AbstractArray{<:Any, 3}, A::AbstractArray{<:Any, 3},
        B::AbstractArray{<:Any, 3}, α::Number=true, β::Number=false)
    if size(A, 3) == size(B, 3)
        @batch for L in indices((C, A, B), 3)
            __serial_loopvec_matmul!(
                batchview(C, L), batchview(A, L), batchview(B, L), α, β)
        end
    elseif size(A, 3) == 1
        @batch for L in indices((C, B), 3)
            __serial_loopvec_matmul!(
                batchview(C, L), batchview(A, 1), batchview(B, L), α, β)
        end
    else # has to be size(B, 3) == 1
        @batch for L in indices((C, A), 3)
            __serial_loopvec_matmul!(
                batchview(C, L), batchview(A, L), batchview(B, 1), α, β)
        end
    end
end

function __serial_loopvec_matmul!(
        C::AbstractMatrix, A::AbstractMatrix, B::AbstractMatrix, α::Number, β::Number)
    if !iszero(β) # Secial case this because Base.FastMath.mul_fast(NaN, false) = NaN
        @turbo for K in indices((C, B), 2), J in indices((C, A), 1)
            Cⱼₖ = zero(eltype(C))
            for I in indices((A, B), (2, 1))
                Cⱼₖ += A[J, I] * B[I, K]
            end
            C[J, K] = α * Cⱼₖ + β * C[J, K]
        end
    else
        @turbo for K in indices((C, B), 2), J in indices((C, A), 1)
            Cⱼₖ = zero(eltype(C))
            for I in indices((A, B), (2, 1))
                Cⱼₖ += A[J, I] * B[I, K]
            end
            C[J, K] = α * Cⱼₖ
        end
    end
end

function CRC.rrule(
        ::typeof(batched_matmul), A::AbstractArray{<:Any, 3}, B::AbstractArray{<:Any, 3})
    function ∇batched_matmul(_Δ)
        Δ = CRC.unthunk(_Δ)
        ∂A = CRC.@thunk begin
            tmp = batched_matmul(Δ, batched_adjoint(B))
            size(A, 3) == 1 ? sum(tmp; dims=3) : tmp
        end
        ∂B = CRC.@thunk begin
            tmp = batched_matmul(batched_adjoint(A), Δ)
            size(B, 3) == 1 ? sum(tmp; dims=3) : tmp
        end
        return ∂∅, ∂A, ∂B
    end
    return batched_matmul(A, B), ∇batched_matmul
end

# This is type-piracy but needed to fix a blocking issue. TODO: upstream to NNlib
# Enzyme causes a "active variables passed by value to jl_new_task are not yet supported"
# warning without this patch.
for func in (NNlib.batched_mul!, __batched_matmul_loopvec_impl!)
    @eval begin
        function EnzymeRules.augmented_primal(
                cfg::EnzymeRules.ConfigWidth, ::EnzymeCore.Const{typeof($(func))},
                ::Type{RT}, C::EnzymeCore.Annotation{<:AbstractArray{<:Any, 3}},
                A::EnzymeCore.Annotation{<:AbstractArray{<:Any, 3}},
                B::EnzymeCore.Annotation{<:AbstractArray{<:Any, 3}}) where {RT}
            if typeof(C) <: EnzymeCore.Duplicated || typeof(C) <: EnzymeCore.BatchDuplicated
                $(func)(C.val, A.val, B.val)
            end

            primal = EnzymeRules.needs_primal(cfg) ? C.val : nothing
            shadow = EnzymeRules.needs_shadow(cfg) ? C.dval : nothing

            cache_A = (EnzymeRules.overwritten(cfg)[3] &&
                       !(typeof(C) <: EnzymeCore.Const) &&
                       !(typeof(B) <: EnzymeCore.Const)) ? copy(A.val) : nothing
            cache_B = (EnzymeRules.overwritten(cfg)[3] &&
                       !(typeof(C) <: EnzymeCore.Const) &&
                       !(typeof(A) <: EnzymeCore.Const)) ? copy(B.val) : nothing

            return EnzymeRules.AugmentedReturn(primal, shadow, (cache_A, cache_B))
        end

        function EnzymeRules.reverse(
                cfg::EnzymeRules.ConfigWidth, ::EnzymeCore.Const{typeof($(func))},
                ::Type{RT}, cache, C::EnzymeCore.Annotation{<:AbstractArray{<:Any, 3}},
                A::EnzymeCore.Annotation{<:AbstractArray{<:Any, 3}},
                B::EnzymeCore.Annotation{<:AbstractArray{<:Any, 3}}) where {RT}
            cache_A, cache_B = cache

            if !(typeof(B) <: EnzymeCore.Const) && !(typeof(C) <: EnzymeCore.Const)
                if !EnzymeRules.overwritten(cfg)[3]
                    cache_A = A.val
                end
            end

            if !(typeof(A) <: EnzymeCore.Const) && !(typeof(C) <: EnzymeCore.Const)
                if !EnzymeRules.overwritten(cfg)[3]
                    cache_B = B.val
                end
            end

            dCs = C.dval
            dAs = (typeof(A) <: EnzymeCore.Const) ? dCs : A.dval
            dBs = (typeof(B) <: EnzymeCore.Const) ? dCs : B.dval

            if EnzymeRules.width(cfg) == 1
                dCs = (dCs,)
                dAs = (dAs,)
                dBs = (dBs,)
            end

            # NOTE: The implementation here is memory efficient and non-allocating. However,
            #       for maximum performance we would want to reuse the parallel batched_mul
            #       followed by a reduction.
            for (dC, dA, dB) in zip(dCs, dAs, dBs)
                if !(typeof(C) <: EnzymeCore.Const) && dC !== C.val
                    if !(typeof(A) <: EnzymeCore.Const) && dA !== A.val
                        if size(dA, 3) == 1 && size(B.val, 3) != 1
                            B′ = NNlib.batched_adjoint(B.val)
                            dA′ = batchview(dA, 1)
                            for L in indices(B′, 3)
                                mul!(dA′, batchview(dC, L), batchview(B′, L), true, true)
                            end
                        else
                            $(func)(dA, dC, NNlib.batched_adjoint(B.val), true, true)
                        end
                    end

                    if !(typeof(B) <: EnzymeCore.Const) && dB !== B.val
                        if size(dB, 3) == 1 && size(A.val, 3) != 1
                            A′ = NNlib.batched_adjoint(A.val)
                            dB′ = batchview(dB, 1)
                            for L in indices(A′, 3)
                                mul!(dB′, batchview(A′, L), batchview(dC, L), true, true)
                            end
                        else
                            $(func)(dB, NNlib.batched_adjoint(A.val), dC, true, true)
                        end
                    end

                    dC .= 0
                end
            end

            return ntuple(Returns(nothing), 3)
        end
    end
end
