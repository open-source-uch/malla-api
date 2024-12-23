export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VI Semestre",
    "season": "Otoño",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "IN3301",
      "name": "Evaluación de Proyectos",
      "credits": 6,
      "requires": [
        "IN2201",
        "MA3403"
      ],
      "unlocks": [
        "GL4401"
      ]
    },
    {
      "code": "GL3203",
      "name": "Ciencia de los Minerales II",
      "credits": 6,
      "requires": [
        "GL3103"
      ],
      "unlocks": [
        "GL4403",
        "GL4202"
      ]
    },
    {
      "code": "GL3204",
      "name": "Energía de Procesos Geológicos",
      "credits": 6,
      "requires": [
        "GL3101"
      ],
      "unlocks": [
        "GL4403",
        "GL4202",
        "GLL4205"
      ]
    },
    {
      "code": "GL3205",
      "name": "Sistemas de Información Geográfica para Geología",
      "credits": 3,
      "requires": [
        "GL3101",
        "GF3001"
      ],
      "unlocks": [
        "GL4101",
        "GL4203",
        "GL4900"
      ]
    },
    {
      "code": "GL3201",
      "name": "Sedimentología",
      "credits": 6,
      "requires": [
        "GL3101"
      ],
      "unlocks": [
        "GL5212",
        "GL4204",
        "GL4206"
      ]
    },
    {
      "code": "XA0021",
      "name": "Electivo",
      "credits": 3,
      "requires": [],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
