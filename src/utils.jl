# Utilities
@inline _div_idx(idx, n) = div(idx - 1, n) + 1
@inline _mod_idx(idx, n) = mod(idx - 1, n) + 1

@inline _get_backend(::Nothing) = nothing
@inline function _get_backend(d)
    return hasmethod(KA.get_backend, (typeof(d),)) ? KA.get_backend(d) : nothing
end
@inline _get_backend(t::Tuple) = _get_backend.(t)

function __check_all_same_or_nothing(x::Union{AbstractVector, Tuple})
    @inbounds for i in eachindex(x)
        x[i] === nothing && continue
        for j in (i + 1):length(x)
            x[j] === nothing && continue
            x[i] != x[j] && return false
        end
    end
    return true
end

CRC.@non_differentiable _get_backend(::Any)

@inline _assert_same_backend(args...) = _assert_same_backend([args...])
@inline function _assert_same_backend(xs)
    devs = _get_backend.(xs)
    if !__check_all_same_or_nothing(devs)
        throw(ArgumentError("All arguments must be on the same backend. This error is \
                             encountered if you are calling a function with a mix of CPU \
                             and GPU arrays."))
    end
    return
end

CRC.@non_differentiable _assert_same_backend(::Any...)

@inline @generated _vec(x::T) where {T} = hasmethod(vec, (T,)) ? :(vec(x)) : :x

@inline @inbounds function _get_reshape_dims(sx::NTuple{N, <:Int}, ly::Int) where {N}
    if ly == sx[N - 1]
        return ntuple(i -> i == N - 1 ? ly : 1, N)
    elseif N > 2 && ly == sx[N - 1] * sx[N - 2]
        return ntuple(i -> i == (N - 1) || i == (N - 2) ? sx[i] : 1, N)
    else
        throw(ArgumentError("Invalid Dimensions!"))
    end
end

CRC.@non_differentiable _get_reshape_dims(::Any...)

@inline _reshape_into_proper_shape(::Nothing, y) = nothing
@inline _reshape_into_proper_shape(x, y) = reshape(x, _get_reshape_dims(size(y), length(x)))

# Copy and don't allow gradient propagation
_copy_autodiff_barrier(x) = copy(x)
_copy_autodiff_barrier(::Nothing) = nothing

CRC.@non_differentiable _copy_autodiff_barrier(::Any)

# Meta Programming Utilities
__is_tracked(x) = x == :TrackedArray || x == :TrackedVector
__is_tracked(args...) = any(__is_tracked, args)

# Droping ForwardDiff Gradients
function _drop_forwarddiff_partials end

_drop_forwarddiff_partials(x::AbstractArray) = x
_drop_forwarddiff_partials(::Nothing) = nothing
_drop_forwarddiff_partials(x::Tuple) = _drop_forwarddiff_partials.(x)
function _drop_forwarddiff_partials(x::NamedTuple{N}) where {N}
    return NamedTuple{N}(map(_drop_forwarddiff_partials, values(x)))
end

# Maybe typecast the array
@inline _oftype_array(::Type{T}, x::AbstractArray{T}) where {T} = x
@inline _oftype_array(::Type{T}, x::AbstractArray) where {T} = T.(x)

## This part is taken from NNlib.jl
# This just saves typing `only.(only.(` many times:
@inline only_derivative(y, f::F, x) where {F} = only(only(CRC.derivatives_given_output(
    y, f, x)))

# This has no methods, used for testing whether `derivatives_given_output(Ω, f, x)`
# is independent of `x`, as `_return_type` says `Union{}` when calling is an error.
struct NotaNumber <: Real end

# Check no setindexing
@inline __any_immutable_array(x...) = any(__is_immutable_array, x)
@inline __is_immutable_array(x::AbstractArray) = !ArrayInterface.can_setindex(x)
@inline __is_immutable_array(::Nothing) = false

CRC.@non_differentiable __any_immutable_array(::Any...)

@inline function __is_mixed_precision(args...)
    idx = findfirst(Base.Fix2(isa, AbstractArray), args)
    T = eltype(args[idx])
    for arg in args[(idx + 1):end]
        arg isa AbstractArray && T != eltype(arg) && return true
    end
    return false
end

CRC.@non_differentiable __is_mixed_precision(::Any...)

@inline function __expand_conv_bias_dims(
        bias::AbstractVector, ::AbstractArray{T, N}) where {T, N}
    @assert N ≥ 2
    return reshape(bias, (ntuple(Returns(1), N - 2)..., length(bias), 1))
end

@inline function __get_concrete_fba_output_eltype(
        act::F, ::AbstractArray{Tw}, ::AbstractArray{Tx},
        b::Union{Nothing, <:AbstractArray}) where {F, Tw, Tx}
    if b === nothing
        Ty = promote_type(Tw, Tx)
        Tact = Core.Compiler._return_type(act, Tuple{Ty})
        return isconcretetype(Tact) ? promote_type(Ty, Tact) : Ty
    end
    Ty = promote_type(Tw, Tx, eltype(b))
    Tact = Core.Compiler._return_type(act, Tuple{Ty})
    return isconcretetype(Tact) ? promote_type(Ty, Tact) : Ty
end

# Helper to add bias and apply activation function
## This is only meant to be used inside rrules
@inline function __apply_bias_activation!!(
        σ::F, x, bias::Union{Nothing, AbstractArray}, ::Val{cache}) where {F, cache}
    if σ === identity
        bias === nothing && return x
        @. x += bias
        return x
    end
    if !cache
        if bias === nothing
            if ArrayInterface.fast_scalar_indexing(x)
                @.. x = σ(x)
            else
                @. x = σ(x)
            end
        else
            @. x = σ(x + bias)
        end
        return x
    end
    bias === nothing && return __try_fast_broadcast(σ, x), x
    @. x += bias
    return __try_fast_broadcast(σ, x), x
end

@inline function __try_fast_broadcast(f::F, x) where {F}
    return ArrayInterface.fast_scalar_indexing(x) ? @..(f(x)) : @.(f(x))
end

@inline __apply_bias_activation(σ::F, x, bias::AbstractArray) where {F} = @. σ(x + bias)
@inline __apply_bias_activation(σ::F, x, ::Nothing) where {F} = @. σ(x)

@inline __added_bias_gradient(b::Nothing, Δ) = CRC.NoTangent()
@inline function __added_bias_gradient(b::AbstractArray, Δ)
    ∂b = similar(b)
    sum!(∂b, Δ)
    return ∂b
end
