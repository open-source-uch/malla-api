export function onRequest(context) {

const data = `{
    "metadata": {
        "name": "I Semestre",
        "season": "Otoño"
    },
    "courses": [
        {
            "code": "MA1001",
            "name": "Introducción al Cálculo",
            "credits": 6,
            "requires": [],
            "unlocks": [
                "MA1002",
                "FI1100"
            ]
        },
        {
            "code": "MA1101",
            "name": "Introducción al Álgebra",
            "credits": 6,
            "requires": [],
            "unlocks": [
                "MA1102",
                "FI1100"
            ]
        },
        {
            "code": "FI1000",
            "name": "Introducción a la Física Clásica",
            "credits": 6,
            "requires": [],
            "unlocks": [
                "FI1100"
            ]
        },
        {
            "code": "CC1000",
            "name": "Herramientas Computacionales para Ingeniería y Ciencias",
            "credits": 3,
            "requires": [],
            "unlocks": []
        },
        {
            "code": "CD1100",
            "name": "Desafíos de Innovación en Ingeniería y Ciencias",
            "credits": 6,
            "requires": [],
            "unlocks": [
                "CD1201"
            ]
        },
        {
            "code": "BT1211",
            "name": "Aplicaciones de la Biología a la Ingeniería y Ciencias",
            "credits": 3,
            "requires": [],
            "unlocks": []
        }
    ]
}`;

  return new Response(data)
}
