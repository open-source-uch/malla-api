export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "V Semestre",
    "season": "Primavera",
    "degree": "Licenciatura"
  },
  "courses": [
    {
      "code": "MA3403",
      "name": "Probabilidades y Estadísticas",
      "credits": 6,
      "requires": [
        "MA2001"
      ],
      "unlocks": [
        "CC4102"
      ]
    },
    {
      "code": "CC3501",
      "name": "Modelación y Computación Gráfica para Ingenieros",
      "credits": 6,
      "requires": [
        "MA2001",
        "MA2601",
        "CC1002",
        "FI2001"
      ],
      "unlocks": []
    },
    {
      "code": "CC3001",
      "name": "Algoritmos y Estructuras de Datos",
      "credits": 6,
      "requires": [
        "CC1002"
      ],
      "unlocks": [
        "CC5205",
        "CC3201",
        "CC3002",
        "CC3301",
        "CC4102"      
      ]
    },
    {
      "code": "CC3101",
      "name": "Matemáticas Discretas para la Computación",
      "credits": 6,
      "requires": [
        "MA1101",
        "CC1002"
      ],
      "unlocks": [
        "CC3102"
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
      "code": "XA0012",
      "name": "Formación Integral",
      "credits": 3,
      "requires": [],
      "unlocks": []
    }
  ]
}`;

  return new Response(data)
}
