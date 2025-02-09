export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "XI Semestre",
    "season": "Otoño",
    "degree": "Especialidad"
  },
  "courses": [
    {
      "code": "GL6919",
      "name": "Trabajo de Título",
      "credits": 24,
      "requires": [
        "GL6908",
        "GL5902"
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
      "code": "EI2090",
      "name": "Examen de Suficiencia en Inglés II",
      "credits": 0,
      "requires": [],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
