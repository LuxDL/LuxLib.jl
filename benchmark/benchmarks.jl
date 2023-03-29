using LuxLib, BenchmarkTools, LuxCUDA, StableRNGs
import Flux

CUDA.allowscalar(false)
rng = StableRNG(1234)

# convenience macro to create a benchmark that requires synchronizing the GPU
macro cuda_benchmarkable(ex...)
  quote
      @benchmarkable CUDA.@sync blocking=false $(ex...) teardown=(GC.gc(true); CUDA.reclaim())
  end
end

function create_benchmarkable(tag, fn, args...; kwargs...)
  if tag == "CPU"
      return @benchmarkable $fn($(args)...; $(kwargs)...)
  elseif tag == "CUDA"
      return @cuda_benchmarkable $fn($(args)...; $(kwargs)...)
  else
      error("Unknown tag: $tag")
  end
end

const SUITE = BenchmarkGroup()

const GROUP = get(ENV, "LUXLIB_BENCHMARK_GROUP", "All")

cpu_bench() = GROUP == "All" || GROUP == "CPU"
cuda_bench() = (GROUP == "All" || GROUP == "CUDA") && LuxCUDA.functional()

const ALL_SUITES = begin
    cpu_suite = ("CPU", Flux.cpu, Array)
    cuda_suite = ("CUDA", Flux.gpu, CuArray)

    suites = []
    cpu_bench() && push!(suites, cpu_suite)
    cuda_bench() && push!(suites, cuda_suite)
    suites
end

include("src/groupnorm.jl")
