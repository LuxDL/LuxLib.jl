using Pkg
Pkg.instantiate()

using LuxLib
using BenchmarkTools, PkgBenchmark
using BenchmarkTools: Trial, TrialEstimate, Parameters
import JSON: lower, json
using Dates
using HTTP: put

include("helpers.jl")

context = provide_context(haskey(ENV, "BUILDKITE_COMMIT") ? Buildkite() : Dummy())
results = benchmarkpkg(LuxLib)
(; benchmarkgroup, benchmarkconfig) = results
reconstructed = Dict("context" => context, "suite" => benchmarkgroup,
                     "config" => benchmarkconfig)

# FIXME
# put("https://benchmark-data.tansongchen.workers.dev/LuxLib.jl"; body=json(reconstructed))
