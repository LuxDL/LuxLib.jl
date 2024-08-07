using ReTestItems, Pkg, LuxTestUtils, Preferences
using InteractiveUtils, Hwloc

@info sprint(io -> versioninfo(io; verbose=true))

Preferences.set_preferences!("LuxLib", "instability_check" => "error")

const BACKEND_GROUP = lowercase(get(ENV, "BACKEND_GROUP", "all"))
const EXTRA_PKGS = String[]

(BACKEND_GROUP == "all" || BACKEND_GROUP == "cuda") && push!(EXTRA_PKGS, "LuxCUDA")
(BACKEND_GROUP == "all" || BACKEND_GROUP == "amdgpu") && push!(EXTRA_PKGS, "AMDGPU")

if !isempty(EXTRA_PKGS)
    @info "Installing Extra Packages for testing" EXTRA_PKGS=EXTRA_PKGS
    Pkg.add(EXTRA_PKGS)
    Pkg.update()
    Base.retry_load_extensions()
    Pkg.instantiate()
end

const LUXLIB_TEST_GROUP = get(ENV, "LUXLIB_TEST_GROUP", "all")
const RETESTITEMS_NWORKERS = parse(
    Int, get(ENV, "RETESTITEMS_NWORKERS", string(min(Hwloc.num_physical_cores(), 16))))
const RETESTITEMS_NWORKER_THREADS = parse(Int,
    get(ENV, "RETESTITEMS_NWORKER_THREADS",
        string(max(Hwloc.num_virtual_cores() ÷ RETESTITEMS_NWORKERS, 1))))

@info "Running tests for group: $LUXLIB_TEST_GROUP with $RETESTITEMS_NWORKERS workers"

using LuxLib

if BACKEND_GROUP ∈ ("all", "cuda", "amdgpu")
    if LUXLIB_TEST_GROUP == "all"
        ReTestItems.runtests(
            LuxLib; name=r"^(?!.*(Group Norm: Group \d+|Instance Norm: Group \d+)).*$",
            nworkers=RETESTITEMS_NWORKERS,
            nworker_threads=RETESTITEMS_NWORKER_THREADS, testitem_timeout=3600)
        # See https://github.com/JuliaTesting/ReTestItems.jl/issues/164
        ReTestItems.runtests(LuxLib; tags=[:group_norm], nworkers=0,
            nworker_threads=RETESTITEMS_NWORKER_THREADS, testitem_timeout=3600)
        ReTestItems.runtests(LuxLib; tags=[:instance_norm], nworkers=0,
            nworker_threads=RETESTITEMS_NWORKER_THREADS, testitem_timeout=3600)
    elseif LUXLIB_TEST_GROUP ∉ ("group_norm", "instance_norm")
        ReTestItems.runtests(
            LuxLib; tags=[Symbol(LUXLIB_TEST_GROUP)], nworkers=RETESTITEMS_NWORKERS,
            nworker_threads=RETESTITEMS_NWORKER_THREADS, testitem_timeout=3600)
    else
        # See https://github.com/JuliaTesting/ReTestItems.jl/issues/164
        ReTestItems.runtests(LuxLib; tags=[Symbol(LUXLIB_TEST_GROUP)], nworkers=0,
            nworker_threads=RETESTITEMS_NWORKER_THREADS, testitem_timeout=3600)
    end
else
    ReTestItems.runtests(
        LuxLib; tags=(LUXLIB_TEST_GROUP == "all" ? nothing : [Symbol(LUXLIB_TEST_GROUP)]),
        nworkers=RETESTITEMS_NWORKERS,
        nworker_threads=RETESTITEMS_NWORKER_THREADS, testitem_timeout=3600)
end
