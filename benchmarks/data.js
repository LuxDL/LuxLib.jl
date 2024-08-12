window.BENCHMARK_DATA = {
  "lastUpdate": 1723481988509,
  "repoUrl": "https://github.com/LuxDL/LuxLib.jl",
  "entries": {
    "LuxLib Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avik.pal.2017@gmail.com",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "41a2abc28ebe78de548cdb00634f253d64f69ab1",
          "message": "perf: try reclaiming memory",
          "timestamp": "2024-08-12T07:32:24-07:00",
          "tree_id": "ad74502dfcb52ba5c7d1398d184be99b9a1a4d14",
          "url": "https://github.com/LuxDL/LuxLib.jl/commit/41a2abc28ebe78de548cdb00634f253d64f69ab1"
        },
        "date": 1723481987856,
        "tool": "julia",
        "benches": [
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 6042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 5375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 13680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 13840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 128525,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11984\nallocs=467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 2495993,
            "unit": "ns",
            "extra": "gctime=0\nmemory=175480\nallocs=1669\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 815542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=38368\nallocs=1253\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 409854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17360\nallocs=532\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 9792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15136\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 9583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15136\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 21280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15136\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 21200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15136\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 542449,
            "unit": "ns",
            "extra": "gctime=0\nmemory=73824\nallocs=2886\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 16702365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1105560\nallocs=9943\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 2717083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=228368\nallocs=7672\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 680867,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54384\nallocs=1187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 15500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16832\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 15833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16832\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 36960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16704\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 29600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16704\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/GPU/CUDA",
            "value": 22013,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/GPU/oneAPI",
            "value": 1351276.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/GPU/Metal",
            "value": 210479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7000\nallocs=234\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/forward/GPU/AMDGPU",
            "value": 30290,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1760\nallocs=62\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 14750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50496\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 14833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50496\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 38480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50112\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 39400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50112\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/GPU/CUDA",
            "value": 145550,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16840\nallocs=631\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/GPU/oneAPI",
            "value": 8946117,
            "unit": "ns",
            "extra": "gctime=0\nmemory=279320\nallocs=2717\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/GPU/Metal",
            "value": 1482417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55432\nallocs=1888\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=relu)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 150311.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16360\nallocs=386\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 83958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 81354.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 114361,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 285681,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 37236,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 561842,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46584\nallocs=558\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1045125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13808\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 74731,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6960\nallocs=200\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1233333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8404800\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1215291.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8404800\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 3935613,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8404800\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 4806815,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8404800\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 222805,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21240\nallocs=777\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 8449922,
            "unit": "ns",
            "extra": "gctime=0\nmemory=869120\nallocs=8370\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 5664208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=210176\nallocs=6793\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1550955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=86152\nallocs=2140\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 149229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 150041.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 371122,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 372661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 165979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17904\nallocs=612\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 7912374,
            "unit": "ns",
            "extra": "gctime=0\nmemory=260008\nallocs=2473\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1490875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56448\nallocs=1813\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 194682,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18064\nallocs=381\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1109125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8400368\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1112229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8400368\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 4790055,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8400368\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 4595535,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8400368\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 684314.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=83920\nallocs=3063\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 33036831.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1260192\nallocs=11324\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 5960541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=284360\nallocs=8853\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1065101,
            "unit": "ns",
            "extra": "gctime=0\nmemory=74288\nallocs=1521\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 4500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 4334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 12520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 11500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 89438.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13104\nallocs=537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 5336932,
            "unit": "ns",
            "extra": "gctime=0\nmemory=176792\nallocs=1671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 698334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36784\nallocs=1265\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 70141,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10864\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 8667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 8791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 16300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 16960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 587772.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75968\nallocs=3041\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 34162092,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1180488\nallocs=10712\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 5581938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=238776\nallocs=8144\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 391574,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56496\nallocs=1234\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 21209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 21396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 43660,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 53640.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 67456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12544\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 2941770,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130312\nallocs=1357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 1352666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34240\nallocs=1047\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 72860,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16304\nallocs=312\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 121250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=945056\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 126333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=945056\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 323721,
            "unit": "ns",
            "extra": "gctime=0\nmemory=945056\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 336722,
            "unit": "ns",
            "extra": "gctime=0\nmemory=945056\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 350590,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64176\nallocs=1466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 13965783.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=650824\nallocs=5943\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 5713459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=171584\nallocs=4734\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 477365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68480\nallocs=1171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 1667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 1708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 29880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 5580,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/GPU/CUDA",
            "value": 20459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/GPU/oneAPI",
            "value": 1122045.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/GPU/Metal",
            "value": 287584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6720\nallocs=232\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/forward/GPU/AMDGPU",
            "value": 34431,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1920\nallocs=72\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 2167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 2250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 6720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 4680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/GPU/CUDA",
            "value": 124823.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14616\nallocs=562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/GPU/oneAPI",
            "value": 9063567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=241744\nallocs=2311\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/GPU/Metal",
            "value": 1513541.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53520\nallocs=1851\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=relu)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 137721,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13352\nallocs=313\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 16583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 16542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 39600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 33800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 24309,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2800\nallocs=95\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 1238174,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48360\nallocs=569\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 407500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16080\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 49610,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6560\nallocs=165\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 143895.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196368\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 138708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196368\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 3449571,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196368\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 367401,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196368\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 192843.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19384\nallocs=711\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 32488501.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1034112\nallocs=10130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 8815084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=247456\nallocs=8089\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 652596,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78984\nallocs=1891\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 5708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 5833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 30001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 27880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/GPU/CUDA",
            "value": 23996,
            "unit": "ns",
            "extra": "gctime=0\nmemory=960\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/GPU/oneAPI",
            "value": 1984397,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32136\nallocs=279\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/GPU/Metal",
            "value": 221500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7224\nallocs=264\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/forward/GPU/AMDGPU",
            "value": 52050,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2016\nallocs=81\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 19584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71968\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 20334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71968\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 91281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71328\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 50360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71328\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/GPU/CUDA",
            "value": 195628.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15672\nallocs=581\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/GPU/oneAPI",
            "value": 11409972,
            "unit": "ns",
            "extra": "gctime=0\nmemory=245040\nallocs=2361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/GPU/Metal",
            "value": 926042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48168\nallocs=1651\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=relu)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 181187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13832\nallocs=350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 418125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 916021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 2741969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 2683888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/GPU/CUDA",
            "value": 113448,
            "unit": "ns",
            "extra": "gctime=0\nmemory=960\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/GPU/oneAPI",
            "value": 405413,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32216\nallocs=284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/GPU/Metal",
            "value": 437291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7248\nallocs=265\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/forward/GPU/AMDGPU",
            "value": 249453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8256\nallocs=329\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 1647687.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2360720\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 1807916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2360720\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 91996366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2360720\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 15076467,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2360720\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/GPU/CUDA",
            "value": 242274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18568\nallocs=713\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/GPU/oneAPI",
            "value": 9731240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=249664\nallocs=2442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/GPU/Metal",
            "value": 1879125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57880\nallocs=1976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=gelu)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 758327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16344\nallocs=494\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 7208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5408\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 6625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5408\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 15940.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5280\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 13640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5280\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 92967.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11984\nallocs=467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 5662274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=175480\nallocs=1669\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 750562.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36056\nallocs=1236\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 60650,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10944\nallocs=273\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 12291.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51120\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 11791.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51120\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 26120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49840\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 25880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49840\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 647859.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72848\nallocs=2885\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 36790696,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1140992\nallocs=10323\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 5335854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=226880\nallocs=7578\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 417034,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54432\nallocs=1205\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 1250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 1250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 4080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 3640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/GPU/CUDA",
            "value": 23623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/GPU/oneAPI",
            "value": 2232922,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34200\nallocs=309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/GPU/Metal",
            "value": 222021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7536\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/forward/GPU/AMDGPU",
            "value": 51631,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2304\nallocs=96\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 3395.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 3541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 11480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 9800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/GPU/CUDA",
            "value": 226830,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=578\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/GPU/oneAPI",
            "value": 11126078,
            "unit": "ns",
            "extra": "gctime=0\nmemory=249664\nallocs=2448\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/GPU/Metal",
            "value": 1934625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57680\nallocs=2043\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=relu)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 178946.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14616\nallocs=356\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 22541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7344\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 21479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7344\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 30160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7216\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 29080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7216\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 101199,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12496\nallocs=308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 3262181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130808\nallocs=1423\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 776375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35272\nallocs=1135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 75411,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16048\nallocs=346\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 34458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71072\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 37417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71072\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 15950650,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69920\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 104160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69920\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 596114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=73576\nallocs=1707\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 16961153,
            "unit": "ns",
            "extra": "gctime=0\nmemory=768744\nallocs=7259\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 4323583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=189368\nallocs=5375\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 390024,
            "unit": "ns",
            "extra": "gctime=0\nmemory=77784\nallocs=1295\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 2834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 3000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 8120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 8400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 36059,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4848\nallocs=166\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 1213009,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46520\nallocs=557\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 378187.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13704\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 48161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=181\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 19771.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45312\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 20562.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45312\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 47480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 47600.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 252612,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20192\nallocs=724\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 18003969.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=666960\nallocs=6483\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 4417875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=150040\nallocs=5023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 376524,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49360\nallocs=1247\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 379333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 377541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 313741,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 348001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/GPU/CUDA",
            "value": 112570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1168\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/GPU/oneAPI",
            "value": 329609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3888\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/GPU/Metal",
            "value": 444667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2576\nallocs=97\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/forward/GPU/AMDGPU",
            "value": 78741,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1920\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 1209958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1836192\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 1205584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1836192\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 14164064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1836192\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 14719086,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1836192\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/GPU/CUDA",
            "value": 207642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13808\nallocs=502\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/GPU/oneAPI",
            "value": 9629552,
            "unit": "ns",
            "extra": "gctime=0\nmemory=184312\nallocs=1893\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/GPU/Metal",
            "value": 1526937.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43872\nallocs=1526\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=identity)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 323224,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12816\nallocs=372\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 7417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13728\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 7104.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13728\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 17720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13344\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 19420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13344\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 157104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13104\nallocs=537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 5794378,
            "unit": "ns",
            "extra": "gctime=0\nmemory=176792\nallocs=1671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 483125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37432\nallocs=1259\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 72771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11008\nallocs=277\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 12271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=89120\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 15875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=89120\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 34340.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=86688\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 35720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=86688\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 1032975,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78192\nallocs=3110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 41713671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1218064\nallocs=11118\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 5843187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=243624\nallocs=8101\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 436500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59456\nallocs=1304\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 28750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 26667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 56240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 57120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 231774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17904\nallocs=612\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 7995132.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=259912\nallocs=2467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 977250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48472\nallocs=1542\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 117251.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18368\nallocs=400\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 152375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1060336\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 150458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1060336\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 312021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1060336\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 316781,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1060336\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 1202232,
            "unit": "ns",
            "extra": "gctime=0\nmemory=83920\nallocs=3063\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 42385014,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1259888\nallocs=11305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 5879167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=258000\nallocs=7963\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 597046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=70272\nallocs=1435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 78500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 80500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 157120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 159160.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 238177,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 7461753.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262168\nallocs=2474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 526833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50264\nallocs=1574\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 129521.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18064\nallocs=381\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 302791.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508432\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 287208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508432\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 644122,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508176\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 626882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508176\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 1222440.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=90592\nallocs=3393\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 41724661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1405504\nallocs=12623\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 6201334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=290472\nallocs=8950\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 698392,
            "unit": "ns",
            "extra": "gctime=0\nmemory=76448\nallocs=1596\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 16375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13728\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 17625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13728\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 38040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13344\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 34960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13344\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 164879,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13104\nallocs=537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 5728759,
            "unit": "ns",
            "extra": "gctime=0\nmemory=176792\nallocs=1671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 474208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37432\nallocs=1259\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 237612,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17280\nallocs=531\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 28771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=89120\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 28145.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=89120\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 74360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=86688\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 73921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=86688\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 1037823,
            "unit": "ns",
            "extra": "gctime=0\nmemory=79248\nallocs=3154\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 40835592,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1218064\nallocs=11118\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 5933000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=243168\nallocs=8090\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 704467,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59744\nallocs=1300\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 21021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7344\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 22416.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7344\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 32560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7216\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 30220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7216\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 138661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12496\nallocs=308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 3479071,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130808\nallocs=1423\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 701500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35272\nallocs=1135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 242802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18336\nallocs=489\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 36646,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62496\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 35667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62496\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 11985977,
            "unit": "ns",
            "extra": "gctime=0\nmemory=61216\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 87200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=61216\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 748419,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62104\nallocs=1758\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 21621558,
            "unit": "ns",
            "extra": "gctime=0\nmemory=760440\nallocs=7294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 5298166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=178560\nallocs=5400\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 688407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65672\nallocs=1328\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 74645.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 84041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 9290709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 189481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 122002.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12544\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 3401229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130312\nallocs=1357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 1359458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34240\nallocs=1047\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 238502,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19584\nallocs=517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 245958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196416\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 248249.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196416\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 482482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196416\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 1103343,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1196416\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 555568,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56264\nallocs=1599\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 19559466,
            "unit": "ns",
            "extra": "gctime=0\nmemory=677656\nallocs=6248\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 6077708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=170136\nallocs=4980\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 719377,
            "unit": "ns",
            "extra": "gctime=0\nmemory=60632\nallocs=1301\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 6875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13728\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 7521,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13728\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 17280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13344\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 15560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13344\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 161919,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13104\nallocs=537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 5661560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=176792\nallocs=1671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 694125.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37432\nallocs=1259\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 59570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10928\nallocs=272\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 15271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80352\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 15834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80352\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 34360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78176\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 33040.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78176\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 1014297,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75120\nallocs=2979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 40073228,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1153424\nallocs=10570\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 5410417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=230576\nallocs=7679\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 408164,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57360\nallocs=1246\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/forward/CPU/2 thread(s)",
            "value": 6150250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4194368\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/forward/CPU/4 thread(s)",
            "value": 6376917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4194368\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/forward/CPU/8 thread(s)",
            "value": 21523786,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4194368\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/forward/CPU/1 thread(s)",
            "value": 59372101,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4194368\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/forward/GPU/CUDA",
            "value": 349361,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/forward/GPU/AMDGPU",
            "value": 375504,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4400\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/zygote/CPU/2 thread(s)",
            "value": 19072875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16778320\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/zygote/CPU/4 thread(s)",
            "value": 19992042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16778320\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/zygote/CPU/8 thread(s)",
            "value": 49256671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16778320\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/zygote/CPU/1 thread(s)",
            "value": 173679650,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16778128\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/zygote/GPU/CUDA",
            "value": 1051318,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11824\nallocs=431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=4)/zygote/GPU/AMDGPU",
            "value": 1279157.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21664\nallocs=586\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 1500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 1583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 5720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 5200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1296\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/GPU/CUDA",
            "value": 23745,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/GPU/oneAPI",
            "value": 2130449,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34200\nallocs=309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/GPU/Metal",
            "value": 224750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7536\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/forward/GPU/AMDGPU",
            "value": 215383,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5264\nallocs=281\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 5459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7040\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 6917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7040\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 17681,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7040\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 19360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7040\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/GPU/CUDA",
            "value": 293914,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17960\nallocs=683\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/GPU/oneAPI",
            "value": 11105931,
            "unit": "ns",
            "extra": "gctime=0\nmemory=280072\nallocs=2692\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/GPU/Metal",
            "value": 2103729,
            "unit": "ns",
            "extra": "gctime=0\nmemory=63392\nallocs=2241\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=gelu)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 643406,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17784\nallocs=508\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 8854.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 9187.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 25160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 21080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 135653,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12368\nallocs=300\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 3490594,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130792\nallocs=1422\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 783375.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35024\nallocs=1135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 67981,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=339\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 14125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37104\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 16416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37104\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 34040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37104\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 31320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37104\nallocs=163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 718608,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71096\nallocs=1622\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 22350674,
            "unit": "ns",
            "extra": "gctime=0\nmemory=731136\nallocs=6851\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 4639000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=186832\nallocs=5396\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 374904,
            "unit": "ns",
            "extra": "gctime=0\nmemory=74744\nallocs=1219\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 1920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 1480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/GPU/CUDA",
            "value": 22734,
            "unit": "ns",
            "extra": "gctime=0\nmemory=960\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/GPU/oneAPI",
            "value": 2006324,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32136\nallocs=279\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/GPU/Metal",
            "value": 218542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6944\nallocs=262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/forward/GPU/AMDGPU",
            "value": 53740,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 3541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 4084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 14121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 10440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/GPU/CUDA",
            "value": 211149,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13448\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/GPU/oneAPI",
            "value": 9426911.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=207448\nallocs=1954\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/GPU/Metal",
            "value": 1554333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45504\nallocs=1616\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=relu)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 161851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10808\nallocs=276\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 25292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7088\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 23916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7088\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 39880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6960\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 34980.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6960\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 137026,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11664\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 3333135,
            "unit": "ns",
            "extra": "gctime=0\nmemory=125560\nallocs=1353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 851084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32552\nallocs=1039\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 242502,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18464\nallocs=522\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 28688,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53728\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 29917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53728\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 65560.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52576\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 75800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52576\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 642908,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54152\nallocs=1599\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 20739898,
            "unit": "ns",
            "extra": "gctime=0\nmemory=664520\nallocs=6275\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 4580688,
            "unit": "ns",
            "extra": "gctime=0\nmemory=151928\nallocs=4613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 666396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56280\nallocs=1197\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 15584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16848\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 16125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16848\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 42920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16720\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 40920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16720\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/GPU/CUDA",
            "value": 24403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/GPU/oneAPI",
            "value": 2239291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34200\nallocs=309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/GPU/Metal",
            "value": 220292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7816\nallocs=280\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/forward/GPU/AMDGPU",
            "value": 54420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2032\nallocs=79\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 28791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71536\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 30250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71536\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 66120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=70896\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 66320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=70896\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/GPU/CUDA",
            "value": 351180.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17816\nallocs=647\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/GPU/oneAPI",
            "value": 12500857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=287256\nallocs=2855\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/GPU/Metal",
            "value": 1109000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59712\nallocs=2061\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=relu)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 218697,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17688\nallocs=433\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 3666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 3833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 10680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 12320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 36095,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4848\nallocs=166\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 1186772.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46520\nallocs=557\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 277083.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13704\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 205532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9216\nallocs=344\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 22854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54016\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 25208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54016\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 60040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52864\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 69281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52864\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 303508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23592\nallocs=890\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 21869482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=704496\nallocs=6821\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 5471958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=159344\nallocs=5287\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 699607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52104\nallocs=1365\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/forward/CPU/2 thread(s)",
            "value": 71875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=524352\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/forward/CPU/4 thread(s)",
            "value": 65312.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=524352\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/forward/CPU/8 thread(s)",
            "value": 82921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=524352\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/forward/CPU/1 thread(s)",
            "value": 152520.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=524352\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/forward/GPU/CUDA",
            "value": 66716.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/forward/GPU/AMDGPU",
            "value": 5940139.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=271536\nallocs=8756\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/zygote/CPU/2 thread(s)",
            "value": 197875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098256\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/zygote/CPU/4 thread(s)",
            "value": 157458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098256\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/zygote/CPU/8 thread(s)",
            "value": 276920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098256\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/zygote/CPU/1 thread(s)",
            "value": 634662,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098064\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/zygote/GPU/CUDA",
            "value": 231224.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=512)/zygote/GPU/AMDGPU",
            "value": 17655859,
            "unit": "ns",
            "extra": "gctime=0\nmemory=826624\nallocs=26482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 170062.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 138770.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 303081,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 387381,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 190048.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12560\nallocs=283\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 5708424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=209944\nallocs=2177\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 2042958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51008\nallocs=1611\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 197777,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23552\nallocs=471\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1197791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7367584\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1178541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7367584\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 2271007,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7367584\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 2760248,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7367584\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 573274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64208\nallocs=1468\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 26217931,
            "unit": "ns",
            "extra": "gctime=0\nmemory=808568\nallocs=7590\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 8813083.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=189312\nallocs=5344\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1087471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=86672\nallocs=1601\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 1760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 1880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/GPU/CUDA",
            "value": 22106,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/GPU/oneAPI",
            "value": 2266612.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31944\nallocs=279\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/GPU/Metal",
            "value": 319500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6912\nallocs=262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/forward/GPU/AMDGPU",
            "value": 45390,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1920\nallocs=75\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 3917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4720\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 5708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4720\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 11320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4720\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 11000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4720\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/GPU/CUDA",
            "value": 267874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13200\nallocs=472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/GPU/oneAPI",
            "value": 9745829,
            "unit": "ns",
            "extra": "gctime=0\nmemory=214720\nallocs=2143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/GPU/Metal",
            "value": 1041125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51240\nallocs=1829\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=true, act=identity)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 189232,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13248\nallocs=323\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 9209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 10270.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 27600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 24420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 135566,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11536\nallocs=274\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 3522348,
            "unit": "ns",
            "extra": "gctime=0\nmemory=125544\nallocs=1352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 856771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32304\nallocs=1039\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 238232.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21792\nallocs=592\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 9812.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19984\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 11292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19984\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 24080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19984\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 23600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19984\nallocs=106\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 578408.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51672\nallocs=1514\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 20574630,
            "unit": "ns",
            "extra": "gctime=0\nmemory=626912\nallocs=5867\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 4280292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=149312\nallocs=4629\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 639327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53880\nallocs=1162\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 101166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 93042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 132241,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 263740.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 40793,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3536\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 1344137.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48376\nallocs=570\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1168833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16080\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 77271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7072\nallocs=197\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1226166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8406496\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1240542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8406496\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 1790326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8406496\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 2443808,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8406496\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 238887.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22144\nallocs=649\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 32570854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1001424\nallocs=9882\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 10958250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=240816\nallocs=7886\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1026585,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81728\nallocs=1960\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 426687.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 419000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 696082,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 694203,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 242511,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 7706426.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262168\nallocs=2474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 527291.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50264\nallocs=1574\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 286723,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20448\nallocs=530\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 756334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508432\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 744125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508432\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 1748005.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508176\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 1742605,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2508176\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 1143103,
            "unit": "ns",
            "extra": "gctime=0\nmemory=91648\nallocs=3437\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 44039352.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1405504\nallocs=12623\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 6292250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=290712\nallocs=8966\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 929299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=76080\nallocs=1555\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 3441458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 3386437.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 5472016,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 5449217,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 173729,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 8279160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262264\nallocs=2480\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1369125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58464\nallocs=1854\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 411259.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21616\nallocs=603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 6185208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 6209417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 13284561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 13282600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 1076548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=91648\nallocs=3437\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 58723214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1405808\nallocs=12642\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 7194584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=316048\nallocs=9826\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1568715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80016\nallocs=1654\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 568042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 1058104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 548561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 1013983.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/GPU/CUDA",
            "value": 46558,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/GPU/oneAPI",
            "value": 844058,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34280\nallocs=314\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/GPU/Metal",
            "value": 484292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7856\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/forward/GPU/AMDGPU",
            "value": 249852,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8336\nallocs=331\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 1643583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2363344\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 1800291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2363344\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 792342.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2363216\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 1887926,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2363216\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/GPU/CUDA",
            "value": 274802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20504\nallocs=772\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/GPU/oneAPI",
            "value": 13186295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=318000\nallocs=3120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/GPU/Metal",
            "value": 2170125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=73816\nallocs=2544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=gelu)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 788803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25000\nallocs=702\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 83958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 81417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 106920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 271360.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 28757,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2800\nallocs=95\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 1441029,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48376\nallocs=570\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1152167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16080\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 61880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7088\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1335042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9455136\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1318666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9455136\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 1897646,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9455136\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 2871889,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9455136\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 243543,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19384\nallocs=711\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 37712918,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1034544\nallocs=10157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 11071958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=247936\nallocs=8105\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1213133,
            "unit": "ns",
            "extra": "gctime=0\nmemory=85368\nallocs=2143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 101792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 93167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 130000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 269100.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 50587,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=152\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 812314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46584\nallocs=558\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1104416.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13808\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 78791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7152\nallocs=212\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1146542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7356160\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1156750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7356160\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 1669185,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7356160\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 2094327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7356160\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 249980.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19648\nallocs=695\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 17928715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=836000\nallocs=8095\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 9700104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=201448\nallocs=6534\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1052260,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80000\nallocs=1800\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 1600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 1560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 35286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4848\nallocs=166\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 1209220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46488\nallocs=555\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 277250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13184\nallocs=444\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 47891,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6544\nallocs=177\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 8792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17872\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 9291.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17872\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 19640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17872\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 18760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17872\nallocs=109\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 216278.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17968\nallocs=655\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 19470652,
            "unit": "ns",
            "extra": "gctime=0\nmemory=629320\nallocs=6073\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 4595375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147120\nallocs=5025\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 368883.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46176\nallocs=1163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 1680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 1320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/GPU/CUDA",
            "value": 32098,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1008\nallocs=38\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/GPU/oneAPI",
            "value": 1195061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3808\nallocs=68\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/GPU/Metal",
            "value": 253542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2336\nallocs=98\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/forward/GPU/AMDGPU",
            "value": 39380,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1248\nallocs=69\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 3167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4336\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 3333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4336\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 10640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4336\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 10520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4336\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/GPU/CUDA",
            "value": 200178.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11104\nallocs=403\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/GPU/oneAPI",
            "value": 7531562,
            "unit": "ns",
            "extra": "gctime=0\nmemory=146432\nallocs=1468\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/GPU/Metal",
            "value": 1034666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34440\nallocs=1237\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=identity)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 153952,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9040\nallocs=251\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 296146,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 252584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 584442,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 1222084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 142483,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13392\nallocs=309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 6060678,
            "unit": "ns",
            "extra": "gctime=0\nmemory=215192\nallocs=2247\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 2924625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53728\nallocs=1707\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 326983,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26992\nallocs=661\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 2251583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10507984\nallocs=205\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1967125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10508720\nallocs=231\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 4447934,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10512400\nallocs=361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 8844727,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10507248\nallocs=179\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 778641,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69016\nallocs=1898\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 33394163,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1009352\nallocs=9736\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 10671958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=230552\nallocs=6931\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1489094,
            "unit": "ns",
            "extra": "gctime=0\nmemory=99608\nallocs=2130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/forward/CPU/2 thread(s)",
            "value": 49910208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/forward/CPU/4 thread(s)",
            "value": 35537458.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/forward/CPU/8 thread(s)",
            "value": 72162019.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/forward/CPU/1 thread(s)",
            "value": 466312171,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/forward/GPU/CUDA",
            "value": 1624676,
            "unit": "ns",
            "extra": "gctime=0\nmemory=528\nallocs=24\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/forward/GPU/AMDGPU",
            "value": 1938299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24400\nallocs=858\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/zygote/CPU/2 thread(s)",
            "value": 154468895.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218832\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/zygote/CPU/4 thread(s)",
            "value": 112446396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218832\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/zygote/CPU/8 thread(s)",
            "value": 196276657.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218832\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/zygote/CPU/1 thread(s)",
            "value": 1378855731,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218640\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/zygote/GPU/CUDA",
            "value": 6472045,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11840\nallocs=432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=32)/zygote/GPU/AMDGPU",
            "value": 8582795,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72320\nallocs=2264\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 20625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16832\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 18812.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16832\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 50120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16704\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 57080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16704\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/GPU/CUDA",
            "value": 20564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/GPU/oneAPI",
            "value": 1115154.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/GPU/Metal",
            "value": 216187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7016\nallocs=235\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/forward/GPU/AMDGPU",
            "value": 27481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1712\nallocs=59\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 18917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50496\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 18437.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50496\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 47360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50112\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 61880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50112\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/GPU/CUDA",
            "value": 295344.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16840\nallocs=631\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/GPU/oneAPI",
            "value": 9902962,
            "unit": "ns",
            "extra": "gctime=0\nmemory=279320\nallocs=2717\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/GPU/Metal",
            "value": 1478625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55432\nallocs=1888\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=tanh)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 154101,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16296\nallocs=382\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 8500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 8895.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 25680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 22040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 138856.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12368\nallocs=300\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 3661834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130792\nallocs=1422\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 764875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35024\nallocs=1135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 242423,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18880\nallocs=523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 12208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24800\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 12875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24800\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 28860.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24800\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 28760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24800\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 696928.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59624\nallocs=1673\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 23096692,
            "unit": "ns",
            "extra": "gctime=0\nmemory=722832\nallocs=6886\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 4610042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=175760\nallocs=5420\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 670731.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62552\nallocs=1248\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 24688,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7088\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 23021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7088\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 36200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6960\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 31600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6960\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 136237,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11664\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 3450746,
            "unit": "ns",
            "extra": "gctime=0\nmemory=125560\nallocs=1353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 859334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32552\nallocs=1039\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 77861,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15504\nallocs=337\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 25125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49328\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 26667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49328\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 53521,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48304\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 50240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48304\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 645490,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52312\nallocs=1515\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 19893473,
            "unit": "ns",
            "extra": "gctime=0\nmemory=659512\nallocs=6207\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 4456583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=149520\nallocs=4561\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 351863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54824\nallocs=1116\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 2920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 2120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 34901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4848\nallocs=166\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 1212349,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46488\nallocs=555\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 279500.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13184\nallocs=444\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 209192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12704\nallocs=424\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 10125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 11020.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 23960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 22441,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=111\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 234365.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21368\nallocs=821\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 22768624.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=666856\nallocs=6411\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 4998667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=155624\nallocs=5294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 671046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49416\nallocs=1303\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 17937.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16832\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 17374.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16832\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 46500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16704\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 57320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16704\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/GPU/CUDA",
            "value": 21392,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/GPU/oneAPI",
            "value": 1129113,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/GPU/Metal",
            "value": 201166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7176\nallocs=236\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/forward/GPU/AMDGPU",
            "value": 191462,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8272\nallocs=327\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 28208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67136\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 24083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67136\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 69281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=66624\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 124080.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=66624\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/GPU/CUDA",
            "value": 311625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19208\nallocs=736\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/GPU/oneAPI",
            "value": 11005623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=311984\nallocs=2991\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/GPU/Metal",
            "value": 1668479.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62032\nallocs=2103\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(32, act=gelu)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 605526,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19976\nallocs=563\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 278666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 255500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 706482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 1467205,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 194624,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12560\nallocs=283\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 5830112.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=209944\nallocs=2177\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 2094478.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51008\nallocs=1611\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 325944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26944\nallocs=683\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 2189666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453952\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1904458.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453952\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 4246413,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453952\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 8804027,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453952\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 585742,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56296\nallocs=1601\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 27805141,
            "unit": "ns",
            "extra": "gctime=0\nmemory=835400\nallocs=7895\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 9064833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=188024\nallocs=5591\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1383683.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80888\nallocs=1839\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/forward/CPU/2 thread(s)",
            "value": 833282229,
            "unit": "ns",
            "extra": "gctime=51278187\nmemory=536870976\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/forward/CPU/4 thread(s)",
            "value": 544094875,
            "unit": "ns",
            "extra": "gctime=447542\nmemory=536870976\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/forward/CPU/8 thread(s)",
            "value": 1130093792,
            "unit": "ns",
            "extra": "gctime=1163764\nmemory=536870976\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/forward/CPU/1 thread(s)",
            "value": 8384273574,
            "unit": "ns",
            "extra": "gctime=1191204\nmemory=536870976\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/forward/GPU/CUDA",
            "value": 22743497,
            "unit": "ns",
            "extra": "gctime=0\nmemory=528\nallocs=24\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/forward/GPU/AMDGPU",
            "value": 30224259,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278000\nallocs=9018\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/zygote/CPU/2 thread(s)",
            "value": 2999418833,
            "unit": "ns",
            "extra": "gctime=43000917\nmemory=2147484752\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/zygote/CPU/4 thread(s)",
            "value": 1786994625,
            "unit": "ns",
            "extra": "gctime=31714167\nmemory=2147484752\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/zygote/CPU/8 thread(s)",
            "value": 3499107261,
            "unit": "ns",
            "extra": "gctime=128356390\nmemory=2147484752\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/zygote/CPU/1 thread(s)",
            "value": 23704124401,
            "unit": "ns",
            "extra": "gctime=123785415\nmemory=2147484560\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/zygote/GPU/CUDA",
            "value": 337753335.5,
            "unit": "ns",
            "extra": "gctime=267934202\nmemory=12048\nallocs=437\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=512)/zygote/GPU/AMDGPU",
            "value": 206419625,
            "unit": "ns",
            "extra": "gctime=29245260\nmemory=836528\nallocs=26814\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 82375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 77833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 159200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 157320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=394480\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 239321.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 7804761,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262168\nallocs=2474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 527292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50264\nallocs=1574\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 109581,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18000\nallocs=377\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 292979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2246000\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 286750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2246000\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 594282,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2245744\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 569660.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2245744\nallocs=143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 1130803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=87408\nallocs=3262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 44008565,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1339888\nallocs=12085\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 6143417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=275656\nallocs=8522\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 643197,
            "unit": "ns",
            "extra": "gctime=0\nmemory=73808\nallocs=1515\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/forward/CPU/2 thread(s)",
            "value": 199657229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134217792\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/forward/CPU/4 thread(s)",
            "value": 139191875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134217792\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/forward/CPU/8 thread(s)",
            "value": 276991640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134217792\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/forward/CPU/1 thread(s)",
            "value": 1971130514,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134217792\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/forward/GPU/CUDA",
            "value": 5844154,
            "unit": "ns",
            "extra": "gctime=0\nmemory=528\nallocs=24\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/forward/GPU/AMDGPU",
            "value": 7802492,
            "unit": "ns",
            "extra": "gctime=0\nmemory=70336\nallocs=2333\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/zygote/CPU/2 thread(s)",
            "value": 619172375,
            "unit": "ns",
            "extra": "gctime=2639687.5\nmemory=536872016\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/zygote/CPU/4 thread(s)",
            "value": 440896292,
            "unit": "ns",
            "extra": "gctime=2683792\nmemory=536872016\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/zygote/CPU/8 thread(s)",
            "value": 874624032.5,
            "unit": "ns",
            "extra": "gctime=28167205.5\nmemory=536872016\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/zygote/CPU/1 thread(s)",
            "value": 5707634671,
            "unit": "ns",
            "extra": "gctime=28557802\nmemory=536871824\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/zygote/GPU/CUDA",
            "value": 26596544.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11840\nallocs=432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(512, Bsize=128)/zygote/GPU/AMDGPU",
            "value": 43079868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=227888\nallocs=7230\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 16000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 16000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 33481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 32680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 28865.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3536\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 1201024,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48360\nallocs=569\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 600604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16080\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 48160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6272\nallocs=147\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 134270.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 138666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 317461,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 335040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 241740,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22144\nallocs=649\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 31680208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1000992\nallocs=9855\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 8933895.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=240176\nallocs=7869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 543415,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75760\nallocs=1734\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 9125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 10208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 28200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 25000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 134784.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11536\nallocs=274\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 3411068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=125544\nallocs=1352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 828895.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32304\nallocs=1039\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 69141,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15504\nallocs=337\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 9437.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19312\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 10125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19312\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 24600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19312\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 21480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19312\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 574950.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49832\nallocs=1430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 18332460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=621904\nallocs=5799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 4242271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147104\nallocs=4574\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 324994,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51496\nallocs=1023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 2792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 2875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 8720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 8240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 26975,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3808\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 1225614.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48312\nallocs=569\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 308292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15976\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 48821,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6832\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 22979.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50640\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 22770.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50640\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 57480.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49616\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 55780,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49616\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 272400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22304\nallocs=678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 21966003.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=754720\nallocs=7448\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 5704542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=172872\nallocs=5797\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 399594,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55536\nallocs=1380\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 213500.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 214333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 358101,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 695961.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/GPU/CUDA",
            "value": 24265,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/GPU/oneAPI",
            "value": 1237639,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/GPU/Metal",
            "value": 264625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7024\nallocs=235\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/forward/GPU/AMDGPU",
            "value": 191291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2960\nallocs=137\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 436667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051456\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 343584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051456\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 799102,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051328\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 1947863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051328\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/GPU/CUDA",
            "value": 251893,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19208\nallocs=736\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/GPU/oneAPI",
            "value": 11259040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=312080\nallocs=2997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/GPU/Metal",
            "value": 2132313,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69416\nallocs=2364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=gelu)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 621616,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19832\nallocs=554\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/forward/CPU/2 thread(s)",
            "value": 5437,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32832\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/forward/CPU/4 thread(s)",
            "value": 5625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32832\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/forward/CPU/8 thread(s)",
            "value": 14420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32832\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/forward/CPU/1 thread(s)",
            "value": 12660,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32832\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/forward/GPU/CUDA",
            "value": 16368,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/forward/GPU/AMDGPU",
            "value": 392773.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17840\nallocs=590\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/zygote/CPU/2 thread(s)",
            "value": 12604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132176\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/zygote/CPU/4 thread(s)",
            "value": 11041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132176\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/zygote/CPU/8 thread(s)",
            "value": 32580,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132176\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/zygote/CPU/1 thread(s)",
            "value": 49300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=131984\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/zygote/GPU/CUDA",
            "value": 230612.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=32)/zygote/GPU/AMDGPU",
            "value": 1249966.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62560\nallocs=1929\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/forward/CPU/2 thread(s)",
            "value": 39979.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=131136\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/forward/CPU/4 thread(s)",
            "value": 51500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=131136\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/forward/CPU/8 thread(s)",
            "value": 40200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=131136\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/forward/CPU/1 thread(s)",
            "value": 40400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=131136\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/forward/GPU/CUDA",
            "value": 19977,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/forward/GPU/AMDGPU",
            "value": 1434073,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68640\nallocs=2227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/zygote/CPU/2 thread(s)",
            "value": 42333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=525392\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/zygote/CPU/4 thread(s)",
            "value": 34917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=525392\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/zygote/CPU/8 thread(s)",
            "value": 93080.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=525392\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/zygote/CPU/1 thread(s)",
            "value": 179021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=525200\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/zygote/GPU/CUDA",
            "value": 206000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=128)/zygote/GPU/AMDGPU",
            "value": 4502215.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=214768\nallocs=6832\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 2542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 2375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 17400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 7960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/GPU/CUDA",
            "value": 20238,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/GPU/oneAPI",
            "value": 1144630.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/GPU/Metal",
            "value": 302583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6736\nallocs=233\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/forward/GPU/AMDGPU",
            "value": 34021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1968\nallocs=75\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 2667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 2959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 9321,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 6640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/GPU/CUDA",
            "value": 220305.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14616\nallocs=562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/GPU/oneAPI",
            "value": 8744889,
            "unit": "ns",
            "extra": "gctime=0\nmemory=241744\nallocs=2311\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/GPU/Metal",
            "value": 1551791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53848\nallocs=1867\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=tanh)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 138251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13592\nallocs=328\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 4125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 5333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 13520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 12920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 159429,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13104\nallocs=537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 5704040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=176792\nallocs=1671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 691854.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36832\nallocs=1268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 72751,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10912\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 8500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 8500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 15680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 16060,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=86\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 943482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72896\nallocs=2910\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 39847257,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1115848\nallocs=10164\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 5545750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=226536\nallocs=7730\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 395944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54544\nallocs=1185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 35875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 29708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 63640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 181881,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 37355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=152\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 1243350,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46568\nallocs=557\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 548958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13808\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 205472,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8464\nallocs=294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 264625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1194896\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 213708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1194896\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 566221.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1194896\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 1059082,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1194896\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 273469,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23080\nallocs=861\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 26096498,
            "unit": "ns",
            "extra": "gctime=0\nmemory=873200\nallocs=8412\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 7911250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=210480\nallocs=6798\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 840772.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=76920\nallocs=1701\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/forward/CPU/2 thread(s)",
            "value": 3321187.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8388672\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/forward/CPU/4 thread(s)",
            "value": 2336958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8388672\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/forward/CPU/8 thread(s)",
            "value": 4807814.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8388672\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/forward/CPU/1 thread(s)",
            "value": 13986905,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8388672\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/forward/GPU/CUDA",
            "value": 204884,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/forward/GPU/AMDGPU",
            "value": 1981808,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75120\nallocs=2490\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/zygote/CPU/2 thread(s)",
            "value": 11431083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33555536\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/zygote/CPU/4 thread(s)",
            "value": 8329333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33555536\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/zygote/CPU/8 thread(s)",
            "value": 7946684,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33555536\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/zygote/CPU/1 thread(s)",
            "value": 50455250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33555344\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/zygote/GPU/CUDA",
            "value": 744755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=128)/zygote/GPU/AMDGPU",
            "value": 6309607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=218512\nallocs=6933\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 5854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 5125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 14040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 11640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 153532.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11984\nallocs=467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 5509087,
            "unit": "ns",
            "extra": "gctime=0\nmemory=175480\nallocs=1669\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 777125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35872\nallocs=1240\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 56760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10784\nallocs=263\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 7083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12128\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 7208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12128\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 13880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12128\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 14280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12128\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 790150,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67568\nallocs=2685\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 38288351,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1038792\nallocs=9369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 5238833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211920\nallocs=7188\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 378433,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49520\nallocs=1085\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 148667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 156417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 248321,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 273921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 159362,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13392\nallocs=309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 5875916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=215192\nallocs=2247\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 2947167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53728\nallocs=1707\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 205392,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24688\nallocs=517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1354583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9459296\nallocs=202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1356041.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9460032\nallocs=228\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 2578967.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9463712\nallocs=358\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 3405686.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9458560\nallocs=176\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 772839,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67176\nallocs=1814\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 33368311.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1004344\nallocs=9668\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 10617625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=229384\nallocs=6911\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1271621.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=93144\nallocs=1914\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/forward/CPU/2 thread(s)",
            "value": 34500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=128\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/forward/CPU/4 thread(s)",
            "value": 36792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=128\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/forward/CPU/8 thread(s)",
            "value": 16200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=128\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/forward/CPU/1 thread(s)",
            "value": 1980,
            "unit": "ns",
            "extra": "gctime=0\nmemory=128\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/forward/GPU/CUDA",
            "value": 15201,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/forward/GPU/AMDGPU",
            "value": 79231,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=117\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/zygote/CPU/2 thread(s)",
            "value": 2750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/zygote/CPU/4 thread(s)",
            "value": 2958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/zygote/CPU/8 thread(s)",
            "value": 7780,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/zygote/CPU/1 thread(s)",
            "value": 5180,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1168\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/zygote/GPU/CUDA",
            "value": 146556,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9456\nallocs=360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=4)/zygote/GPU/AMDGPU",
            "value": 294273,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14928\nallocs=427\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 16167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 16334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 33680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 33560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 36843,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=152\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 1210912,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46568\nallocs=557\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 350270.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13808\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 49540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5936\nallocs=136\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 114084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=932624\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 151833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=932624\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 300660.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=932624\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 283381,
            "unit": "ns",
            "extra": "gctime=0\nmemory=932624\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 252921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19648\nallocs=695\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 26612254,
            "unit": "ns",
            "extra": "gctime=0\nmemory=835664\nallocs=8074\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 7746750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=201080\nallocs=6529\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=identity, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 575690,
            "unit": "ns",
            "extra": "gctime=0\nmemory=74144\nallocs=1581\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 4916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 4958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 10280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 10160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/GPU/CUDA",
            "value": 21877,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/GPU/oneAPI",
            "value": 2122402,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31944\nallocs=279\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/GPU/Metal",
            "value": 246875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7192\nallocs=264\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/forward/GPU/AMDGPU",
            "value": 45851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1744\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 18375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55776\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 18750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55776\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 40160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55264\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 39840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55264\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/GPU/CUDA",
            "value": 336100,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15424\nallocs=541\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/GPU/oneAPI",
            "value": 11771439,
            "unit": "ns",
            "extra": "gctime=0\nmemory=252312\nallocs=2550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/GPU/Metal",
            "value": 1582021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53624\nallocs=1862\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=identity)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 204917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16256\nallocs=396\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 129333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 149083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 266160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 254561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1052048\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 161643.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13392\nallocs=309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 6022811,
            "unit": "ns",
            "extra": "gctime=0\nmemory=215192\nallocs=2247\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 2874625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53728\nallocs=1707\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 207802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24224\nallocs=488\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1259583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8410608\nallocs=199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1282395.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8411344\nallocs=225\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 2462048,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8415024\nallocs=355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 2975886,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8409872\nallocs=173\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 756339,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65584\nallocs=1732\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 29436325,
            "unit": "ns",
            "extra": "gctime=0\nmemory=971176\nallocs=9398\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 10678020.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=221232\nallocs=6674\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1075225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=93136\nallocs=1959\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 53792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 66959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 71460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 57080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134288\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 122346,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12544\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 3470399,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130312\nallocs=1357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 1389250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34240\nallocs=1047\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 82041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16720\nallocs=338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 171396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 168770.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 364281.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 384681,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1065232\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 558783,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54424\nallocs=1515\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 19370588,
            "unit": "ns",
            "extra": "gctime=0\nmemory=672648\nallocs=6180\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 5944374.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=167768\nallocs=4931\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 474374,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57992\nallocs=1146\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/forward/CPU/2 thread(s)",
            "value": 24667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4352\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/forward/CPU/4 thread(s)",
            "value": 32125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4352\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/forward/CPU/8 thread(s)",
            "value": 10020,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4224\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/forward/CPU/1 thread(s)",
            "value": 7720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4224\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/forward/GPU/CUDA",
            "value": 16332,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/forward/GPU/AMDGPU",
            "value": 80801,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3184\nallocs=122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/zygote/CPU/2 thread(s)",
            "value": 4625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18256\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/zygote/CPU/4 thread(s)",
            "value": 5334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18256\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/zygote/CPU/8 thread(s)",
            "value": 16140,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17744\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/zygote/CPU/1 thread(s)",
            "value": 11600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17552\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/zygote/GPU/CUDA",
            "value": 225352.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(16, Bsize=4)/zygote/GPU/AMDGPU",
            "value": 312368,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18128\nallocs=498\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 307416.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 307459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 538282,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 537881,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 255995.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17904\nallocs=612\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 7850253,
            "unit": "ns",
            "extra": "gctime=0\nmemory=259912\nallocs=2467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 1036020.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48472\nallocs=1542\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 279173,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24752\nallocs=661\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 569604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 573083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 1421004,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 1402242.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 1167110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=85904\nallocs=3212\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 42494576,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1323248\nallocs=11817\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 6034958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270064\nallocs=8367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 873568,
            "unit": "ns",
            "extra": "gctime=0\nmemory=70400\nallocs=1456\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 23666.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 24583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 45380.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 48400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 128690.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13376\nallocs=308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 3833028,
            "unit": "ns",
            "extra": "gctime=0\nmemory=135560\nallocs=1427\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 1528583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36960\nallocs=1143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 80215.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16848\nallocs=321\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 169708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1070352\nallocs=199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 144042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1070352\nallocs=199\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 368361,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1071088\nallocs=225\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 363521,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1069616\nallocs=173\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 869918,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65552\nallocs=1730\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 24319931,
            "unit": "ns",
            "extra": "gctime=0\nmemory=813336\nallocs=7745\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 7259959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=203472\nallocs=6071\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=identity, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 546880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=73360\nallocs=1430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 6354,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5408\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 6666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5408\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 14440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5280\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 13600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5280\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 156772,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11984\nallocs=467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 5482289.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=175480\nallocs=1669\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 740937.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36072\nallocs=1237\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 69490.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10960\nallocs=274\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 10292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=42336\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 10125.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=42336\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 27000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=41312\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 22920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=41312\nallocs=85\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 877416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69792\nallocs=2754\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 36581665,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1076368\nallocs=9775\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 5135916.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=214208\nallocs=7167\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 396423,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52464\nallocs=1154\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 6354.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 5625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 13760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 12000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1632\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 159255.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11984\nallocs=467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 5411373,
            "unit": "ns",
            "extra": "gctime=0\nmemory=175480\nallocs=1669\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 718583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35872\nallocs=1240\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 61815.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10832\nallocs=266\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 7375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13360\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 7208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13360\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 14560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13360\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 14440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13360\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 828056,
            "unit": "ns",
            "extra": "gctime=0\nmemory=70624\nallocs=2816\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 37910565,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1103416\nallocs=9917\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 5422917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=224192\nallocs=7605\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 405314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51360\nallocs=1128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/forward/CPU/2 thread(s)",
            "value": 14469417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/forward/CPU/4 thread(s)",
            "value": 10125895.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/forward/CPU/8 thread(s)",
            "value": 14787764,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/forward/CPU/1 thread(s)",
            "value": 56770058.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33554496\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/forward/GPU/CUDA",
            "value": 547047,
            "unit": "ns",
            "extra": "gctime=0\nmemory=528\nallocs=24\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/forward/GPU/AMDGPU",
            "value": 7781552.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278000\nallocs=9018\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/zygote/CPU/2 thread(s)",
            "value": 46273083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218832\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/zygote/CPU/4 thread(s)",
            "value": 33477333.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218832\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/zygote/CPU/8 thread(s)",
            "value": 34332983,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218832\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/zygote/CPU/1 thread(s)",
            "value": 224591732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134218640\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/zygote/GPU/CUDA",
            "value": 2663261,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11840\nallocs=432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=512)/zygote/GPU/AMDGPU",
            "value": 25426357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=833056\nallocs=26744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 74583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 83333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 117461,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 193560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 135209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13376\nallocs=308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 3633751,
            "unit": "ns",
            "extra": "gctime=0\nmemory=135560\nallocs=1427\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 1513417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36960\nallocs=1143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 235877.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20128\nallocs=526\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 287000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1332720\nallocs=205\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 257750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1332720\nallocs=205\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 643722,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1333456\nallocs=231\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 1115582.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1331984\nallocs=179\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 796307,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68984\nallocs=1896\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 26915787,
            "unit": "ns",
            "extra": "gctime=0\nmemory=851512\nallocs=8083\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 7540645.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=213432\nallocs=6345\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 800677,
            "unit": "ns",
            "extra": "gctime=0\nmemory=76328\nallocs=1560\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 3083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 3167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 8960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 8120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 32795,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4112\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 1219620,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46520\nallocs=557\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 263291.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13704\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 51811,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6656\nallocs=184\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 19958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49664\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 21416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49664\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 52640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48640\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 48560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48640\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 298775.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21768\nallocs=806\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 21159736.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=700080\nallocs=6758\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 4794166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=157120\nallocs=5240\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 384954,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50424\nallocs=1269\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 7667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 7167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 14920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 26000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/GPU/CUDA",
            "value": 23546,
            "unit": "ns",
            "extra": "gctime=0\nmemory=960\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/GPU/oneAPI",
            "value": 2052634,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32136\nallocs=279\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/GPU/Metal",
            "value": 219666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7224\nallocs=264\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/forward/GPU/AMDGPU",
            "value": 217842,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8176\nallocs=328\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 33875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88688\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 30791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88688\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 54840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=87920\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 128280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=87920\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/GPU/CUDA",
            "value": 305678.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18088\nallocs=683\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/GPU/oneAPI",
            "value": 11026972.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=249376\nallocs=2424\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/GPU/Metal",
            "value": 958792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49456\nallocs=1681\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=gelu)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 621296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15464\nallocs=439\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 35458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 29542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 63200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 181120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 29404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3536\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 1260327.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48360\nallocs=569\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 684458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16080\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 217732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9728\nallocs=363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 252104.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1327504\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 261417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1327504\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 588001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1327504\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 1093643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1327504\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 256399,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21224\nallocs=795\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 33001341,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1038528\nallocs=10193\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 9329709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=249624\nallocs=8141\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 891109,
            "unit": "ns",
            "extra": "gctime=0\nmemory=79864\nallocs=1937\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 647708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 605312.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 1163822,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 1145403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 229322.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 8199074.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262264\nallocs=2480\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1344958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58464\nallocs=1854\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 239142.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18592\nallocs=414\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 2238437.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17900528\nallocs=145\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 2245645.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17900528\nallocs=145\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 4166965,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17900528\nallocs=145\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 4082409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17900528\nallocs=145\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 1074616.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=87408\nallocs=3262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 49230359,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1340192\nallocs=12104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 6817208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=301472\nallocs=9392\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=identity, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1377203,
            "unit": "ns",
            "extra": "gctime=0\nmemory=77584\nallocs=1604\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 54750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 70333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 68920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 46400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134544\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 128073.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13376\nallocs=308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 3533414,
            "unit": "ns",
            "extra": "gctime=0\nmemory=135560\nallocs=1427\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 1503875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36960\nallocs=1143\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 81841,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17200\nallocs=343\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 141250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1201536\nallocs=202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 182958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1201536\nallocs=202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 419680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1202272\nallocs=228\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 403181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1200800\nallocs=176\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 847329,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67144\nallocs=1812\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 25959239.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=846504\nallocs=8015\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 7610584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211016\nallocs=6293\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=true)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 573415,
            "unit": "ns",
            "extra": "gctime=0\nmemory=74376\nallocs=1448\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 3084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 3208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 9200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 8200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 23770,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3072\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 1213057.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48312\nallocs=569\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 370209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15976\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 49381,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 24375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54992\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 25958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54992\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 60820,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53840\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 56800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53840\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 279414.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19960\nallocs=740\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 23123663,
            "unit": "ns",
            "extra": "gctime=0\nmemory=787840\nallocs=7723\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 5125750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=179920\nallocs=6012\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 409054,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56584\nallocs=1402\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 8520.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 9979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 24600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 22440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3360\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 136522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11536\nallocs=274\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 3333053,
            "unit": "ns",
            "extra": "gctime=0\nmemory=125544\nallocs=1352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 835042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32304\nallocs=1039\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 73320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15584\nallocs=342\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 8958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18640\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 9334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18640\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 20980,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18640\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 21000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18640\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 550619.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48240\nallocs=1348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 17406930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=588736\nallocs=5529\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 4024416.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139848\nallocs=4354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 328043,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50400\nallocs=1000\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 1916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 2125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 11060,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 6800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1280\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/GPU/CUDA",
            "value": 20934,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/GPU/oneAPI",
            "value": 1145993.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/GPU/Metal",
            "value": 304167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6736\nallocs=233\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/forward/GPU/AMDGPU",
            "value": 191672,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8272\nallocs=327\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 3250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4800\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 3125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4800\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 9400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4800\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 10360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4800\nallocs=14\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/GPU/CUDA",
            "value": 241958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16984\nallocs=667\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/GPU/oneAPI",
            "value": 9321546.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=274408\nallocs=2585\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/GPU/Metal",
            "value": 1608083.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=60184\nallocs=2081\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(2, act=gelu)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 596195,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16360\nallocs=452\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 250458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 246021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 401761,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 828262,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/GPU/CUDA",
            "value": 24652.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/GPU/oneAPI",
            "value": 1073896,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/GPU/Metal",
            "value": 266396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7024\nallocs=235\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/forward/GPU/AMDGPU",
            "value": 39875.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1392\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 252583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789264\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 245208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789264\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 592600.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789136\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 931582,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789136\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/GPU/CUDA",
            "value": 243564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16840\nallocs=631\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/GPU/oneAPI",
            "value": 10232199,
            "unit": "ns",
            "extra": "gctime=0\nmemory=279416\nallocs=2723\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/GPU/Metal",
            "value": 1988167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62792\nallocs=2148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=tanh)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 239152,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16552\nallocs=385\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 16833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 16792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 37680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 32481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132096\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 33475,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3712\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 1251358,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46568\nallocs=557\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 576833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13808\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 50550,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6464\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 125041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1063760\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 175021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1063760\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 323600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1063760\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 329461,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1063760\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 274036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21240\nallocs=777\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 27323816,
            "unit": "ns",
            "extra": "gctime=0\nmemory=868784\nallocs=8349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 8121541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=208216\nallocs=6749\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 610731,
            "unit": "ns",
            "extra": "gctime=0\nmemory=75320\nallocs=1602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 14833.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5408\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 15229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5408\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 29400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5280\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 32220.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5280\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 156389.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11984\nallocs=467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 5627829.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=175480\nallocs=1669\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 758125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36072\nallocs=1237\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 238477.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17360\nallocs=532\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 24437.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52896\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 23750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52896\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 59720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51616\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 58600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51616\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 925908,
            "unit": "ns",
            "extra": "gctime=0\nmemory=76048\nallocs=2955\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 39519470.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1143136\nallocs=10349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 5470250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=228928\nallocs=7604\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 692366.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56704\nallocs=1217\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 11375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7344\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 12583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7344\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 25920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7216\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 28380,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7216\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 140583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12496\nallocs=308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 3356508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130808\nallocs=1423\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 763875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35272\nallocs=1135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 76691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16144\nallocs=352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 29562,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53696\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 29875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53696\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 57880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52672\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 58480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52672\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 761951,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58672\nallocs=1592\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 21372169.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=722264\nallocs=6956\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 4520000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=168712\nallocs=5132\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 369303,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62416\nallocs=1180\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 11896,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7088\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 12917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7088\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 31840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6960\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 29540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6960\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/CUDA",
            "value": 139641.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11664\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/oneAPI",
            "value": 3654020,
            "unit": "ns",
            "extra": "gctime=0\nmemory=125560\nallocs=1353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/Metal",
            "value": 855875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32552\nallocs=1039\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/forward/GPU/AMDGPU",
            "value": 71120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15520\nallocs=338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 23792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44928\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 24062.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44928\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 47960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44032\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 47500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44032\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/CUDA",
            "value": 627045,
            "unit": "ns",
            "extra": "gctime=0\nmemory=50720\nallocs=1433\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/oneAPI",
            "value": 18932874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=626344\nallocs=5937\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/Metal",
            "value": 3908458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=142064\nallocs=4344\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=false)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 348293,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53568\nallocs=1083\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/forward/CPU/2 thread(s)",
            "value": 28000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2304\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/forward/CPU/4 thread(s)",
            "value": 34583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2304\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/forward/CPU/8 thread(s)",
            "value": 15200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/forward/CPU/1 thread(s)",
            "value": 7420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/forward/GPU/CUDA",
            "value": 16667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/forward/GPU/AMDGPU",
            "value": 1479675,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68624\nallocs=2226\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/zygote/CPU/2 thread(s)",
            "value": 5875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10064\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/zygote/CPU/4 thread(s)",
            "value": 5500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10064\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/zygote/CPU/8 thread(s)",
            "value": 14720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9552\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/zygote/CPU/1 thread(s)",
            "value": 20320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9360\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/zygote/GPU/CUDA",
            "value": 150480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9456\nallocs=360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=128)/zygote/GPU/AMDGPU",
            "value": 4628094,
            "unit": "ns",
            "extra": "gctime=0\nmemory=214704\nallocs=6828\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 2160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 1600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 26830,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3808\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 1249445,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48280\nallocs=567\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 301354,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15456\nallocs=530\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 48800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6800\nallocs=183\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 9979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19200\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 10583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19200\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 22320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19200\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 21580,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19200\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 202104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20080\nallocs=609\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 24781264.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=717080\nallocs=7038\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 5403958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=169528\nallocs=5800\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 396804,
            "unit": "ns",
            "extra": "gctime=0\nmemory=52624\nallocs=1314\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/2 thread(s)",
            "value": 3667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/4 thread(s)",
            "value": 3792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/8 thread(s)",
            "value": 11040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/CPU/1 thread(s)",
            "value": 12440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5312\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/CUDA",
            "value": 27291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3808\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/oneAPI",
            "value": 1223830.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48312\nallocs=569\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/Metal",
            "value": 298917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15976\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/forward/GPU/AMDGPU",
            "value": 212852,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12960\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/2 thread(s)",
            "value": 28167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59344\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/4 thread(s)",
            "value": 28104.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59344\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/8 thread(s)",
            "value": 67280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58064\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/CPU/1 thread(s)",
            "value": 78881,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58064\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/CUDA",
            "value": 284939.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21784\nallocs=824\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/oneAPI",
            "value": 25863464,
            "unit": "ns",
            "extra": "gctime=0\nmemory=792256\nallocs=7786\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/Metal",
            "value": 5960604.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=182192\nallocs=6062\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(32 x 32)/zygote/GPU/AMDGPU",
            "value": 715617,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57944\nallocs=1478\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 177750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 174187.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 419781,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 419281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 227469.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17904\nallocs=612\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 7833593,
            "unit": "ns",
            "extra": "gctime=0\nmemory=260008\nallocs=2473\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1501500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56672\nallocs=1822\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 236532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19200\nallocs=452\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1324833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1309354,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 2415144.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 2329485,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 1006576,
            "unit": "ns",
            "extra": "gctime=0\nmemory=84848\nallocs=3168\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 46110894.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1323552\nallocs=11836\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 6519625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=295448\nallocs=9227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1017214.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=74320\nallocs=1572\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/2 thread(s)",
            "value": 24875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/4 thread(s)",
            "value": 25416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/8 thread(s)",
            "value": 62920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/CPU/1 thread(s)",
            "value": 62800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132624\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/CUDA",
            "value": 267439.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17904\nallocs=612\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/oneAPI",
            "value": 7608329,
            "unit": "ns",
            "extra": "gctime=0\nmemory=259912\nallocs=2467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/Metal",
            "value": 979708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48472\nallocs=1542\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/forward/GPU/AMDGPU",
            "value": 118101,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18496\nallocs=408\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/2 thread(s)",
            "value": 173875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/4 thread(s)",
            "value": 130000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/8 thread(s)",
            "value": 363561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/CPU/1 thread(s)",
            "value": 343861,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1320960\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/CUDA",
            "value": 1224545,
            "unit": "ns",
            "extra": "gctime=0\nmemory=84848\nallocs=3168\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/oneAPI",
            "value": 46466169,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1323248\nallocs=11817\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/Metal",
            "value": 5964125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270160\nallocs=8367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=false)(16 x 16 x 4 x 32)/zygote/GPU/AMDGPU",
            "value": 615436,
            "unit": "ns",
            "extra": "gctime=0\nmemory=70400\nallocs=1474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 2520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 1760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 23378,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3072\nallocs=104\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 1201132.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48280\nallocs=567\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 411062.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15456\nallocs=530\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 51041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6752\nallocs=180\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 10583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19776\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 11854.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19776\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 25000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19776\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 21120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19776\nallocs=129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 207143.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17736\nallocs=671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 24602985,
            "unit": "ns",
            "extra": "gctime=0\nmemory=750200\nallocs=7313\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 5477458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=176328\nallocs=6018\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 397819,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53160\nallocs=1303\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 5584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 6146,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 15880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 14600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2400\nallocs=13\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 167735.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13104\nallocs=537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 5610868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=176792\nallocs=1671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 446999.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36832\nallocs=1268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 241003,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14256\nallocs=480\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 9792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 9958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 20720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 20840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17152\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 977659,
            "unit": "ns",
            "extra": "gctime=0\nmemory=77024\nallocs=3085\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 39836294,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1180488\nallocs=10712\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 5720125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=238680\nallocs=8144\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 677651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56656\nallocs=1222\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/CPU/2 thread(s)",
            "value": 792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/CPU/4 thread(s)",
            "value": 792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/CPU/8 thread(s)",
            "value": 3120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/CPU/1 thread(s)",
            "value": 2800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1104\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/GPU/CUDA",
            "value": 23119,
            "unit": "ns",
            "extra": "gctime=0\nmemory=960\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/GPU/oneAPI",
            "value": 2123638,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32136\nallocs=279\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/GPU/Metal",
            "value": 233041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6944\nallocs=262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/forward/GPU/AMDGPU",
            "value": 215192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8176\nallocs=328\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/CPU/2 thread(s)",
            "value": 4625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6656\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/CPU/4 thread(s)",
            "value": 4666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6656\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/CPU/8 thread(s)",
            "value": 15160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6656\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/CPU/1 thread(s)",
            "value": 17960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6656\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/GPU/CUDA",
            "value": 236203,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15864\nallocs=614\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/GPU/oneAPI",
            "value": 10308512,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211784\nallocs=2017\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/GPU/Metal",
            "value": 1611896,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47232\nallocs=1666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(2, bias=false, act=gelu)(2 x 128)/zygote/GPU/AMDGPU",
            "value": 596706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11496\nallocs=306\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 8437.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 9021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 21480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 21360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3616\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 138251.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12368\nallocs=300\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 3607982,
            "unit": "ns",
            "extra": "gctime=0\nmemory=130792\nallocs=1422\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 781353.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35024\nallocs=1135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 79971,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15840\nallocs=333\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 11292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23456\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 11667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23456\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 25040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23456\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 24801,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23456\nallocs=139\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 678055,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56192\nallocs=1507\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 21567931,
            "unit": "ns",
            "extra": "gctime=0\nmemory=684656\nallocs=6548\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 4942750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=166296\nallocs=5145\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(2, act=identity, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 355083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59600\nallocs=1119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/forward/CPU/2 thread(s)",
            "value": 128209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/forward/CPU/4 thread(s)",
            "value": 130166.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/forward/CPU/8 thread(s)",
            "value": 142641,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/forward/CPU/1 thread(s)",
            "value": 416121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/forward/GPU/CUDA",
            "value": 46758,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/forward/GPU/AMDGPU",
            "value": 110956.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3072\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/zygote/CPU/2 thread(s)",
            "value": 339104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049680\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/zygote/CPU/4 thread(s)",
            "value": 351146,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049680\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/zygote/CPU/8 thread(s)",
            "value": 379880.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049680\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/zygote/CPU/1 thread(s)",
            "value": 1398923,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/zygote/GPU/CUDA",
            "value": 209636,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=4)/zygote/GPU/AMDGPU",
            "value": 453155,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18128\nallocs=498\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 441834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 442583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 207400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 201300.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/GPU/CUDA",
            "value": 44078.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/GPU/oneAPI",
            "value": 1480413,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32024\nallocs=284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/GPU/Metal",
            "value": 421041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7232\nallocs=266\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/forward/GPU/AMDGPU",
            "value": 84870,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2624\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 1406125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1838816\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 1408375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1838816\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 610161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1838688\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 624662,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1838688\nallocs=37\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/GPU/CUDA",
            "value": 281941.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15744\nallocs=561\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/GPU/oneAPI",
            "value": 11329364.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=252648\nallocs=2571\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/GPU/Metal",
            "value": 1733604.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=61088\nallocs=2128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=identity)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 356033.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16720\nallocs=425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 637188,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 680250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 1162082.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 1139763,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3146992\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 224080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19024\nallocs=682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 8664177,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262264\nallocs=2480\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1347084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58464\nallocs=1854\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 253442.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18672\nallocs=419\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 2443208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 2451062.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 4384929,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 4414371,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19997968\nallocs=151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 1095337,
            "unit": "ns",
            "extra": "gctime=0\nmemory=90592\nallocs=3393\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 49089074,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1405808\nallocs=12642\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 7178771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=316080\nallocs=9825\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=relu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1471655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=79600\nallocs=1636\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/forward/CPU/2 thread(s)",
            "value": 34000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=576\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/forward/CPU/4 thread(s)",
            "value": 36208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=576\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/forward/CPU/8 thread(s)",
            "value": 20560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=576\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/forward/CPU/1 thread(s)",
            "value": 3000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=576\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/forward/GPU/CUDA",
            "value": 15786,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/forward/GPU/AMDGPU",
            "value": 404694,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17904\nallocs=594\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/zygote/CPU/2 thread(s)",
            "value": 3333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3152\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/zygote/CPU/4 thread(s)",
            "value": 3333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3152\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/zygote/CPU/8 thread(s)",
            "value": 9040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3152\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/zygote/CPU/1 thread(s)",
            "value": 8040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2960\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/zygote/GPU/CUDA",
            "value": 148875.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9456\nallocs=360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=32)/zygote/GPU/AMDGPU",
            "value": 1247357.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59312\nallocs=1855\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 224791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 178416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 307520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 1335443,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 44645,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3536\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 1365145,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48376\nallocs=570\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1273167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16080\nallocs=535\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 241147,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13088\nallocs=431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 2204125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10503776\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1935458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10503776\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 2561365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10503776\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 8311400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10503776\nallocs=153\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 254216,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21224\nallocs=795\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 36469355.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1038960\nallocs=10220\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 11407854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=250328\nallocs=8162\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=true)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1239882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=83128\nallocs=1994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 4792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 4834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16656\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 9480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 9160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16528\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/GPU/CUDA",
            "value": 34202,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1008\nallocs=38\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/GPU/oneAPI",
            "value": 1266830,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3808\nallocs=68\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/GPU/Metal",
            "value": 175167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2536\nallocs=95\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/forward/GPU/AMDGPU",
            "value": 40630,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1168\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 17125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55264\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 17417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55264\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 37800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54752\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 37640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54752\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/GPU/CUDA",
            "value": 273475,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13328\nallocs=472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/GPU/oneAPI",
            "value": 8501907,
            "unit": "ns",
            "extra": "gctime=0\nmemory=184024\nallocs=1875\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/GPU/Metal",
            "value": 861562.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36744\nallocs=1265\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=false, act=identity)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 180201,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11776\nallocs=307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 453542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 947334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 208121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 250501,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262208\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/GPU/CUDA",
            "value": 113703,
            "unit": "ns",
            "extra": "gctime=0\nmemory=960\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/GPU/oneAPI",
            "value": 1007073.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32216\nallocs=284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/GPU/Metal",
            "value": 427625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7264\nallocs=266\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/forward/GPU/AMDGPU",
            "value": 89281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3088\nallocs=148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 1445916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098448\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 2402750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098448\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 613581,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098448\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 714682,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2098448\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/GPU/CUDA",
            "value": 249001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15992\nallocs=601\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/GPU/oneAPI",
            "value": 9744686.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=245328\nallocs=2379\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/GPU/Metal",
            "value": 1836416.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=55336\nallocs=1914\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=false, act=relu)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 354564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14744\nallocs=407\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 3000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 2120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/CUDA",
            "value": 26515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3808\nallocs=128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/oneAPI",
            "value": 1256935.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48280\nallocs=567\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/Metal",
            "value": 291250.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15456\nallocs=530\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/forward/GPU/AMDGPU",
            "value": 209582,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9984\nallocs=382\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 11209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20352\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 12250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20352\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 27321,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20352\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 24600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20352\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/CUDA",
            "value": 213618.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19560\nallocs=755\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/oneAPI",
            "value": 25151955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=754616\nallocs=7376\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/Metal",
            "value": 5945500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=178032\nallocs=6069\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=gelu, affine=true)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 703672,
            "unit": "ns",
            "extra": "gctime=0\nmemory=53752\nallocs=1331\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/forward/CPU/2 thread(s)",
            "value": 834271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2097216\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/forward/CPU/4 thread(s)",
            "value": 621917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2097216\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/forward/CPU/8 thread(s)",
            "value": 1234542.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2097216\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/forward/CPU/1 thread(s)",
            "value": 3555208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2097216\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/forward/GPU/CUDA",
            "value": 129868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/forward/GPU/AMDGPU",
            "value": 611766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18096\nallocs=606\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/zygote/CPU/2 thread(s)",
            "value": 2682063,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8389712\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/zygote/CPU/4 thread(s)",
            "value": 2000229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8389712\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/zygote/CPU/8 thread(s)",
            "value": 3966768,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8389712\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/zygote/CPU/1 thread(s)",
            "value": 12303030,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8389520\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/zygote/GPU/CUDA",
            "value": 261832,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(128, Bsize=32)/zygote/GPU/AMDGPU",
            "value": 2267472.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=66592\nallocs=2048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/2 thread(s)",
            "value": 541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/4 thread(s)",
            "value": 625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/8 thread(s)",
            "value": 2440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/CPU/1 thread(s)",
            "value": 1560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1440\nallocs=19\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/CUDA",
            "value": 32564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4112\nallocs=142\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/oneAPI",
            "value": 1265527.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46488\nallocs=555\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/Metal",
            "value": 382750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13184\nallocs=444\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/forward/GPU/AMDGPU",
            "value": 48721,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6528\nallocs=176\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/2 thread(s)",
            "value": 9541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18448\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/4 thread(s)",
            "value": 10583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18448\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/8 thread(s)",
            "value": 23140,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18448\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/CPU/1 thread(s)",
            "value": 19640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18448\nallocs=110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/CUDA",
            "value": 231248,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19544\nallocs=737\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/oneAPI",
            "value": 21093297,
            "unit": "ns",
            "extra": "gctime=0\nmemory=662440\nallocs=6348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/Metal",
            "value": 4593979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=153936\nallocs=5244\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(2, act=relu, affine=false)(4 x 32)/zygote/GPU/AMDGPU",
            "value": 370283,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46920\nallocs=1165\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 2415250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 2383312.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 4238488.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 4241570.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1050128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 222790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17904\nallocs=612\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 7850868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=260008\nallocs=2473\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1556959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56672\nallocs=1822\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 357143.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=19824\nallocs=491\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 4596250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 4661875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 10753701,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 10773387,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10496000\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 990657,
            "unit": "ns",
            "extra": "gctime=0\nmemory=85904\nallocs=3212\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 46578618.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1323552\nallocs=11836\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 6670520.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=295944\nallocs=9241\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "layernorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1420054,
            "unit": "ns",
            "extra": "gctime=0\nmemory=74896\nallocs=1590\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 181041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 188417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 251360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 420361,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262384\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/GPU/CUDA",
            "value": 24049,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2384\nallocs=107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/GPU/oneAPI",
            "value": 1198923,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34072\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/GPU/Metal",
            "value": 265479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7024\nallocs=235\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/forward/GPU/AMDGPU",
            "value": 39430,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1264\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 181709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789264\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 209417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789264\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 270001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789136\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 532161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=789136\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/GPU/CUDA",
            "value": 242549.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16840\nallocs=631\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/GPU/oneAPI",
            "value": 10485051,
            "unit": "ns",
            "extra": "gctime=0\nmemory=279416\nallocs=2723\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/GPU/Metal",
            "value": 2003584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62792\nallocs=2148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "bias_activation(512, act=relu)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 225057.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16328\nallocs=384\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/forward/CPU/2 thread(s)",
            "value": 23125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8448\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/forward/CPU/4 thread(s)",
            "value": 26583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8448\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/forward/CPU/8 thread(s)",
            "value": 12280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8320\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/forward/CPU/1 thread(s)",
            "value": 18320,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8320\nallocs=1\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/forward/GPU/CUDA",
            "value": 18321,
            "unit": "ns",
            "extra": "gctime=0\nmemory=512\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/forward/GPU/AMDGPU",
            "value": 6010128.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=271600\nallocs=8760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/zygote/CPU/2 thread(s)",
            "value": 13833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34640\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/zygote/CPU/4 thread(s)",
            "value": 11333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34640\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/zygote/CPU/8 thread(s)",
            "value": 24841,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34128\nallocs=27\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/zygote/CPU/1 thread(s)",
            "value": 60440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33936\nallocs=25\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/zygote/GPU/CUDA",
            "value": 251030,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11808\nallocs=430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchedmm(2, Bsize=512)/zygote/GPU/AMDGPU",
            "value": 18033043,
            "unit": "ns",
            "extra": "gctime=0\nmemory=823248\nallocs=26406\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/CPU/2 thread(s)",
            "value": 599791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/CPU/4 thread(s)",
            "value": 1092270.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/CPU/8 thread(s)",
            "value": 489041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/CPU/1 thread(s)",
            "value": 768362,
            "unit": "ns",
            "extra": "gctime=0\nmemory=262400\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/GPU/CUDA",
            "value": 46999,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/GPU/oneAPI",
            "value": 1392789,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34280\nallocs=314\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/GPU/Metal",
            "value": 420000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7856\nallocs=282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/forward/GPU/AMDGPU",
            "value": 89231,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2688\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/CPU/2 thread(s)",
            "value": 1597229.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2100128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/CPU/4 thread(s)",
            "value": 1996604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2100128\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/CPU/8 thread(s)",
            "value": 902762,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2100000\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/CPU/1 thread(s)",
            "value": 1249883,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2100000\nallocs=23\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/GPU/CUDA",
            "value": 312967,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18136\nallocs=667\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/GPU/oneAPI",
            "value": 11999974.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=287592\nallocs=2876\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/GPU/Metal",
            "value": 2029812,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68456\nallocs=2361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(512, bias=true, act=relu)(512 x 128)/zygote/GPU/AMDGPU",
            "value": 379654,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18328\nallocs=455\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 241167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 189917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 328641,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 1441004,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1049824\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 55727,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=152\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 1000508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=46584\nallocs=558\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 1124145.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13808\nallocs=449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 235942,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12896\nallocs=429\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 2140292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453440\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1856542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453440\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 2663925,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453440\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 8111921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9453440\nallocs=133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 273964.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23080\nallocs=861\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 32748843.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=873536\nallocs=8433\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 10129020.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=211136\nallocs=6816\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "batchnorm(4, act=gelu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1387834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=83864\nallocs=1988\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/CPU/2 thread(s)",
            "value": 17541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16848\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/CPU/4 thread(s)",
            "value": 17333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16848\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/CPU/8 thread(s)",
            "value": 40960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16720\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/CPU/1 thread(s)",
            "value": 52201,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16720\nallocs=6\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/GPU/CUDA",
            "value": 24415,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1056\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/GPU/oneAPI",
            "value": 2230719,
            "unit": "ns",
            "extra": "gctime=0\nmemory=34200\nallocs=309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/GPU/Metal",
            "value": 220708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7976\nallocs=281\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/forward/GPU/AMDGPU",
            "value": 217862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8256\nallocs=330\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/CPU/2 thread(s)",
            "value": 35292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=89200\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/CPU/4 thread(s)",
            "value": 32083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=89200\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/CPU/8 thread(s)",
            "value": 56400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88432\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/CPU/1 thread(s)",
            "value": 130560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88432\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/GPU/CUDA",
            "value": 365726.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20184\nallocs=752\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/GPU/oneAPI",
            "value": 13614768.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=317664\nallocs=3099\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/GPU/Metal",
            "value": 1676333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=66008\nallocs=2262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "dense(32, bias=true, act=gelu)(32 x 128)/zygote/GPU/AMDGPU",
            "value": 670606.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20808\nallocs=582\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/2 thread(s)",
            "value": 149166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/4 thread(s)",
            "value": 149500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/8 thread(s)",
            "value": 272401,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/CPU/1 thread(s)",
            "value": 421481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1051792\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/CUDA",
            "value": 190368,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12560\nallocs=283\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/oneAPI",
            "value": 5773812.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=209944\nallocs=2177\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/Metal",
            "value": 2081937.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=51008\nallocs=1611\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/forward/GPU/AMDGPU",
            "value": 185992,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23952\nallocs=496\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/2 thread(s)",
            "value": 1274500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8405264\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/4 thread(s)",
            "value": 1280458.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8405264\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/8 thread(s)",
            "value": 2352245,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8405264\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/CPU/1 thread(s)",
            "value": 3076128,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8405264\nallocs=123\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/CUDA",
            "value": 583915,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54456\nallocs=1517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/oneAPI",
            "value": 29412677,
            "unit": "ns",
            "extra": "gctime=0\nmemory=830392\nallocs=7827\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/Metal",
            "value": 9642208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=185592\nallocs=5538\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "groupnorm(4, act=relu, affine=false)(16 x 16 x 32 x 32)/zygote/GPU/AMDGPU",
            "value": 1129711,
            "unit": "ns",
            "extra": "gctime=0\nmemory=77960\nallocs=1687\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}