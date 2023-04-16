"""
    activation_function(f)
    activation_function(f, Δf)

Turn an activation function into an `AbstractActivationFunction` object. Allows for fusing
activation functions with KA implementations.
"""
function activation_function end

abstract type AbstractActivationFunction end

Base.length(::AbstractActivationFunction) = 0

struct GenericActivationFunction{F <: Function} <: AbstractActivationFunction
    f::F
end

activation_function(f::Function) = GenericActivationFunction(f)

(a::GenericActivationFunction)(x) = a.f(x)

# Activation Functions for which we don't have to store the input
abstract type AbstractInputFreeGradientActivationFunction <: AbstractActivationFunction end

const AbstractIFGActFunction = AbstractInputFreeGradientActivationFunction

struct IdentityActivationFunction <: AbstractInputFreeGradientActivationFunction end
struct InputFreeGradientActivationFunction{F1 <: Function, F2 <: Function} <:
       AbstractInputFreeGradientActivationFunction
    f::F1
    Δf::F2
end

activation_function(::typeof(identity)) = IdentityActivationFunction()
activation_function(f, ::Nothing) = activation_function(f)
activation_function(f, Δf) = InputFreeGradientActivationFunction(f, Δf)

(a::AbstractInputFreeGradientActivationFunction)(x) = ₋₋forward(a, x)
(a::AbstractInputFreeGradientActivationFunction)(Δ, y) = ₋₋backward(a, Δ, y)

@inline ₋₋forward(::IdentityActivationFunction, x) = x
@inline ₋₋forward(f::InputFreeGradientActivationFunction, x) = f.f(x)

@inline ₋₋backward(::IdentityActivationFunction, Δ, _) = Δ
@inline ₋₋backward(f::InputFreeGradientActivationFunction, Δ, Ω) = f.Δf(Ω) * Δ

function CRC.rrule(::typeof(₋₋forward), a::AbstractInputFreeGradientActivationFunction, x)
    Ω = a(x)
    ₋₋forward_pullback(Δ) = (NoTangent(), NoTangent(), ₋₋backward(a, Δ, Ω))
    return Ω, ₋₋forward_pullback
end

# https://github.com/FluxML/NNlib.jl/blob/5a1c42c8f23b0e45cea77714b84fd231e25897aa/src/activations.jl#L856
SUPPORTED_INPUT_FREE_GRADIENT_ACTIVATIONS = [
    (:σ, :(conj(Ω * (1 - Ω)))),
    (:hardσ, :(ifelse((Ω > 0) & (Ω < 1), oftf(Ω, 1 / 6), oftf(Ω, 1)))),
    (:hardtanh, :((Ω > -1) & (Ω < 1))),
    (:relu, :(Ω > 0)),
    (:relu6, :((Ω > 0) & (Ω < 6))),
    (:elu, :(NNlib.deriv_elu(Ω))),
    (:selu, :(NNlib.deriv_selu(Ω))),
    (:celu, :(NNlib.deriv_celu(Ω))),
    (:trelu, :(Ω > 0)),
    (:softshrink, :(Ω != 0)),
    (:tanh, :(conj(1 - Ω^2))),
    (:tanh_fast, :(conj(1 - Ω^2))),
    (:sigmoid_fast, :(conj(Ω * (1 - Ω)))),
]

for (f, dfdx) in SUPPORTED_INPUT_FREE_GRADIENT_ACTIVATIONS
    @eval function activation_function(::typeof($f))
        return InputFreeGradientActivationFunction($f, Ω -> $dfdx)
    end
end
