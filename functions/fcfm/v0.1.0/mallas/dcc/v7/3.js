export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VII Semestre",
    "season": "Primavera",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "CC5205",
      "name": "Minerías de Datos",
      "credits": 6,
      "requires": [
        "CC3001"
      ],
      "unlocks": [
        "CC5402"
      ]
    },
    {
      "code": "CC4401",
      "name": "Ingeniería de Software",
      "credits": 6,
      "requires": [
        "CC3002",
        "CC3201"
      ],
      "unlocks": [
        "CC4402",
        "CC5901"
      ]
    },
    {
      "code": "CC4102",
      "name": "Diseño y Análisis de Algoritmos",
      "credits": 6,
      "requires": [
        "MA3403",
        "CC3001",
        "CC3102"
      ],
      "unlocks": []
    },
    {
      "code": "CC4302",
      "name": "Sistemas Operativos",
      "credits": 6,
      "requires": [
        "CC3301"
      ],
      "unlocks": [
        "CC4303"
      ]
    },
    {
      "code": "XA0021",
      "name": "Electivo",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "CC4901",
      "name": "Práctica Profesional I",
      "credits": 6,
      "requires": [
        "CC3002",
        "CC3201",
        "CC3301"
      ],
      "unlocks": [
        "CC5900"
      ]
    }
  ]
}`;

  return new Response(data)
}
