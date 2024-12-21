export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VI Semestre",
    "season": "Otoño",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "ME3250",
      "name": "Cinemática y Dinámica de Mecanismos",
      "credits": 6,
      "requires": [
        "MA2601",
        "FI2001"
      ],
      "unlocks": [
        "ME4150"
      ]
    },
    {
      "code": "ME3210",
      "name": "Materiales para la Ingeniería",
      "credits": 6,
      "requires": [
        "ME3110"
      ],
      "unlocks": [
        "ME4110"
      ]
    },
    {
      "code": "ME3240",
      "name": "Termotecnia",
      "credits": 6,
      "requires": [
        "ME3140"
      ],
      "unlocks": [
        "ME4140"
      ]
    },
    {
      "code": "ME3230",
      "name": "Mecánica de Sólidos",
      "credits": 6,
      "requires": [
        "ME3130",
        "MA2002"
      ],
      "unlocks": [
        "ME4130",
        "ME4230"
      ]
    },
    {
      "code": "ME3220",
      "name": "Taller Mecánico",
      "credits": 3,
      "requires": [
        "ME3120"
      ],
      "unlocks": [
        "ME4220"
      ]
    },
    {
      "code": "XA0012",
      "name": "Formación Integral",
      "credits": 3,
      "requires": [],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
