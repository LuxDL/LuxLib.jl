# Used inside rrules
__activation_gradient(Δ, out, ::typeof(identity), x) = Δ
function __activation_gradient(Δ, out, act::F, x) where {F}
    opmode = internal_operation_mode((Δ, out))
    if opmode isa LoopedArrayOp  # All sizes are same
        y = similar(out)
        if x isa NotaNumber
            @simd ivdep for i in eachindex(Δ, out)
                @inbounds y[i] = only_derivative(out[i], act, x) * Δ[i]
            end
        else
            @simd ivdep for I in eachindex(Δ, out, x)
                @inbounds y[I] = only_derivative(out[I], act, x[I]) * Δ[I]
            end
        end
        return y
    end
    only_deriv = @closure (Δᵢ, oᵢ, xᵢ) -> Δᵢ * only_derivative(oᵢ, act, xᵢ)
    return broadcast(only_deriv, Δ, out, x)
end

function _fast_activation!(opmode, y::AbstractArray, σ::F, x::AbstractArray) where {F}
    broadcast!(σ, y, x)
    return
end
function _fast_activation!(
        ::LoopedArrayOp, y::AbstractArray, σ::F, x::AbstractArray) where {F}
    if LoopVectorization.check_args(y, x)
        @tturbo for I in indices((y, x))
            y[I] = σ(x[I])
        end
    else
        @batch for I in indices((y, x))
            y[I] = σ(x[I])
        end
    end
end

function _fast_activation_no_turbo!(
        ::LoopedArrayOp, y::AbstractArray, σ::F, x::AbstractArray) where {F}
    @simd ivdep for I in eachindex(y, x)
        y[I] = σ(x[I])
    end
end

function EnzymeRules.augmented_primal(
        cfg::EnzymeRules.ConfigWidth{1}, ::EnzymeCore.Const{typeof(_fast_activation!)},
        ::Type{RT}, opmode::EnzymeCore.Const{LoopedArrayOp},
        y::EnzymeCore.Duplicated{<:AbstractArray}, σ::EnzymeCore.Const{F},
        x::EnzymeCore.Duplicated{<:AbstractArray}) where {F, RT}
    dx = one.(x.val)
    dy = zero.(y.val)
    EnzymeCore.autodiff(EnzymeCore.Forward, _fast_activation_no_turbo!,
        opmode, EnzymeCore.Duplicated(y.val, dy),
        EnzymeCore.Const(σ.val), EnzymeCore.Duplicated(x.val, dx))

    primal = EnzymeRules.needs_primal(cfg) ? y.val : nothing
    shadow = EnzymeRules.needs_shadow(cfg) ? y.dval : nothing

    return EnzymeRules.AugmentedReturn(primal, shadow, (dy,))
end

function EnzymeRules.reverse(
        ::EnzymeRules.ConfigWidth{1}, ::EnzymeCore.Const{typeof(_fast_activation!)},
        ::Type{RT}, (dy,), opmode::EnzymeCore.Const{LoopedArrayOp},
        y::EnzymeCore.Duplicated{<:AbstractArray}, σ::EnzymeCore.Const{F},
        x::EnzymeCore.Duplicated{<:AbstractArray}) where {F, RT}
    if LoopVectorization.check_args(y.dval, x.dval, dy)
        @tturbo for I in indices((y.dval, x.dval, dy))
            x.dval[I] = y.dval[I] * dy[I]
        end
    else
        @batch for I in indices((y.dval, x.dval, dy))
            x.dval[I] = y.dval[I] * dy[I]
        end
    end

    x.dval !== y.dval && fill!(y.dval, false)

    return nothing, nothing, nothing, nothing
end

# Entry Points to the implementation
_fast_activation(::typeof(identity), x::AbstractArray) = x

@stable default_mode="disable" function _fast_activation(σ::F, x::AbstractArray) where {F}
    return _fast_activation(internal_operation_mode(x), σ, x)
end

