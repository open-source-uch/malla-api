export function onRequest(context) {

const data = `{
    "metadata": {
        "name": "II Semestre",
        "season": "Primavera"
    },
    "courses": [
        {
            "code": "MA1002",
            "name": "Cálculo Diferencial e Integral",
            "credits": 6,
            "requires": [
                "MA1001"
            ],
            "unlocks": [
                "MA2601",
                "MA2601",
                "FI2001",
                "FI2003"
            ]
        },
        {
            "code": "MA1102",
            "name": "Álgebra Lineal",
            "credits": 6,
            "requires": [
                "MA1101"
            ],
            "unlocks": [
                "MA2001",
                "MA2601",
                "FI2001"
            ]
        },
        {
            "code": "FI1100",
            "name": "Introducción a la Física Moderna",
            "credits": 6,
            "requires": [
                "FI1000",
                "MA1101",
                "MA1001"
            ],
            "unlocks": [
                "FI2001",
                "FI2003"
            ]
        },
        {
            "code": "CC1002",
            "name": "Introducción a la Programación",
            "credits": 6,
            "requires": [],
            "unlocks": []
        },
        {
            "code": "CD1201",
            "name": "Proyecto de Innovación en Ingeniería y Ciencias",
            "credits": 3,
            "requires": [
                "CD1100"
            ],
            "unlocks": [
                "CD2201"
            ]
        },
        {
            "code": "XA0010",
            "name": "Formación Integral",
            "credits": 3,
            "requires": [],
            "unlocks": []
        }
    ]
}`;

  return new Response(data)
}
