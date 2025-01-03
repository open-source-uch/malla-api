export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "III Semestre",
    "season": "Otoño"
  },
  "courses": [
    {
      "code": "MA2001",
      "name": "Cálculo en Varias Variables",
      "credits": 6,
      "requires": [
        "MA1002",
        "MA1102"
      ],
      "unlocks": [
       "MA2002",
       "IN2201",
       "FI2002",
       "XA0031"
      ]
    },
    {
      "code": "MA2601",
      "name": "Ecuaciones Diferenciales Ordinarias",
      "credits": 6,
      "requires": [
        "MA1002",
        "MA1102"
      ],
      "unlocks": [
        "MA2002",
        "FI2002"
      ]
    },
    {
      "code": "FI2001",
      "name": "Mecánica",
      "credits": 6,
      "requires": [
        "FI1100",
        "MA1102",
        "MA1002"
      ],
      "unlocks": [
        "XA0031"
      ]
    },
    {
      "code": "FI2003",
      "name": "Métodos Experimentales",
      "credits": 6,
      "requires": [
        "FI1100",
        "MA1002"
      ],
      "unlocks": [
        "FI2002"
      ]
    },
    {
      "code": "IQ2211",
      "name": "Química",
      "credits": 6,
      "requires": [],
      "unlocks": [
        "XA0031"
      ]
    }
  ]
}`;

  return new Response(data)
}
