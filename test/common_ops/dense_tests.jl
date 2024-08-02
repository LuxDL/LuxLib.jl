@testsetup module DenseSetup
using LuxLib, LuxTestUtils, Random, Test, Zygote, NNlib, BFloat16s

anonact = x -> x^3

function run_dense_testing(gen_f, Tw, Tx, M, N, hasbias, activation, aType, mode, ongpu)
    bias = hasbias ? gen_f(Tw, M) |> aType : nothing
    w = gen_f(Tw, M, N) |> aType
    x = gen_f(Tx, N, 3) |> aType

    y = fused_dense_bias_activation(activation, w, x, bias)
    y_generic = LuxLib.__generic_dense_bias_activation(activation, w, x, bias)

    @test y ≈ y_generic
    @test eltype(y) == promote_type(Tw, Tx)

    @test @inferred(fused_dense_bias_activation(activation, w, x, bias)) isa Any
    @jet fused_dense_bias_activation(activation, w, x, bias)

    __f = (σ, w, x, b) -> sum(abs2, fused_dense_bias_activation(σ, w, x, b))

    if activation !== anonact
        @test @inferred(Zygote.gradient(__f, activation, w, x, bias)) isa Any
    else
        @test length(@inferred(Zygote.gradient(__f, activation, w, x, bias)))==4 broken=true
    end

    atol = 1.0f-3
    rtol = 1.0f-3

    skip_backends = []
    Tw != Tx && push!(skip_backends, AutoReverseDiff())

    __f_grad = let activation = activation
        (w, x, b) -> __f(activation, w, x, b)
    end
    test_gradients(__f_grad, w, x, bias; atol, rtol, skip_backends)
end

const ALL_TEST_CONFIGS = Iterators.product(
    ((BFloat16, BFloat16), (Float32, BFloat16),
        (Float32, Float32), (Float32, Float64), (Float64, Float64)),
    (4, 8),
    (4, 8),
    (true, false),
    (identity, tanh, tanh_fast, sigmoid, sigmoid_fast, relu, gelu, anonact))

const TEST_BLOCKS = collect(Iterators.partition(
    ALL_TEST_CONFIGS, ceil(Int, length(ALL_TEST_CONFIGS) / 5)))

export ALL_TEST_CONFIGS, TEST_BLOCKS, run_dense_testing

end

@testitem "Fused Dense: Group 1" tags=[:dense] setup=[SharedTestSetup, DenseSetup] begin
    @testset "$mode" for (mode, aType, ongpu) in MODES
        @testset "eltype $Tw x $Tx, size $M x $N, bias $hasbias, activation $activation" for ((Tx, Tw), M, N, hasbias, activation) in TEST_BLOCKS[1]
            run_dense_testing(__generate_fixed_array, Tw, Tx, M, N,
                hasbias, activation, aType, mode, ongpu)
        end
    end
end

@testitem "Fused Dense: Group 2" tags=[:dense] setup=[SharedTestSetup, DenseSetup] begin
    @testset "$mode" for (mode, aType, ongpu) in MODES
        @testset "eltype $Tw x $Tx, size $M x $N, bias $hasbias, activation $activation" for ((Tx, Tw), M, N, hasbias, activation) in TEST_BLOCKS[2]
            run_dense_testing(__generate_fixed_array, Tw, Tx, M, N,
                hasbias, activation, aType, mode, ongpu)
        end
    end
end

@testitem "Fused Dense: Group 3" tags=[:dense] setup=[SharedTestSetup, DenseSetup] begin
    @testset "$mode" for (mode, aType, ongpu) in MODES
        @testset "eltype $Tw x $Tx, size $M x $N, bias $hasbias, activation $activation" for ((Tx, Tw), M, N, hasbias, activation) in TEST_BLOCKS[3]
            run_dense_testing(__generate_fixed_array, Tw, Tx, M, N,
                hasbias, activation, aType, mode, ongpu)
        end
    end
end

@testitem "Fused Dense: Group 4" tags=[:dense] setup=[SharedTestSetup, DenseSetup] begin
    @testset "$mode" for (mode, aType, ongpu) in MODES
        @testset "eltype $Tw x $Tx, size $M x $N, bias $hasbias, activation $activation" for ((Tx, Tw), M, N, hasbias, activation) in TEST_BLOCKS[4]
            run_dense_testing(__generate_fixed_array, Tw, Tx, M, N,
                hasbias, activation, aType, mode, ongpu)
        end
    end
end

@testitem "Fused Dense: Group 5" tags=[:dense] setup=[SharedTestSetup, DenseSetup] begin
    @testset "$mode" for (mode, aType, ongpu) in MODES
        @testset "eltype $Tw x $Tx, size $M x $N, bias $hasbias, activation $activation" for ((Tx, Tw), M, N, hasbias, activation) in TEST_BLOCKS[5]
            run_dense_testing(__generate_fixed_array, Tw, Tx, M, N,
                hasbias, activation, aType, mode, ongpu)
        end
    end
end

@testitem "Fused Dense: StaticArrays" tags=[:dense] begin
    using StaticArrays

    x = @SArray rand(2, 4)
    weight = @SArray rand(3, 2)
    bias = @SArray rand(3)

    @test @inferred(fused_dense_bias_activation(relu, weight, x, bias)) isa SArray
end

@testitem "Fused Dense: CPU No Scalar Indexing" tags=[:dense] begin
    using JLArrays

    x = JLArray(rand(Float32, 2, 4))
    weight = JLArray(rand(Float32, 3, 2))
    bias = JLArray(rand(Float32, 3))

    @test @inferred(fused_dense_bias_activation(relu, weight, x, bias)) isa JLArray
    @test LuxLib.internal_operation_mode(x) isa LuxLib.GenericBroadcastOp
end
