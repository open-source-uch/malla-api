export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "X Semestre",
    "season": "Primavera",
    "degree": "Especialidad"
  },
  "courses": [
    {
      "code": "GL6908",
      "name": "Introducción al Trabajo de Título",
      "credits": 3,
      "requires": [
        "GL4901"
      ],
      "unlocks": [
        "GL6919"
      ]
    },
    {
      "code": "GL6301",
      "name": "Geología Económica",
      "credits": 6,
      "requires": [
        "GL5321",
        "GL5311"
      ],
      "unlocks": []
    },
    {
      "code": "GL6101",
      "name": "Geología de Campo II",
      "credits": 9,
      "requires": [
        "GL5314",
        "GL5301",
        "GL4402"
      ],
      "unlocks": []
    },
    {
      "code": "GL6302",
      "name": "Geología Ambiental",
      "credits": 3,
      "requires": [
        "GL5213"
      ],
      "unlocks": []
    },
    {
      "code": "XA0022",
      "name": "Electivo de Especialidad",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "XA0022",
      "name": "Electivo de Especialidad",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "GL5902",
      "name": "Práctica Profesional II",
      "credits": 13,
      "requires": [
        "GL5900",
        "GL4901"
      ],
      "unlocks": [
        "GL6919"
      ]
    }
  ]
}`;

  return new Response(data)
}