function CRC.rrule(cfg::RuleConfig{>:HasReverseMode}, ::typeof(_fast_activation),
        σ::F, x::AbstractArray{T}) where {F, T}
    opmode = internal_operation_mode(x)

    opmode isa LoopedArrayOp || return CRC.rrule_via_ad(cfg, broadcast, σ, x) # No need to do anything

    if __needs_intermediate_but_has_rrule(σ, T)
        y = _fast_activation(opmode, σ, x)
        proj_x_cached = CRC.ProjectTo(x)
        ∇fast_activation = @closure Δ -> begin
            ∂x = __activation_gradient(CRC.unthunk(Δ), y, σ, x)
            return ∂∅, ∂∅, proj_x_cached(∂x)
        end
        return y, ∇fast_activation
    end

    return CRC.rrule_via_ad(cfg, broadcast, σ, x)
end

_fast_activation(opmode, σ::F, x::AbstractArray) where {F} = broadcast(σ, x)

function _fast_activation(opmode::LoopedArrayOp, σ::F, x::AbstractArray) where {F}
    RT = Core.Compiler._return_type(σ, Tuple{eltype(x)})
    y = similar(x, ifelse(isconcretetype(RT), RT, eltype(x)))
    _fast_activation!(opmode, y, σ, x)
    return y
end

_fast_activation!(::typeof(identity), x::AbstractArray) = nothing

@stable default_mode="disable" function _fast_activation!(σ::F, x::AbstractArray) where {F}
    _fast_activation!(internal_operation_mode(x), x, σ, x)
    return nothing
end

# Define rrule for `fast_activation!!`
function CRC.rrule(cfg::RuleConfig{>:HasReverseMode}, ::typeof(fast_activation!!),
        σ::F, x::AbstractArray{T}) where {F, T}
    can_setindex(typeof(x)) || return CRC.rrule_via_ad(cfg, _fast_activation, σ, x)

    σ === identity && return x, @closure(Δ->(∂∅, ∂∅, Δ))

    if __no_intermediate_needed(σ, T)
        _fast_activation!(σ, x) # Safe to overwrite x
        proj_x_no_cached = CRC.ProjectTo(x)
        ∇__fast_activation_impl_no_cached = @closure Δ -> begin
            ∂x = __activation_gradient(Δ, x, σ, NotaNumber())
            return ∂∅, ∂∅, proj_x_no_cached(∂x)
        end
        return x, ∇__fast_activation_impl_no_cached
    end

    if __needs_intermediate_but_has_rrule(σ, T)
        y = _fast_activation(σ, x)
        proj_x_cached = CRC.ProjectTo(x)
        ∇__fast_activation_impl_cached_crc = @closure Δ -> begin
            ∂x = __activation_gradient(CRC.unthunk(Δ), y, σ, x)
            return ∂∅, ∂∅, proj_x_cached(∂x)
        end
        return y, ∇__fast_activation_impl_cached_crc
    end

    return CRC.rrule_via_ad(cfg, broadcast, σ, x)
end

# Specialized functions that use SLEEFPirates.jl to speed up the activation functions
sigmoid_fast_sleefpirates(x::Number) = SLEEFPirates.sigmoid_fast(x)

softplus_sleefpirates(x::Number) = SLEEFPirates.softplus(x)

logsigmoid_sleefpirates(x::Number) = -softplus_sleefpirates(-x)

gelu_sleefpirates(x::Number) = SLEEFPirates.gelu(x)

const gelu_λ = √(2 / π)
const gelu_2λ = √(8 / π)

function ∂gelu_sleefpirates(x::Number)
    α = oftype(x, 0.044715)
    α2 = oftype(x, 0.08943)
    λλ = oftype(x, gelu_2λ)
    x2 = Base.FastMath.mul_fast(x, x)
    t = muladd(x2, α, one(x))
    Ω = sigmoid_fast_sleefpirates(λλ * x * t)
    dσ = conj(Ω * (1 - Ω))
    return muladd(dσ * λλ * muladd(x2, α2, t), x, Ω)
end

swish_sleefpirates(x::Number) = Base.FastMath.mul_fast(x, sigmoid_fast_sleefpirates(x))

lisht_sleefpirates(x::Number) = Base.FastMath.mul_fast(x, tanh_fast_sleefpirates(x))

tanh_sleefpirates(x::Number) = SLEEFPirates.tanh(x)

tanh_fast_sleefpirates(x::Number) = SLEEFPirates.tanh_fast(x)

