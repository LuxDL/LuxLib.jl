# Memory Descriptor
struct MemoryDesc
    handle::Lib.dnnl_memory_desc_t

    MemoryDesc(x::Lib.dnnl_memory_desc_t) = new(x)
    MemoryDesc(x) = memory_descriptor(x)
end

Base.unsafe_convert(::Type{Lib.dnnl_memory_desc_t}, x::MemoryDesc) = x.handle
function Base.unsafe_convert(::Type{Ptr{Lib.dnnl_memory_desc_t}}, x::MemoryDesc)
    return Base.unsafe_convert(Ptr{Lib.dnnl_memory_desc_t}, Base.pointer_from_objref(x))
end

memory_descriptor(x::MemoryDesc) = x
function Base.cconvert(::Type{Ptr{Lib.dnnl_memory_desc_t}}, x::MemoryDesc)
    return Base.cconvert(Ptr{Lib.dnnl_memory_desc_t}, Ref(x.handle))
end

function Base.eltype(md::MemoryDesc)
    result = Ref{Lib.dnnl_data_type_t}()
    @dnnlcall Lib.dnnl_memory_desc_query(md, Lib.dnnl_query_data_type, result)
    return dnnl_type_to_julia(unwrap_ref(result))
end

function Base.size(md::MemoryDesc)
    result = Ref(Vector{Int64}(undef, Lib.DNNL_MAX_NDIMS))
    @dnnlcall Lib.dnnl_memory_desc_query(md, Lib.dnnl_query_dims, result)
    return Tuple(reverse(result[][1:ndims(md)]))
end

function Base.strides(md::MemoryDesc)
    result = Ref(Vector{Int64}(undef, Lib.DNNL_MAX_NDIMS))
    @dnnlcall Lib.dnnl_memory_desc_query(md, Lib.dnnl_query_strides, result)
    return Tuple(reverse(result[][1:ndims(md)]))
end

function Base.ndims(md::MemoryDesc)
    result = Ref{Lib.dnnl_dim_t}()
    @dnnlcall Lib.dnnl_memory_desc_query(md, Lib.dnnl_query_ndims_s32, result)
    return Int(unwrap_ref(result))
end

function padded_size(md::MemoryDesc)
    result = Ref(Vector{Int64}(undef, Lib.DNNL_MAX_NDIMS))
    @dnnlcall Lib.dnnl_memory_desc_query(md, Lib.dnnl_query_padded_dims, result)
    padded_dims = result[]
    return Tuple(reverse(padded_dims[1:findlast(!=(0), padded_dims)]))
end

function padded_offsets(md::MemoryDesc)
    result = Ref(Vector{Int64}(undef, Lib.DNNL_MAX_NDIMS))
    @dnnlcall Lib.dnnl_memory_desc_query(md, Lib.dnnl_query_padded_offsets, result)
    return Tuple(reverse(result[][1:ndims(md)]))
end

function format_kind(md::MemoryDesc)
    result = Ref{Lib.dnnl_format_kind_t}()
    @dnnlcall Lib.dnnl_memory_desc_query(md, Lib.dnnl_query_format_kind, result)
    return unwrap_ref(result)
end

function print_memory_descriptor(io::IO, md::MemoryDesc, level::Int=0)
    base_desc = "oneDNN Memory Description:"
    # TODO: Additional information if the format is "blocked"
    join_str = "\n" * "    "^(level + 1)
    ndims_str = "ndims: $(ndims(md))"
    size_str = "size: $(size(md))"
    datatype_str = "datatype: $(eltype(md))"
    format_kind_str = "format kind: $(format_kind(md))"
    padded_dims_str = "padded dims: $(padded_size(md))"
    padded_offsets_str = "padded offsets: $(padded_offsets(md))"
    desc = join(
        [base_desc, ndims_str, size_str, datatype_str,
            format_kind_str, padded_dims_str, padded_offsets_str],
        join_str)
    print(io, desc)
end

function Base.show(io::IO, ::MIME"text/plain", md::MemoryDesc)
    print_memory_descriptor(io, md)
end

memory_descriptor(x::AbstractArray{T}) where {T} = memory_descriptor(T, size(x), strides(x))

function memory_descriptor(
        ::Type{T}, dims::Dims{N}, strides::Dims{N}=default_strides(dims)) where {T, N}
    handle = Ref{Lib.dnnl_memory_desc_t}()
    @dnnlcall dnnl_memory_desc_create_with_strides(
        handle, N, reverse(dims), T, reverse(strides))
    return MemoryDesc(unwrap_ref(handle))
end

# convenience creation by tag.
function memory_descriptor(
        ::Type{T}, dims::Dims{N}, tag::Union{Lib.dnnl_format_tag_t, UInt32}) where {T, N}
    handle = Ref{Lib.dnnl_memory_desc_t}()
    @dnnlcall dnnl_memory_desc_create_with_tag(handle, N, reverse(dims), T, tag)
    return MemoryDesc(unwrap_ref(handle))
end

# toany(a::MemoryDesc) = memorydesc(a.data_type, logicalsize(a), dnnl_format_any())

