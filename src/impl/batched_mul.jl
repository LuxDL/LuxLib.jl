# TODO: This is an overly simplified versions for testing purposes.

function fast_cpu_batched_mul(x::AbstractArray{<:Number, 3}, y::AbstractArray{<:Number, 3})
    z = similar(x, promote_type(eltype(x), eltype(y)), size(x, 1), size(y, 2), size(y, 3))
    fast_cpu_batched_mul!(z, x, y)
    return z
end

function fast_cpu_batched_mul!(z::AbstractArray{<:Number, 3}, x::AbstractArray{<:Number, 3},
        y::AbstractArray{<:Number, 3})
    @batch for i in axes(z, 3)
        zᵢ = @view z[:, :, i]
        xᵢ = @view x[:, :, i]
        yᵢ = @view y[:, :, i]
        Octavian.matmul_serial!(zᵢ, xᵢ, yᵢ)
    end
end

# all < 32 is the fastest here. everything else is for octavian
function fast_cpu_batched_mul_lv(
        x::AbstractArray{<:Number, 3}, y::AbstractArray{<:Number, 3})
    z = similar(x, promote_type(eltype(x), eltype(y)), size(x, 1), size(y, 2), size(y, 3))
    fast_cpu_batched_mul_lv!(z, x, y)
    return z
end

function fast_cpu_batched_mul_lv!(
        z::AbstractArray{<:Number, 3}, x::AbstractArray{<:Number, 3},
        y::AbstractArray{<:Number, 3})
    @tturbo for B in indices((z, x, y), 3), J in indices((z, y), 2), I in indices((z, x), 1)
        zᵢⱼ = zero(eltype(z))
        for K in indices((x, y), (2, 1))
            zᵢⱼ += x[I, K, B] * y[K, J, B]
        end
        z[I, J, B] = zᵢⱼ
    end
end
