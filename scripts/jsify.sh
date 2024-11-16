#!/usr/bin/env bash

input="$1"
output="$2"

printf -- "%s\n\n" "export function onRequest(context) {" > "$output"
printf -- "%s" "const data = \`" >> "$output"
printf -- "%s" "$(<$input)" >> "$output"
printf -- "%s\n\n" "\`;" >> "$output"
printf -- "%s\n}\n" "  return new Response(data)" >> "$output"
