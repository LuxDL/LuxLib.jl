using SafeTestsets, Test

@static if VERSION ≥ v"1.9"
    using Pkg
    Pkg.add("LuxAMDGPU")
end

@testset "LuxLib" begin
    @time @safetestset "Dropout" begin
        include("api/dropout.jl")
    end

    @testset "Normalization" begin
        @time @safetestset "BatchNorm" begin
            include("api/batchnorm.jl")
        end
        @time @safetestset "GroupNorm" begin
            include("api/groupnorm.jl")
        end
        @time @safetestset "InstanceNorm" begin
            include("api/instancenorm.jl")
        end
        @time @safetestset "LayerNorm" begin
            include("api/layernorm.jl")
        end
    end

    @time @safetestset "ForwardDiff Extension" begin
        include("ext/LuxLibForwardDiffExt.jl")
    end

    if VERSION ≥ v"1.9"
        @time @safetestset "Aqua Tests" begin
            include("aqua.jl")
        end
    end
end
