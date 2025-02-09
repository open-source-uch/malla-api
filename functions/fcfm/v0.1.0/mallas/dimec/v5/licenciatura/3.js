export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VII Semestre",
    "season": "Primavera",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "ME4160",
      "name": "Gestión de Activos Físicos",
      "credits": 6,
      "requires": [
        "XA0033",
        "MA3403"
      ],
      "unlocks": []
    },
    {
      "code": "ME4110",
      "name": "Proceso de Manufactura",
      "credits": 6,
      "requires": [
        "ME3210"
      ],
      "unlocks": [
        "ME5110",
        "ME5210"
      ]
    },
    {
      "code": "ME4140",
      "name": "Transferencia de Calor",
      "credits": 6,
      "requires": [
        "ME3240"
      ],
      "unlocks": [
        "ME4240"
      ]
    },
    {
      "code": "ME4150",
      "name": "Automatización y Control",
      "credits": 6,
      "requires": [
        "ME3250"
      ],
      "unlocks": [
        "ME4250",
        "ME4220",
        "ME5150"
      ]
    },
    {
      "code": "ME4130",
      "name": "Vibraciones Mecánicas",
      "credits": 6,
      "requires": [
        "ME3230"
      ],
      "unlocks": [
        "ME5120"
      ]
    }
    
  ]
}`;

  return new Response(data)
}
