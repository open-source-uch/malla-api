export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "IX Semestre",
    "season": "Otoño",
    "degree": "Especialidad"
  },
  "courses": [
    {
      "code": "IN4273",
      "name": "Gestión de Operaciones",
      "credits": 6,
      "requires": [
        "XA2242",
        "XA2243"
      ],
      "unlocks": [
        "ME5210"
      ]
    },
    {
      "code": "ME5110",
      "name": "Proyecto en Materiales y Manufactura",
      "credits": 6,
      "requires": [
        "ME4262",
        "ME4110"
      ],
      "unlocks": []
    },
    {
      "code": "ME5140",
      "name": "Ingeniería en Termofluidos",
      "credits": 6,
      "requires": [
        "IN3301",
        "ME4240"
      ],
      "unlocks": [
        "ME5220"
      ]
    },
    {
      "code": "ME5150",
      "name": "Robótica",
      "credits": 6,
      "requires": [
        "ME4150"
      ],
      "unlocks": []
    },
    {
      "code": "ME5120",
      "name": "Diseño de Sistemas Mecánicos",
      "credits": 6,
      "requires": [
        "ME4130",
        "ME4220",
        "ME4230"
      ],
      "unlocks": [
        "ME5220"
      ]
    },
    {
      "code": "ME4901",
      "name": "Práctica Profesional I",
      "credits": 6,
      "requires": [
        "XA2244"
      ],
      "unlocks": [
        "ME5902"
      ]
    }
  ]
}`;

  return new Response(data)
}
