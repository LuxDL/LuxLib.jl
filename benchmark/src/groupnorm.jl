function create_benchmark_groupnorm!(suite)
    group = addgroup!(suite, "groupnorm", ["normalize"])

    for (tag, dev, aType) in ALL_SUITES
        flux_group = addgroup!(group, "Flux $tag")
        luxlib_group = addgroup!(group, "LuxLib $tag")

        for sz in (8, 16, 32, 128), grps in (2 .^ (1:3)), bsz in (1, 8, 32)
            _tag = "size=$sz, groups=$grps, batch_size=$bsz"

            x = randn(rng, Float32, sz, sz, 32, bsz)
            x = x |> aType

            # Flux
            gn = Flux.GroupNorm(32, grps; track_stats=false)
            gn = gn |> dev

            flux_group[_tag] = create_benchmarkable(tag, gn, x)

            # LuxLib
            fn = x -> groupnorm(x, gn.γ, gn.β; groups=grps, epsilon=gn.ϵ)
            luxlib_group[_tag] = create_benchmarkable(tag, fn, x)
        end
    end

    return group
end

create_benchmark_groupnorm!(SUITE)
