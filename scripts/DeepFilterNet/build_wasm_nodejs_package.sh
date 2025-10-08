#!/bin/sh -ex

# look at DeepFilterNet/.github/workflows/build_wasm.yml for enviroment setup
cd DeepFilterNet/libDF/
wasm-pack build --target nodejs --features wasm