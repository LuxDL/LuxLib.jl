function __apply_bias_activation!!(
        σ::F, x, bias::Optional{<:AbstractArray}, ::Val{cache}) where {F, cache}
    if σ === identity
        bias === nothing && return x
        return _fast_broadcast!(+, x, bias)
    end
    if !cache
        bias === nothing && return _fast_broadcast!(σ, x)
        return _fast_broadcast!(σ ∘ +, x, bias)
    end
    bias === nothing && return _fast_broadcast(σ, x), x
    _fast_broadcast!(+, x, bias)
    return _fast_broadcast(σ, x), x
end

__apply_bias_activation(σ::F, x, bias::AbstractArray) where {F} = @. σ(x + bias)
__apply_bias_activation(::typeof(identity), x, bias::AbstractArray) = @. x + bias
__apply_bias_activation(σ::F, x, ::Nothing) where {F} = @. σ(x)
__apply_bias_activation(::typeof(identity), x, ::Nothing) = x