using Clang.Generators
using oneDNN_jll

cur_dir = pwd()

cd(@__DIR__)

include_dir = joinpath(oneDNN_jll.artifact_dir, "include")

options = load_options(joinpath(@__DIR__, "generator.toml"))

onednn_headers = [
    joinpath(include_dir, "dnnl.h"),
    joinpath(include_dir, "dnnl_types.h"),
    joinpath(include_dir, "dnnl_config.h"),
    joinpath(include_dir, "dnnl_version.h")
]

args = get_default_args()
push!(args, "-I$include_dir")

ctx = create_context(onednn_headers, args, options)

# run generator
build!(ctx, BUILDSTAGE_NO_PRINTING)

function rewrite!(e::Expr)
    # const DNNL_RUNTIME_SIZE_VAL = size_t(DNNL_RUNTIME_DIM_VAL)
    if e.head == :const && e.args[1] isa Expr && e.args[1].head == :(=) &&
       e.args[1].args[1] == :DNNL_RUNTIME_SIZE_VAL && e.args[1].args[2] isa Expr &&
       e.args[1].args[2].head == :call && e.args[1].args[2].args[1] == :size_t &&
       e.args[1].args[2].args[2] == :DNNL_RUNTIME_DIM_VAL
        e.args[1].args[2] = unsigned(typemin(Int64))
        return
    end
    # const DNNL_RUNTIME_DIM_VAL = INT64_MIN
    if e.head == :const && e.args[1] isa Expr && e.args[1].head == :(=) &&
       e.args[1].args[1] == :DNNL_RUNTIME_DIM_VAL && e.args[1].args[2] == :INT64_MIN
        e.args[1].args[2] = typemin(Int64)
        return
    end
    # const DNNL_RUNTIME_S32_VAL = DNNL_RUNTIME_S32_VAL_REP
    if e.head == :const && e.args[1] isa Expr && e.args[1].head == :(=) &&
       e.args[1].args[1] == :DNNL_RUNTIME_S32_VAL &&
       e.args[1].args[2] == :DNNL_RUNTIME_S32_VAL_REP
        e.args[1].args[2] = 0
        return
    end
    return
end

function rewrite!(dag::ExprDAG)
    for node in get_nodes(dag), expr in get_exprs(node)
        rewrite!(expr)
    end
end

rewrite!(ctx.dag)

build!(ctx, BUILDSTAGE_PRINTING_ONLY)

cd(cur_dir)
