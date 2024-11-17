export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VI Semestre",
    "season": "Otoño",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "CC3201",
      "name": "Bases de Datos",
      "credits": 6,
      "requires": [
        "CC3001"
      ],
      "unlocks": [
        "CC4401",
        "CC4901"
      ]
    },
    {
      "code": "CC3002",
      "name": "Metodologías de Diseño y Programación",
      "credits": 6,
      "requires": [
        "CC3001"
      ],
      "unlocks": [
        "CC4401",
        "CC4901"
      ]
    },
    {
      "code": "CC3102",
      "name": "Teoría de la Computación",
      "credits": 6,
      "requires": [
        "CC3101"
      ],
      "unlocks": [
        "CC4101",
        "CC4102"
      ]
    },
    {
      "code": "CC3301",
      "name": "Programación de Software de Sistemas",
      "credits": 6,
      "requires": [
        "CC3001"
      ],
      "unlocks": [
        "CC4302",
        "CC4901"
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
      "code": "CC4900",
      "name": "Taller de Práctica Profesional I",
      "credits": 1,
      "requires": [],
      "unlocks": [
        "CC4901"
      ]
    }
  ]
}`;

  return new Response(data)
}
