export function onRequest(context) {

const greet = `{
    "metadata": {
        "name": "Semestre 1",
        "name_en": "1st Semester"
    },
    "courses": [
        {
            "code": "MA1001",
            "dept": "DIM",
            "signature": "mandatory",
            "requires": [],
            "opens": [
                "MA1002",
                "FI1100"
            ]
        },
        {
            "code": "MA1101",
            "dept": "DIM",
            "signature": "mandatory",
            "requires": [],
            "opens": [
                "MA1102",
                "FI1100",
                "CC3101"
            ]
        },
        {
            "code": "FI1000",
            "dept": "DFI",
            "signature": "mandatory",
            "requires": [],
            "opens": [
                "FI1100"
            ]
        },
        {
            "code": "CC1000",
            "dept": "DCC",
            "signature": "mandatory",
            "requires": [],
            "opens": []
        },
        {
            "code": "CD1100",
            "dept": "+CD",
            "signature": "mandatory",
            "requires": [],
            "opens": [
                "CD1201"
            ]
        },
        {
            "code": "BT1211",
            "dept": "DQB",
            "signature": "mandatory",
            "requires": [],
            "opens": []
        }
    ]
}
`;

  return new Response(greet)
}
