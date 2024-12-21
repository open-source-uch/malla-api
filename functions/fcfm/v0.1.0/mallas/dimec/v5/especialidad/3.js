export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "XI Semestre",
    "season": "Otoño",
    "degree": "Especialidad"
  },
  "courses": [
    {
      "code": "ME6909",
      "name": "Trabajo de Título",
      "credits": 21,
      "requires": [
        "ME6908"
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
      "code": "XA0013",
      "name": "Formación Integral de Especialidad",
      "credits": 3,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "ME5902",
      "name": "Práctica Profesional II",
      "credits": 13,
      "requires": [
        "ME4901"
      ],
      "unlocks": []
    },
    {
      "code": "EI2090",
      "name": "Exámen de Suficiencia en Inglés II",
      "credits": 0,
      "requires": [],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