# isany(a::Ptr{MemoryDesc}) = isany(unsafe_load(a))
# isany(a::MemoryDesc) = a.format_kind == Lib.dnnl_format_kind_any

# function Base.:(==)(a::MaybeRef{MemoryDesc}, b::MaybeRef{MemoryDesc})
#     return Bool(Lib.dnnl_memory_desc_equal(wrap_ref(a), wrap_ref(b)))
# end

function get_bytes(a::MaybeRef{MemoryDesc})
    return signed(Lib.dnnl_memory_desc_get_size(unwrap_ref(a).handle))
end

# Memory Type for oneDNN -- distinct from Memory in Base
struct Memory{T, N, A <: AbstractArray{T}} <: AbstractArray{T, N}
    # The underlying array that is supplying the data.
    array::A
    offset::Int

    # Keep around some information about size and padding.
    logicalsize::Dims{N}

    # Memory object from DNNL
    memory::MemoryPtr
end

ArrayInterface.fast_scalar_indexing(::Type{<:Memory}) = false
ArrayInterface.can_setindex(::Type{<:Memory}) = false

function Base.convert(::Type{Memory{T, N, A}}, x::Memory{T, N, B}) where {T, N, A, B}
    return Memory(convert(A, x.array), x.offset, x.logicalsize, x.memory)
end

memory_descriptor(x::Memory) = MemoryDesc(memory_descriptor_ptr(x))

Base.sizeof(x::Memory) = get_bytes(memory_descriptor(x))

# toany(x::Memory) = toany(memorydesc(x))

Base.size(x::Memory) = x.logicalsize
# logicalsize(x::Memory) = size(x)
Base.strides(x::Memory) = strides(memory_descriptor(x))
# padded_size(x::Memory{T,N}) where {T,N} = padded_size(memorydesc(x), Val(N))

Base.parent(x::Memory) = x.array
# function ChainRulesCore.rrule(::typeof(Base.parent), x::Memory)
#     return parent(x), Δ -> (ChainRulesCore.NoTangent(), Δ)
# end

# arraytype(::Memory{T,N,A}) where {T,N,A} = A

function Base.show(io::IO, x::Memory)
    print(io, "Opaque Memory with ")
    print_memory_descriptor(io, memory_descriptor(x))
    x.offset != 1 && print(io, " - SubArray")
    return
end
Base.show(io::IO, ::MIME"text/plain", x::Memory) = show(io, x)

# Base.any(f::F, x::Memory) where {F <: Function} = any(f, materialize(x))

# for creating OneDNN arguments
# @inline access_pointer(x, offset, context) = pointer(x, offset)
# function setptr!(x::Memory{T}, context::AccessContext = Reading()) where {T}
#     ptr = access_pointer(x.array, x.offset, context)
#     @apicall dnnl_memory_set_data_handle_v2(x.memory, ptr, global_stream())
# end

# function Base.cconvert(
#     ::Type{T}, x::Memory
# ) where {T<:Union{Lib.dnnl_memory_t,Ptr{Lib.dnnl_memory_t}}}
#     setptr!(x)
#     return Base.cconvert(T, x.memory)
# end

# Base.cconvert(::Type{Ptr{Lib.dnnl_memory_desc_t}}, x::Memory) = memorydesc_ptr(x)

# Base.elsize(::Type{<:Memory{T}}) where {T} = sizeof(T)
# function Base.unsafe_convert(::Type{Ptr{T}}, x::Memory{T}) where {T}
#     return pointer(x.array)
# end

# # For constructing DNNL arguments.
# function dnnl_exec_arg(x::Memory, context::AccessContext = Reading())
#     setptr!(x, context)
#     return x.memory
# end

# Try to remove as many layers of wrapping around `A` as possible.
# Since all of the dimension and layout information will be stored in the OneDNN
# `memorydesc`, we don't need to hold onto it on the Julia level, which can potentially
# cause down-stream type instabilities.
Memory(A::AbstractArray) = Memory(ancestor(A), offset(A), size(A), MemoryPtr(A))

offset(::AbstractArray) = one(Int64)
offset(x::SubArray) = Base.first_index(x)

Memory(M::Memory) = M

# function ChainRulesCore.rrule(::Type{<:Memory}, x)
#     return (Memory(x), Δ -> (ChainRulesCore.NoTangent(), Δ))
# end

# # Convenience method for creating destination memories from a source memory.
# Base.size(M::Memory) = M.logicalsize
# Base.eltype(M::Memory{T}) where {T} = T

function Base.getindex(::Memory, I::Vararg{Int, N}) where {N}
    throw(ArgumentError("Cannot index opaque memory formats."))
end

function Base.setindex!(::Memory, v, I::Vararg{Int, N}) where {N}
    throw(ArgumentError("Cannot index opaque memory formats."))
end

memory_descriptor(M::Memory) = MemoryDesc(memory_descriptor_ptr(M))
function memory_descriptor_ptr(M::Memory)
    md = Ref{Lib.dnnl_memory_desc_t}()
    @dnnlcall Lib.dnnl_memory_get_memory_desc(M.memory, md)
    return unwrap_ref(md)
