#!/usr/bin/env bash

template_env_file=".env.template"
local_env_file=".env.local"

while read -r line || [ -n "$line" ]; do
    name="${line:0:$((${#line}-1))}"
    echo "${name}=\"${!name}\"" >> "${local_env_file}"
done < "${template_env_file}"
