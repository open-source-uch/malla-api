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
        "ME4160",
        "IN3301"
      ]
    },
    {
      "code": "XA0033",
      "name": "Optimización / Modelamiento y Optimización",
      "credits": 6,
      "requires": [
        "MA2002"
      ],
      "unlocks": [
        "IN4273",
        "ME4160"
      ]
    },
    {
      "code": "ME3110",
      "name": "Ciencia de los Materiales",
      "credits": 6,
      "requires": [
        "XA0031"
      ],
      "unlocks": [
        "ME3210"
      ]
    },
    {
      "code": "ME3140",
      "name": "Mecánica de Fluidos",
      "credits": 6,
      "requires": [
        "MA2002",
        "FI2003",
        "XA0031"
      ],
      "unlocks": [
        "ME3240"
      ]
    },
    {
      "code": "ME3120",
      "name": "Dibujo Mecánico",
      "credits": 3,
      "requires": [
        "CD2201"
      ],
      "unlocks": [
        "ME3220"
      ]
    },
    {
      "code": "ME3130",
      "name": "Mecánica Estática",
      "credits": 3,
      "requires": [
        "FI2001"
      ],
      "unlocks": [
        "ME3230"
      ]
    }
  ]
}`;

  return new Response(data)
}
