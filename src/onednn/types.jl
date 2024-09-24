@wrap_type MemoryPtr dnnl_memory_t dnnl_memory_destroy

function MemoryPtrNoFinalizer(A::AbstractArray, desc=memory_descriptor(A))
    return MemoryPtrNoFinalizer(convert(Ptr{Nothing}, pointer(A)), desc)
end

function MemoryPtrNoFinalizer(ptr::Ptr{Nothing}, desc)
    memory = MemoryPtr(InnerConstructor())
    @dnnlcall dnnl_memory_create(memory, desc, global_engine(), ptr)
    return memory
end

@wrap_type Engine dnnl_engine_t dnnl_engine_destroy

function EngineNoFinalizer(kind=Lib.dnnl_cpu, index=0)
    engine = Engine(InnerConstructor())
    @dnnlcall dnnl_engine_create(engine, kind, index)
    return engine
end

@wrap_type Stream dnnl_stream_t dnnl_stream_destroy

function StreamNoFinalizer(engine::Engine)
    stream = Stream(InnerConstructor())
    @dnnlcall dnnl_stream_create(stream, engine, Lib.dnnl_stream_default_flags)
    return stream
end

@wrap_type Attributes dnnl_primitive_attr_t dnnl_primitive_attr_destroy

function AttributesNoFinalizer()
    attributes = Attributes(InnerConstructor())
    @dnnlcall dnnl_primitive_attr_create(attributes)
    @dnnlcall dnnl_primitive_attr_set_scratchpad_mode(
        attributes, Lib.dnnl_scratchpad_mode_user)
    return attributes
end

@wrap_type PostOps dnnl_post_ops_t dnnl_post_ops_destroy

function PostOpsNoFinalizer()
    postops = PostOps(InnerConstructor())
    @dnnlcall dnnl_post_ops_create(postops)
    return postops
end

@wrap_type PrimitiveDescriptor dnnl_primitive_desc_t dnnl_primitive_desc_destroy

function PrimitiveDescriptorNoFinalizer(args...)
    return PrimitiveDescriptorNoFinalizer(Lib.dnnl_primitive_desc_create, args...)
end

function PrimitiveDescriptorNoFinalizer(f::F, args...) where {F <: Function}
    descriptor = PrimitiveDescriptor(InnerConstructor())
    @dnnlcall f(descriptor, args...)
    return descriptor
end

function Base.copy(x::PrimitiveDescriptor)
    descriptor = PrimitiveDescriptor(InnerConstructor())
    @dnnlcall dnnl_primitive_desc_clone(descriptor, x)
    return descriptor
end
