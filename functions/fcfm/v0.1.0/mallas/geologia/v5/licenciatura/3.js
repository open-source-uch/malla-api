export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VII Semestre",
    "season": "Primavera",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "GL4101",
      "name": "Geología Estructural",
      "credits": 6,
      "requires": [
        "GL3205"
      ],
      "unlocks": [
        "GL4402"
      ]
    },
    {
      "code": "GL4202",
      "name": "Petrología Ígnea",
      "credits": 6,
      "requires": [
        "GL3204",
        "GL3203"
      ],
      "unlocks": [
        "GL4212",
        "GL4402"
      ]
    },
    {
      "code": "GL4205",
      "name": "Geoquímica",
      "credits": 6,
      "requires": [
        "GL3204"
      ],
      "unlocks": [
        "GL4401",
        "GL5213"
      ]
    },
    {
      "code": "GL4203",
      "name": "Geomorfología Dinámica",
      "credits": 6,
      "requires": [
        "GL3205"
      ],
      "unlocks": [
        "GL4402",
        "GL4212"
      ]
    },
    {
      "code": "GL4204",
      "name": "Estratigrafía",
      "credits": 3,
      "requires": [
        "GL3201"
      ],
      "unlocks": [
        "GL4402"
      ]
    },
    {
      "code": "GL4206",
      "name": "Paleontología",
      "credits": 3,
      "requires": [
        "GL3201"
      ],
      "unlocks": [
        "GL5314"
      ]
    },
    {
      "code": "GL4900",
      "name": "Taller de Práctica Profesional I",
      "credits": 1,
      "requires": [],
      "unlocks": [
        "GL4901"
      ]
    }
  ]
}`;

  return new Response(data)
}
