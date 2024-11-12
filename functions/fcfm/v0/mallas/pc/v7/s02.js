export function onRequest(context) {

const greet = `{
    "metadata": {
        "name": "Semestre 2",
        "name_en": "2nd Semester"
    },
    "courses": [
        {
            "code": "MA1002",
            "dept": "DIM",
            "signature": "mandatory",
            "requires": [
                "MA1001"
            ],
            "opens": [
                "MA2001",
                "MA2601",
                "FI2001",
                "FI2003"
            ]
        },
        {
            "code": "MA1102",
            "dept": "DIM",
            "signature": "mandatory",
            "requires": [
                "MA1101"
            ],
            "opens": [
                "MA2001",
                "MA2601",
                "FI2001"
            ]
        },
        {
            "code": "FI1100",
            "dept": "DFI",
            "signature": "mandatory",
            "requires": [
                "FI1000",
                "MA1101",
                "MA1001"
            ],
            "opens": [
                "FI2001",
                "FI2003"
            ]
        },
        {
            "code": "CC1002",
            "dept": "DCC",
            "signature": "mandatory",
            "requires": [],
            "opens": []
        },
        {
            "code": "CD1201",
            "dept": "+CD",
            "signature": "mandatory",
            "requires": [
                "CD1100"
            ],
            "opens": [
                "CD2201"
            ]
        },
        {
            "code": "+FIPC1",
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
