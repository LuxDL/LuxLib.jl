module BenchmarkPlotting

using AlgebraOfGraphics, CairoMakie, DataFrames, Makie, MakiePublication

function bar_plot(xlabels, datasets)
end

end

using JSON

data = JSON.parse(open(joinpath(@__DIR__, "results.json"), "r"))

data
