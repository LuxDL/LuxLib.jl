@testitem "Fused Conv Bias Activation" tags=[:nworkers, :common_ops] setup=[SharedTestSetup] begin
    rng = get_stable_rng(12345)

    _expand(N, i::Tuple) = i
    _expand(N, i::Integer) = ntuple(_ -> i, N)

    function _convfilter(::Type{wT}, filter::NTuple{N, Integer},
            ch::Pair{<:Integer, <:Integer}; groups=1) where {wT, N}
        cin, cout = ch
        @assert cin % groups==0 "Input channel dimension must be divisible by groups."
        @assert cout % groups==0 "Output channel dimension must be divisible by groups."
        return __generate_fixed_array(wT, filter..., cin ÷ groups, cout)
    end

    function _calc_padding(pad, ::NTuple{N}, dilation, stride) where {N}
        return _expand(Val(2 * N), pad)
    end

    anonact = x -> gelu(x)

    @testset "$mode" for (mode, aType, on_gpu) in MODES
        # These are not all possible combinations but rather a representative set to keep
        # CI timings under check
        # Most of the actual tests happen upstream in Lux
        @testset "$(Tw) x $(Tx) hasbias: $(hasbias) activation: $(activation) kernel: $(kernel) padding: $(padding) stride: $(stride) groups: $(groups)" for (Tw, Tx) in [
                (Float16, Float16), (Float32, Float16), (Float32, Float32),
                (Float32, Float64), (Float64, Float64)],
            hasbias in (true, false),
            activation in (identity, tanh, tanh_fast, sigmoid,
                sigmoid_fast, relu, gelu, anonact, swish),
            (kernel, padding, stride, groups) in (
                ((2,), (1,), (1,), 1), ((2, 2), (1, 1), (1, 1), 1),
                ((2, 2), (0, 0), (2, 2), 1), ((2, 2), (0, 0), (1, 1), 2))

            weight = _convfilter(Tw, kernel, 4 => 8; groups) |> aType
            x = __generate_fixed_array(Tx, ntuple(Returns(3), length(kernel))..., 4, 2) |>
                aType
            bias = hasbias ?
                   aType(__generate_fixed_array(
                Tx, ntuple(Returns(1), length(kernel))..., 8, 1)) : nothing

            cdims = DenseConvDims(
                x, weight; stride, padding=_calc_padding(padding, kernel, 1, stride),
                dilation=1, groups)

            y = fused_conv_bias_activation(activation, weight, x, bias, cdims)

            y_generic = LuxLib.__generic_conv_bias_activation(
                activation, weight, x, bias, cdims)

            fp16 = Tx == Float16 || Tw == Float16
            atol = fp16 ? 1.0f-1 : 1.0f-3
            rtol = fp16 ? 1.0f-1 : 1.0f-3
            # Operation reordering has an effect on the accuracy of the results
            @test y≈y_generic atol=atol rtol=rtol
            @test eltype(y) == promote_type(Tw, Tx)

            @inferred fused_conv_bias_activation(activation, weight, x, bias, cdims)
            @jet fused_conv_bias_activation(activation, weight, x, bias, cdims)

            # FIXME: GPU compilation of the gradients for mixed precision seems broken
            Tw !== Tx && on_gpu && continue

            __f = (σ, w, x, b, cdims) -> sum(
                abs2, fused_conv_bias_activation(σ, w, x, b, cdims))

            if mode != "AMDGPU" && activation !== anonact
                @inferred Zygote.gradient(__f, activation, weight, x, bias, cdims)
            else
                try
                    @inferred Zygote.gradient(__f, activation, weight, x, bias, cdims)
                    @test true
                catch
                    @test_broken false
                end
            end
            if mode === "AMDGPU"
                @eval @test_gradients $__f $activation $weight $x $bias $cdims gpu_testing=$on_gpu soft_fail=$fp16 atol=$atol rtol=$rtol skip_tracker=true skip_finite_differences=$(Tx !=
                                                                                                                                                                                     Tw)
            else
                # FiniteDiffencing doesn't work great for MP because of how LuxTestUtils is
                # implemented.
                @eval @test_gradients $__f $activation $weight $x $bias $cdims gpu_testing=$on_gpu soft_fail=$fp16 atol=$atol rtol=$rtol skip_reverse_diff=$(Tx !=
                                                                                                                                                             Tw) skip_finite_differences=$(Tx !=
                                                                                                                                                                                           Tw)
            end
        end
    end
end
