macro dnnlcall(ex)
    expr = dnnlcall_partial_impl(ex)
    return quote
        status = $(expr)
        if status != Lib.dnnl_success
            throw(ErrorException("oneDNN call failed with status $(status)."))
        end
        status
    end
end

function dnnlcall_partial_impl(expr)
    expr.head != :call && error("Only call `@dnnlcall` on function calls")

    # Prefix "Lib." in front of the function call.
    # However, sometimes the function to call is passed as a higher order function.
    # Thus, we only implicitly attach "Lib" is the function name starts with "dnnl".
    fname = expr.args[1]
    if isa(fname, Symbol)
        fname = startswith(string(fname), "dnnl") ? :(Lib.$(fname)) : :($(esc(fname)))
    end

    # Escape and convert each of the arguments.
    args = expr.args[2:end]
    for i in eachindex(args)
        # Handle splats.
        arg = args[i]
        if isa(arg, Expr) && arg.head == :...
            args[i] = :(dnnl_convert($(esc(arg.args[1]))...)...)
        else
            args[i] = :(dnnl_convert($(esc(args[i]))))
        end
    end
    return :($fname($(args...)))
end

struct InnerConstructor end

macro wrap_type(jl_name, c_name, destructor)
    lower_constructor_name = Symbol(jl_name, :NoFinalizer)

    # Automatically add the "Lib" prefix if required.
    c_name isa Symbol && (c_name = :(Lib.$(c_name)))

    return esc(quote
        # Type definition
        mutable struct $(jl_name)
            handle::$(c_name)
            $(jl_name)(::InnerConstructor) = new($(c_name)())
        end

        # Use a trick of Lower and Higher constructeors.
        # Lower constructors should have the name `$(jl_name)NoFinalizer` and not
        # attach finalizers.
        #
        # The higher constructor will simply forward to the lower constructor but
        # attach a finalizer before returning.
        function $(jl_name)(args...)
            x = $(lower_constructor_name)(args...)
            attach_finalizer!(x)
            return x
        end

        # Finalizer
        destroy(x::$(jl_name)) = @dnnlcall $(destructor)(x)
        attach_finalizer!(x::$(jl_name)) = finalizer(destroy, x)

        # Conversion functions
        Base.unsafe_convert(::Type{$(c_name)}, x::$(jl_name)) = x.handle
        function Base.unsafe_convert(::Type{Ptr{$(c_name)}}, x::$(jl_name))
            return Base.unsafe_convert(Ptr{$(c_name)}, Base.pointer_from_objref(x))
        end
    end)
end

const MaybeRef{T} = Union{Ref{T}, T}
const MaybePtr{T} = Union{Ptr{T}, T}

wrap_ref(x::Ref) = x
wrap_ref(x) = Ref(x)

unwrap_ref(x::Ref) = x[]
unwrap_ref(x) = x

dnnl_type(::Type{Float16}) = Lib.dnnl_f16
dnnl_type(::Type{Float32}) = Lib.dnnl_f32
dnnl_type(::Type{Float64}) = Lib.dnnl_f64
dnnl_type(::Type{Int32}) = Lib.dnnl_s32
dnnl_type(::Type{Int8}) = Lib.dnnl_s8
dnnl_type(::Type{UInt8}) = Lib.dnnl_u8
dnnl_type(::Type{Bool}) = Lib.dnnl_boolean
dnnl_type(::T) where {T <: Number} = dnnl_type(T)
dnnl_type(::Type{T}) where {T} = error("No DNNL type for type $T")
dnnl_type(::T) where {T} = error("No DNNL type for $T")

function dnnl_type_to_julia(x::Lib.dnnl_data_type_t)
    x == Lib.dnnl_f16 && return Float16
    x == Lib.dnnl_f32 && return Float32
    x == Lib.dnnl_f64 && return Float64
    x == Lib.dnnl_s32 && return Int32
    x == Lib.dnnl_s8 && return Int8
    x == Lib.dnnl_u8 && return UInt8
    x == Lib.dnnl_boolean && return Bool
    error("No Julia type for DNNL type $x")
end

dnnl_convert(x) = x
dnnl_convert(x, y...) = (dnnl_convert(x), dnnl_convert.(y...)...)
dnnl_convert(::Type{T}) where {T} = dnnl_type(T)
dnnl_convert(x::Dims{N}) where {N} = Ref(dnnl_dims(x))
# dnnl_convert(x::NTuple{N, oneDNNMemoryDesc}) where {N} = Ref(x)

# Make a DIMS array
# NOTE: The OneDNN C-API expects a pointer, so we can't just pass a tuple.
# We either need to pass an array, or a Ref{Tuple}.
# Hwere, we choose to do the latter.
function dnnl_dims(x::Dims{N}) where {N}
    f(i) = i ≤ length(x) ? Lib.dnnl_dim_t(x[i]) : zero(Lib.dnnl_dim_t)
    return ntuple(f, Val(Lib.DNNL_MAX_NDIMS))
end
dnnl_dims(x::Dims{Lib.DNNL_MAX_NDIMS}) = x

dnnl_dims(x::AbstractArray) = dnnl_dims(strides(x))
dnnl_dims() = ntuple(Returns(zero(Int64)), Val(Lib.DNNL_MAX_NDIMS))
dnnl_dims(::Tuple{}) = dnnl_dims()

# Formats
default_strides(size::Tuple{Vararg{Int, N}}) where {N} = Base.size_to_strides(1, size...)
# dnnl_format_any() = Lib.dnnl_format_tag_any
