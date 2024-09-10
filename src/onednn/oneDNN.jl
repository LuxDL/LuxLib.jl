module oneDNN

using ArrayInterface: ArrayInterface
using ..Utils: ancestor

include("lib.jl")  # Low-level bindings to oneDNN C API -- automatically generated

include("utils.jl")

include("types.jl")
include("memory.jl")

include("api.jl")

const GLOBAL_ENGINE_INITIALIZED = Ref{Bool}(false)
const GLOBAL_ENGINE = Ref{Engine}()

function __init__()
    # Initialize the global engine.
    GLOBAL_ENGINE[] = engine()
    GLOBAL_ENGINE_INITIALIZED[] = true

    # Set the default math mode. We set to the fastest mode.
    set_math_mode!(:fastest)
end

end
