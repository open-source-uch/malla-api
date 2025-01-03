export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "X Semestre",
    "season": "Primavera",
    "degree": "Especialidad"
  },
  "courses": [
    {
      "code": "CC6907",
      "name": "Introducción al Trabajo de Título",
      "credits": 6,
      "requires": [
        "CC4402"
      ],
      "unlocks": [
        "CC6919"
      ]
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
      "code": "CC5402",
      "name": "Proyecto de Software",
      "credits": 12,
      "requires": [
        "CC5205",
        "CC4402"
      ],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