end

# #####
# ##### Lazy Transpose
# #####

# # General idea: swap the dims and strides.
# # TODO: Need to validate that this is a blocked layout with no tiling ...
# function Base.adjoint(M::Memory{T,2}) where {T}
#     dims = size(M)
#     strides = Base.strides(memorydesc(M), Val(2))

#     reversed_dims = reverse(dims)
#     desc = memorydesc(T, reversed_dims, reverse(strides))
#     memory = MemoryPtr(parent(M), desc)
#     return Memory(parent(M), M.offset, reversed_dims, memory)
# end

# function Base.permutedims(M::Memory{T,N}, perm::NTuple{N,Int}) where {T,N}
#     dims = size(M)
#     strides = Base.strides(memorydesc(M), Val(N))
#     dims_permuted = unsafe_permute(dims, perm)
#     strides_permuted = unsafe_permute(strides, perm)

#     desc = memorydesc(T, dims_permuted, strides_permuted)
#     memory = MemoryPtr(parent(M), desc)
#     return Memory(parent(M), M.offset, dims_permuted, memory)
# end

# function unsafe_permute(a::NTuple{N,Int}, b::NTuple{N,Int}) where {N}
#     return ntuple(i -> @inbounds(a[@inbounds b[i]]), Val(N))
# end

# #####
# ##### Construct more memories!!
# #####

# function Base.similar(
#     x::Memory{U,M},
#     ::Type{T} = eltype(x),
#     dims::NTuple{N,Int} = size(x),
#     desc::MemoryDesc = (M == N && U === T) ? memorydesc(x) : memorydesc(T, dims),
# ) where {U,T,M,N}
#     # Number of bytes to allocate.
#     # Since OneDNN is free to reorder and pad, we need to explicitly ask it.
#     bytes = getbytes(desc)

#     # Allocate the output array.
#     # This will be allocated as just a plain vector with dimensions padded with ones so it
#     # has the same dimension as the wrapped "Memory"
#     padded_dims = (div(bytes, sizeof(T)), ntuple(_ -> 1, Val(N - 1))...)
#     out = similar(ancestor(x), T, padded_dims)

#     # Since we specifically created this array, the offset will always start at one.
#     return Memory(out, 1, dims, MemoryPtr(out, desc))
# end

# Base.similar(x::Memory{T,M}, dims::NTuple{N,Int}) where {T,M,N} = similar(x, T, dims)
# function Base.similar(x::Memory{T,M}, dims::NTuple{N,Int}, desc::MemoryDesc) where {T,M,N}
#     return similar(x, T, dims, desc)
# end

# materialize(x::AbstractArray, args...; kw...) = x
# function Array(M::Memory{T, N}) where {T, N}
#     # Check if this memory is already in the requested layout.
#     # If so, return the underlying array.
#     desired_strides = default_strides(size(M))
#     actual_strides = strides(M)

#     # In order to return the underlying object, we need to ensure that:
#     # 1. The length of the wrapped object is the same as the length of the Memory.
#     # This helps handle views correctly.
#     #
#     # 2. Strides are the same
#     if length(parent(M)) == length(M) && desired_strides == actual_strides
#         return reshape(parent(M), size(M))
#     end

#     desc = memory_descriptor(T, size(M), desired_strides)
# end
# function materialize(M::Memory{T,N}; allowreorder = true) where {T,N}
#     # Check if this memory is already in the requested layout.
#     # If so, return the underlying array.
#     desired_strides = default_strides(logicalsize(M))
#     actual_strides = strides(M)

#     # In order to return the underlying object, we need to ensure that:
#     # 1. The length of the wrapped object is the same as the length of the Memory.
#     # This helps handle views correctly.
#     #
#     # 2. Strides are the same[
#     if length(parent(M)) == length(M) && desired_strides == actual_strides
#         return reshape(parent(M), logicalsize(M))
#     end

#     if !allowreorder
#         msg = """
#         Expected strides: $desired_strides.
#         Found strides: $actual_strides.
#         """
#         throw(ArgumentError(msg))
#     end

#     desc = memorydesc(T, logicalsize(M), desired_strides)
#     return reshape(parent(reorder(desc, M)), logicalsize(M))
# end

# function ChainRulesCore.rrule(
#     ::typeof(materialize), x, args::Vararg{Any,N}; kw...
# ) where {N}
#     return materialize(x, args...; kw...),
#     Δ -> (ChainRulesCore.NoTangent(), Δ, ntuple(_ -> ChainRulesCore.NoTangent(), Val(N)))
# end

# #####
# ##### Reshape
# #####

# function Base.reshape(memory::Memory{T}, dims::NTuple{N,Int}) where {T,N}
#     md = Ref{MemoryDesc}()
#     @apicall dnnl_memory_desc_reshape(md, memory, N, Ref(reverse(dims)))
#     new_memory = MemoryPtr(parent(memory), md)
#     return Memory(parent(memory), memory.offset, dims, new_memory)
# end
