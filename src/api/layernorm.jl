@doc doc"""
    layernorm(x, scale, bias; dims, epsilon)

Layer Normalization. For details see [1].

Given an input array ``x``, this layer computes

```math
y = \frac{x - \mathbb{E}[x]}{\sqrt{Var[x] + \epsilon}} * \gamma + \beta
```

## Arguments

  - `x`: Input to be Normalized
  - `scale`: Scale factor (``\gamma``) (can be `nothing`)
  - `bias`: Bias factor (``\beta``) (can be `nothing`)

## Keyword Arguments

  - `dims`: Dimensions along which the mean and std of `x` is computed
  - `epsilon`: Value added to the denominator for numerical stability

## Returns

Normalized Array of same size as `x`.

## References

[1] Ba, Jimmy Lei, Jamie Ryan Kiros, and Geoffrey E. Hinton. "Layer normalization." arXiv
    preprint arXiv:1607.06450 (2016).
"""
function layernorm(x, scale, bias; dims, epsilon)
    return _layernorm_impl(x, scale, bias, dims, epsilon)
end

@doc doc"""
    normalize(x; dims, epsilon)

Normalize an array along the given dimensions.

Given an input array ``x``, this layer computes

```math
y = \frac{x - \mathbb{E}[x]}{\sqrt{Var[x] + \epsilon}}
```

## Arguments

  - `x`: Input to be Normalized

## Keyword Arguments

  - `dims`: Dimensions along which the mean and std of `x` is computed
  - `epsilon`: Value added to the denominator for numerical stability

## Returns

Normalized Array of same size as `x`.
"""
normalize(x; dims, epsilon) = _normalize_impl(x, dims, epsilon)
