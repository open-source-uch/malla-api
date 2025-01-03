export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VIII Semestre",
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
        "XA2241"
      ],
      "unlocks": [
        "ME5110",
        "ME5140",
        "ME6600"
      ]
    },
    {
      "code": "ME4250",
      "name": "Mecatrónica",
      "credits": 3,
      "requires": [
        "FI2002",
        "ME4150"
      ],
      "unlocks": []
    },
    {
      "code": "ME4240",
      "name": "Máquinas",
      "credits": 6,
      "requires": [
        "ME4140"
      ],
      "unlocks": [
        "ME5140",
        "ME5240"
      ]
    },
    {
      "code": "ME4230",
      "name": "Elementos de Máquinas",
      "credits": 6,
      "requires": [
        "ME3230"
      ],
      "unlocks": [
        "ME5120"
      ]
    },
    {
      "code": "ME4220",
      "name": "Planos de Ingeniería",
      "credits": 3,
      "requires": [
        "ME3220"
      ],
      "unlocks": [
        "ME5120"
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
      "code": "XA0013",
      "name": "Formación Integral de Especialidad",
      "credits": 3,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "ME4900",
      "name": "Taller de Práctica Profesional",
      "credits": 1,
      "requires": [],
      "unlocks": [
        "ME4901"
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
