using LuxCUDA, Statistics, Test
using LuxLib, Enzyme

include("../test_utils.jl")

rng = get_stable_rng(12345)

@testset "$mode: Matmul" for (mode, aType, on_gpu) in MODES
    for T in (Float16, Float32, Float64), N in (2, 16, 128, 1024)
        fp16 = T == Float16

        A = randn(T, 32, N) |> aType
        x = randn(T, N, 4) |> aType

        @jet matmul(A, x)

        __f(A, x) = sum(matmul(A, x))
        @eval @test_gradients $__f $A $x soft_fail=$fp16 atol=1.0f-2 rtol=1.0f-2 gpu_testing=$on_gpu

        #-----------------------------------------
        # Enzyme not yet supported in LuxTestUtils
        dA_g, dx_g = Zygote.gradient(__f, A, x)

        bA = zero(A)
        bx = zero(x)

        Enzyme.autodiff(Reverse, __f, Duplicated(A, bA), Duplicated(x, bx))

        @test check_approx(bA, dA_g; atol=1f-2, rtol=1f-2)
        @test check_approx(bx, dx_g; atol=1f-2, rtol=1f-2)
        #-----------------------------------------

        x = randn(T, N) |> aType

        @jet matmul(A, x)

        @eval @test_gradients $__f $A $x soft_fail=$fp16 atol=1.0f-2 rtol=1.0f-2 gpu_testing=$on_gpu

        #-----------------------------------------
        # Enzyme not yet supported in LuxTestUtils
        dA_g, dx_g = Zygote.gradient(__f, A, x)

        bA = zero(A)
        bx = zero(x)

        Enzyme.autodiff(Reverse, __f, Duplicated(A, bA), Duplicated(x, bx))

        @test check_approx(bA, dA_g; atol=1f-2, rtol=1f-2)
        @test check_approx(bx, dx_g; atol=1f-2, rtol=1f-2)
        #-----------------------------------------
    end
end
