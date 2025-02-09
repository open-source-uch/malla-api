export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "IX Semestre",
    "season": "Otoño",
    "degree": "Especialidad"
  },
  "courses": [
    {
      "code": "GL5321",
      "name": "Geología Aplicada a la Ingeniería",
      "credits": 6,
      "requires": [
        "GL4402"
      ],
      "unlocks": [
        "GL6301"
      ]
    },
    {
      "code": "GL5213",
      "name": "Hidrogeología",
      "credits": 6,
      "requires": [
        "GL4205",
        "GL3201"
      ],
      "unlocks": [
        "GL6302"
      ]
    },
    {
      "code": "GL5311",
      "name": "Metalogénesis",
      "credits": 6,
      "requires": [
        "GL4401"
      ],
      "unlocks": [
        "GL6301"
      ]
    },
    {
      "code": "GL5314",
      "name": "Geología Andina",
      "credits": 6,
      "requires": [
        "GL4402",
        "GL4212",
        "GL4206"
      ],
      "unlocks": [
        "GL6101"
      ]
    },
    {
      "code": "GL5301",
      "name": "Geotectónica",
      "credits": 3,
      "requires": [
        "GL4402"
      ],
      "unlocks": [
        "GL6101"
      ]
    },
    {
      "code": "XA0022",
      "name": "Electivo de Especialidad",
      "credits": 3,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "GL5900",
      "name": "Taller Práctica Profesional II",
      "credits": 1,
      "requires": [
        "GL4901"
      ],
      "unlocks": [
        "GL5902"
      ]
    }
  ]
}`;

  return new Response(data)
}
