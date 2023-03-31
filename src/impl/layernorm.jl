# Forward Pass called from outside ChainRules
function _normalize_impl(x, dims, ϵ::Real)
    μ = mean(x; dims)
    rσ = 1 ./ sqrt.(_var(x, Val(false), μ, Val(dims)) .+ ϵ)

    return (x .- μ) .* rσ
end

# In the backwards pass we want to cache as many things as possible to reduce recomputations
function CRC.rrule(rc::RuleConfig{>:HasReverseMode}, ::typeof(_normalize_impl), x, dims, ϵ)
    N = _denom(x, dims)
    Σ, ∇Σ = rrule(rc, sum, x; dims)

    μ = Σ ./ N
    x₋μ = x .- μ
    rσ = 1 ./ .√(sum(abs2, x₋μ; dims) ./ (N - 1) .+ ϵ)

    y = x₋μ .* rσ

    function ∇_normalize_impl(Δy_)
        Δy = CRC.unthunk(Δy_)

        Δx = Δy .* rσ
        Δrσ = sum(Δy .* x₋μ; dims)
        Δμ = -sum(Δy .* rσ; dims)
        Δσ² = -(1 // 2) .* (rσ .^ 3) .* Δrσ

        Δx = Δx .+ last(CRC.unthunk(∇Σ(Δμ ./ N))) .+ (2 // (N - 1)) .* Δσ² .* x₋μ

        return (NoTangent(), Δx, NoTangent(), NoTangent())
    end

    return y, ∇_normalize_impl
end

# LayerNorm
_layernorm_impl(x, ::Nothing, ::Nothing, dims, ϵ::Real) = _normalize_impl(x, dims, ϵ)

function CRC.rrule(rc::RuleConfig{>:HasReverseMode}, ::typeof(_layernorm_impl), x,
                   γ::Nothing, β::Nothing, dims, ϵ)
    y, ∇_normalize_impl = CRC.rrule(rc, _normalize_impl, x, dims, ϵ)

    function ∇_layernorm_impl(Δr_)
        _, Δx, Δdims, Δϵ = ∇_normalize_impl(Δr_)
        return NoTangent(), Δx, NoTangent(), NoTangent(), Δdims, Δϵ
    end

    return y, ∇_layernorm_impl
end

function _layernorm_impl(x, γ, β, dims, ϵ::Real)
    μ = mean(x; dims)
    rσ = 1 ./ sqrt.(var(x; mean=μ, dims, corrected=false) .+ ϵ)
    return (x .- μ) .* rσ .* γ .+ β
end

function CRC.rrule(rc::RuleConfig{>:HasReverseMode}, ::typeof(_layernorm_impl), x, γ, β,
                   dims, ϵ)
    y, ∇_normalize_impl = rrule(rc, _normalize_impl, x, dims, ϵ)

    function ∇_layernorm_impl(Δr_)
        Δr = CRC.unthunk(Δr_)

        Δγ = sum(Δr .* y; dims=filter(i -> size(γ, i) == 1, 1:ndims(x)))
        Δβ = sum(Δr; dims=filter(i -> size(β, i) == 1, 1:ndims(x)))
        Δy = Δr .* γ

        _, Δx, Δdims, Δϵ = ∇_normalize_impl(Δy)

        return NoTangent(), Δx, Δγ, Δβ, Δdims, Δϵ
    end

    return y .* γ .+ β, ∇_layernorm_impl
end
