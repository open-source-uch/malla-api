export function onRequest(context) {

const greet = `{
    "metadata": {
        "name": "Semestre 3",
        "name_en": "3rd Semester"
    },
    "courses": [
        {
            "code": "MA2001",
            "dept": "DIM",
            "signature": "mandatory",
            "requires": [
                "MA1002",
                "MA1102"
            ],
            "opens": [
                "MA2002",
                "IN2201",
                "FI2002",
                "+FQPC1"
            ]
        },
        {
            "code": "MA2601",
            "dept": "DIM",
            "signature": "mandatory",
            "requires": [
                "MA1002",
                "MA1102"
            ],
            "opens": [
                "MA2002",
                "FI2002"
            ]
        },
        {
            "code": "FI2001",
            "dept": "DFI",
            "signature": "mandatory",
            "requires": [
                "FI1100",
                "MA1102",
                "MA1002"
            ],
            "opens": [
                "+FQPC1"
            ]
        },
        {
            "code": "FI2003",
            "dept": "DFI",
            "signature": "mandatory",
            "requires": [
                "FI1100",
                "MA1002"
            ],
            "opens": [
                "FI2002"
            ]
        },
        {
            "code": "IQ2211",
            "dept": "DQB",
            "signature": "mandatory",
            "requires": [],
            "opens": [
                "+FQPC1"
            ]
        }
    ]
}
`;

  return new Response(greet)
}
