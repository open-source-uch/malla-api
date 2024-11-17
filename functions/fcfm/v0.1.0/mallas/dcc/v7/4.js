export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "VIII Semestre",
    "season": "Otoño",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "CC4402",
      "name": "Formulación, Evaluación y Gestión de Proyectos",
      "credits": 6,
      "requires": [
        "CC4401",
        "IN2201",
        "CD2201"
      ],
      "unlocks": [
        "CC6907",
        "CC5402"
      ]
    },
    {
      "code": "CC4101",
      "name": "Lenguajes de Programación",
      "credits": 6,
      "requires": [
        "CC3102"
      ],
      "unlocks": [
        "CC5901"
      ]
    },
    {
      "code": "CC4303",
      "name": "Redes",
      "credits": 6,
      "requires": [
        "CC4302"
      ],
      "unlocks": []
    },
    {
      "code": "XA0021",
      "name": "Electivo",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "XA0021",
      "name": "Electivo",
      "credits": 6,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "EI1090",
      "name": "Exámen de Suficiencia en Inglés I",
      "credits": 0,
      "requires": [],
      "unlocks": []
    },
    {
      "code": "CC5900",
      "name": "Taller de Práctica Profesional II",
      "credits": 1,
      "requires": [
        "CC4901"
      ],
      "unlocks": [
        "CC5901"
      ]
    }
  ]
}`;

  return new Response(data)
}
