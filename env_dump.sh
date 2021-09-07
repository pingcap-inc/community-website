#!/usr/bin/env bash

# Script to dump shell environment variables (loaded by CircleCI) to local
# configuration file to be used by Next.js

template_env_file=".env.circle-ci.template"
local_env_file=".env.local"

# read placeholder environment variables from .env.template
while read -r line || [ -n "$line" ]; do
    # ignore the trailing '='
    name="${line:0:$((${#line}-1))}"
    # output to .env.local
    # note that '!' indicates indirection
    echo "${name}=\"${!name}\"" >> "${local_env_file}"
done < "${template_env_file}"