for (f, dfdx) in [
    #! format: off
    (:sigmoid_fast_sleefpirates, :(conj(Base.FastMath.mul_fast(Ω, Base.FastMath.sub_fast(1, Ω))))),
    (:softplus_sleefpirates, :(sigmoid_fast_sleefpirates(x))),
    (:logsigmoid_sleefpirates, :(sigmoid_fast_sleefpirates(-x))),
    (:gelu_sleefpirates, :(∂gelu_sleefpirates(x))),
    (:swish_sleefpirates, :(Base.FastMath.add_fast(Ω, Base.FastMath.mul_fast(sigmoid_fast_sleefpirates(x), Base.FastMath.sub_fast(1, Ω))))),
    (:tanh_sleefpirates, :(conj(Base.FastMath.sub_fast(1, Base.FastMath.mul_fast(Ω, Ω))))),
    (:tanh_fast_sleefpirates, :(conj(Base.FastMath.sub_fast(1, Base.FastMath.mul_fast(Ω, Ω)))))
    #! format: on
]
    @eval CRC.@scalar_rule($f(x), $dfdx)

    pullback = Symbol(:broadcasted_, f, :_pullback)
    @eval function CRC.rrule(::typeof(Broadcast.broadcasted), ::typeof($f),
            x::Union{Numeric, Broadcast.Broadcasted})
        Ω = $f.(x)
        function $pullback(dΩ)
            x_thunk = CRC.InplaceableThunk(
                dx -> @.(dx+=dΩ * $dfdx), CRC.@thunk @.(dΩ*$dfdx))
            return ∂∅, ∂∅, x_thunk
        end
        return Ω, $pullback
    end
end

# Enzyme works for all of these except `gelu`.
# See https://github.com/EnzymeAD/Enzyme.jl/issues/1671
function EnzymeRules.augmented_primal(
        cfg::EnzymeRules.ConfigWidth{1}, func::EnzymeCore.Const{typeof(gelu_sleefpirates)},
        ::Type{<:EnzymeCore.Active}, x::EnzymeCore.Active{<:Number})
    primal = EnzymeRules.needs_primal(cfg) ? func.val(x.val) : nothing
    return EnzymeRules.AugmentedReturn(primal, nothing, nothing)
end

function EnzymeRules.reverse(
        ::EnzymeRules.ConfigWidth{1}, ::EnzymeCore.Const{typeof(gelu_sleefpirates)},
        dret::EnzymeCore.Active, ::Nothing, x::EnzymeCore.Active{<:Number})
    return (dret.val * ∂gelu_sleefpirates(x.val),)
end

function EnzymeRules.forward(::EnzymeCore.Const{typeof(gelu_sleefpirates)},
        ::Type{<:EnzymeCore.Duplicated}, x::EnzymeCore.Duplicated{<:Number})
    return EnzymeCore.Duplicated(
        gelu_sleefpirates(x.val), x.dval * ∂gelu_sleefpirates(x.val))
end

# Convert to SLEEFPirates.jl
function select_fastest_activation(f::F, xs...) where {F}
    return select_fastest_activation(
        f, internal_operation_mode(xs), unrolled_mapreduce(__eltype, promote_type, xs))
end

select_fastest_activation(f::F, ::AbstractInternalArrayOpMode, ::Type{T}) where {F, T} = f
function select_fastest_activation(f::F, ::LoopedArrayOp, ::Type{T}) where {F, T}
    return sleefpirates_activation(f, T)
end

CRC.@non_differentiable select_fastest_activation(::Any...)

sleefpirates_activation(f::F, ::Type{T}) where {F, T} = f
sleefpirates_activation(f::F, ::Type{Float32}) where {F} = sleefpirates_activation(f)

for (fbase, ffast) in [
    #! format: off
    (NNlib.sigmoid_fast, sigmoid_fast_sleefpirates),
    (NNlib.softplus, softplus_sleefpirates),
    (NNlib.logsigmoid, logsigmoid_sleefpirates),
    (NNlib.gelu, gelu_sleefpirates),
    (NNlib.swish, swish_sleefpirates),
    (NNlib.lisht, lisht_sleefpirates),
    (Base.tanh, tanh_sleefpirates),
    (NNlib.tanh_fast, tanh_fast_sleefpirates)
    #! format: on
]
    @eval sleefpirates_activation(::typeof($fbase)) = $ffast
end
sleefpirates_activation(f::F) where {F} = f

CRC.@non_differentiable sleefpirates_activation(::Any...)
