export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "IX Semestre",
    "season": "Otoño",
    "degree": "Especialidad"
  },
  "courses": [
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
      "code": "XA0022",
      "name": "Electivo de Especialidad",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "XA0032",
      "name": "Núcleo Gestión para Ingenieros",
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
      "code": "XA0013",
      "name": "Formación Integral de Especialidad",
      "credits": 3,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "CC5901",
      "name": "Práctica Profesional II",
      "credits": 6,
      "requires": [
        "CC4901",
        "CC4401",
        "CC4101"
      ],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
