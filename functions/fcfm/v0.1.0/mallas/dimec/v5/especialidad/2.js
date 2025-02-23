export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "X Semestre",
    "season": "Primavera",
    "degree": "Especialidad"
  },
  "courses": [
    {
      "code": "ME5210",
      "name": "Manufactura Avanzada",
      "credits": 6,
      "requires": [
        "IN4273",
        "ME4110"
      ],
      "unlocks": []
    },
    {
      "code": "ME6908",
      "name": "Introducción al Trabajo de Título",
      "credits": 3,
      "requires": [
        "XA007I"
      ],
      "unlocks": [
        "ME6909"
      ]
    },
    {
      "code": "ME5220",
      "name": "Proyecto en Ingeniería Mecánica",
      "credits": 6,
      "requires": [
        "ME5120",
        "ME5140"
      ],
      "unlocks": []
    },
    {
      "code": "ME5240",
      "name": "Laboratorio de Energía",
      "credits": 3,
      "requires": [
        "ME4240"
      ],
      "unlocks": []
    },
    {
      "code": "XA0022",
      "name": "Electivo de Especialidad",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "XA0022",
      "name": "Electivo de Especialidad",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "ME5900",
      "name": "Taller de Práctica Profesional II",
      "credits": 1,
      "requires": [],
      "unlocks": [
        "ME5902"
      ]
    }
  ]
}`;

  return new Response(data)
}
