"""
    engine()

Create a new oneDNN engine. Currently creates a CPU engine.
"""
engine() = Engine()

"""
    global_engine()

Fetch the global oneDNN engine created in LuxLib. If it doesn't exist, create it.
"""
function global_engine()
    if !GLOBAL_ENGINE_INITIALIZED[]
        GLOBAL_ENGINE[] = engine()
        GLOBAL_ENGINE_INITIALIZED[] = true
    end
    return GLOBAL_ENGINE[]
end

"""
    get_math_mode()

Get the current math mode for oneDNN.
"""
function get_math_mode()
    mode = Ref{Lib.dnnl_fpmath_mode_t}()
    @dnnlcall Lib.dnnl_get_default_fpmath_mode(mode)
    dnnl_mode = unwrap_ref(mode)
    return if dnnl_mode == Lib.dnnl_fpmath_mode_strict
        :strict
    elseif dnnl_mode == Lib.dnnl_fpmath_mode_bf16
        :bf16
    elseif dnnl_mode == Lib.dnnl_fpmath_mode_f16
        :f16
    elseif dnnl_mode == Lib.dnnl_fpmath_mode_tf32
        :tf32
    elseif dnnl_mode == Lib.dnnl_fpmath_mode_any
        :fastest
    else
        error("Unknown math mode: $(dnnl_mode). This should not happen. Please open an \
               issue in `LuxLib.jl`.")
    end
end

"""
    set_math_mode!(mode)

Set the current math mode for oneDNN. `mode` must be one of the following:

  - `:strict` -- `Lib.dnnl_fpmath_mode_strict`
  - `:bf16` -- `Lib.dnnl_fpmath_mode_bf16`
  - `:f16` -- `Lib.dnnl_fpmath_mode_f16`
  - `:tf32` -- `Lib.dnnl_fpmath_mode_tf32`
  - `:fastest` -- `Lib.dnnl_fpmath_mode_any`

For details, see [`Lib.dnnl_fpmath_mode_t`](@ref).

See also [`get_math_mode`](@ref).
"""
function set_math_mode!(mode::Symbol)
    dnnl_mode = if mode == :strict
        Lib.dnnl_fpmath_mode_strict
    elseif mode == :bf16
        Lib.dnnl_fpmath_mode_bf16
    elseif mode == :f16
        Lib.dnnl_fpmath_mode_f16
    elseif mode == :tf32
        Lib.dnnl_fpmath_mode_tf32
    elseif mode == :fastest
        Lib.dnnl_fpmath_mode_any
    else
        error("Invalid math mode: $(mode). Valid modes are `:strict`, `:bf16`, `:f16`, \
               `:tf32`, and `:fastest`.")
    end
    @dnnlcall Lib.dnnl_set_default_fpmath_mode(dnnl_mode)
    return nothing
end
