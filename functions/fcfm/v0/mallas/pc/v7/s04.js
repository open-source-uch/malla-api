export function onRequest(context) {

const greet = `{
    "metadata": {
        "name": "Semestre 4",
        "name_en": "4th Semester"
    },
    "courses": [
        {
            "code": "MA2002",
            "dept": "DIM",
            "signature": "mandatory",
            "requires": [
                "MA2001",
                "MA2601"
            ],
            "opens": []
        },
        {
            "code": "IN2201",
            "dept": "DII",
            "signature": "mandatory",
            "requires": [
                "MA2001"
            ],
            "opens": []
        },
        {
            "code": "FI2002",
            "dept": "DFI",
            "signature": "mandatory",
            "requires": [
                "MA2001",
                "MA2601",
                "FI2003"
            ],
            "opens": [
                "+FQPC1"
            ]
        },
        {
            "code": "+FQPC1",
            "dept": "+FQ",
            "signature": "mandatory",
            "requires": [
                "IQ2211",
                "FI2001",
                "MA2001"
            ],
            "opens": []
        },
        {
            "code": "CD2201",
            "dept": "+CD",
            "signature": "mandatory",
            "requires": [
                "CD1201"
            ],
            "opens": []
        },
        {
            "code": "+FIPC2",
            "dept": "+FI",
            "signature": "elective",
            "requires": [],
            "opens": []
        }
    ]
}
`;

  return new Response(greet)
}
