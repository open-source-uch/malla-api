export function onRequest(context) {

const data = `{
  "full_name": "Facultad de Ciencias Físicas y Matemáticas",
  "short_name": "FCFM",
  "address": "Beauchef 850, Santiago",
  "current_version": "v0.1.0",
  "version_history": [
    "v0",
    "v0.1.0"
  ]
}`;

  return new Response(data)
}
