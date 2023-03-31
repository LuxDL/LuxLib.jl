# Forward Pass called from outside ChainRules
function _normalize_impl(x, dims, ϵ::Real)
    μ = mean(x; dims)
    rσ = 1 ./ sqrt.(var(x; mean=μ, dims, corrected=false) .+ ϵ)

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

        Δx .+= last(CRC.unthunk(∇Σ(Δμ ./ N))) .+ (2 // (N - 1)) .* Δσ² .* x₋μ

        return (NoTangent(), Δx, NoTangent(), NoTangent())
    end

    return y, ∇_normalize_impl
end

# LayerNorm
_layernorm_impl(x, ::Nothing, ::Nothing, dims, ϵ::Real) = _normalize_impl(x, dims, ϵ)

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

        Δγ = sum(Δr .* y; dims=__except_dims(Val(ndims(x)), dims))
        Δβ = sum(Δr; dims=__except_dims(Val(ndims(x)), dims))
        Δy = Δr .* γ

        return (NoTangent(), ∇_normalize_impl(Δy)[2], Δγ, Δβ, NoTangent(), NoTangent())
    end

    return y .* γ .+ β, ∇_layernorm_impl
end
