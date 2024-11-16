export function onRequest(context) {

const data = `{
    "metadata": {
        "name": "III Semestre",
        "season": "Otoño"
    },
    "courses": [
        {
            "code": "MA2001",
            "name": "Cálculo en Varias Variables",
            "credits": 6,
            "requires": [
                "MA1002",
                "MA1102"
            ],
            "unlocks": [
                "MA2002",
                "IN2201",
                "FI2002",
                ""
            ]
        }
    ]
}`;

  return new Response(data)
}
