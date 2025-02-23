export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VIII Semestre",
    "season": "Otoño",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "GL4402",
      "name": "Geología de Campo I",
      "credits": 6,
      "requires": [
        "GL4101",
        "GL4202",
        "GL4203",
        "GL4204"
      ],
      "unlocks": [
        "GL6101",
        "GL5321",
        "GL5314",
        "GL5301"
      ]
    },
    {
      "code": "GL4403",
      "name": "Petrología Metamórfica",
      "credits": 6,
      "requires": [
        "GL3204",
        "GL3203"
      ],
      "unlocks": []
    },
    {
      "code": "GL4401",
      "name": "Introducción a Yacimientos Minerales",
      "credits": 6,
      "requires": [
        "IN3301",
        "GL4205"
      ],
      "unlocks": [
        "GL5311"
      ]
    },
    {
      "code": "GL4212",
      "name": "Volcanología Física",
      "credits": 6,
      "requires": [
        "GL4203",
        "GL4202"
      ],
      "unlocks": [
        "GL5314"
      ]
    },
    {
      "code": "XA0021",
      "name": "Electivo",
      "credits": 3,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "XA0021",
      "name": "Electivo",
      "credits": 3,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "GL4901",
      "name": "Práctica Profesional I",
      "credits": 6,
      "requires": [
        "GL3205"
      ],
      "unlocks": [
        "GL6908",
        "GL5900"
      ]
    },
    {
      "code": "EI1090",
      "name": "Examen de Suficiencia en Inglés I",
      "credits": 0,
      "requires": [],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
