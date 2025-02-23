export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "V Semestre",
    "season": "Primavera",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "MA3403",
      "name": "Probabilidades y Estadísticas",
      "credits": 6,
      "requires": [
        "MA2001"
      ],
      "unlocks": [
        "IN3301"
      ]
    },
    {
      "code": "GL3103",
      "name": "Ciencia de los Minerales I",
      "credits": 6,
      "requires": [
        "IQ2211"
      ],
      "unlocks": [
        "GL3203"
      ]
    },
    {
      "code": "GF3001",
      "name": "Geofísica General",
      "credits": 6,
      "requires": [
        "FI2002"
      ],
      "unlocks": [
        "GL3205"
      ]
    },
    {
      "code": "GL3101",
      "name": "Geología General",
      "credits": 6,
      "requires": [
        "MA2002",
        "XA0031"
      ],
      "unlocks": [
        "GL3204",
        "GL3205",
        "GL3201"
      ]
    },
    {
      "code": "XA0012",
      "name": "Formación Integral",
      "credits": 3,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "XA0012",
      "name": "Formación Integral",
      "credits": 0,
      "requires": [],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
