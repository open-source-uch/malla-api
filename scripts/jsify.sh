#!/usr/bin/env bash

input="$1"
output="$2"

printf -- "export function onRequest(context) {\n\nconst data = \`" > "$output"
printf -- "$(<$input)" >> "$output"
printf -- "\`;\n\n  return new Response(data)\n}\n" >> "$output"