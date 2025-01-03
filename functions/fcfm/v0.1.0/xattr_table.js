export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "Extended Attributes Table",
    "comment": "If there is something strange going on in the malla, it can be translated here."
  },
  "attributes": {
    "00": {
      "name": "Wildcard",
      "comment": "Blocks of mallas that can be satisfied with a subset of courses.",
      "ucampus_code": null,
      "prefix": {
        "ucampus": [],
        "courses": []
      },
      "xattr": {
        "10": {
          "name_array": [ "Formación Integral" ],
          "dept_array": [],
          "courses_array": []
        },
        "11": {
          "name_array": [ "Formación Integral Plan Común" ],
          "dept_array": [ "DR", "EH", "FG", "EI", "FT"],
          "courses_array": []
        },
        "12": {
          "name_array": [ "Formación Integral Licenciatura" ],
          "dept_array": [ "EH", "FG" ],
          "courses_array": []
        },
        "13": {
          "name_array": [ "Formación Integral Especialidad" ],
          "dept_array": [],
          "courses_array": []
        },
        "20": {
          "name_array": [ "Electivo" ],
          "dept_array": [],
          "courses_array": []
        },
        "21": {
          "name_array": [ "Electivo Licenciatura" ],
          "dept_array": [],
          "courses_array": []
        },
        "22": {
          "name_array": [ "Electivo Especialidad" ],
          "dept_array": [],
          "courses_array": []
        },
        "23": {
          "name_array": [ "Electivo de Línea de Especialización" ],
          "dept_array": [],
          "courses_array": []
        },
        "24": {
          "name_array": [ "Especialización" ],
          "dept_array": [],
          "courses_array": []
        },
        "30": {
          "name_array": [ "Equivalencia de desbloqueos" ],
          "dept_array": [],
          "courses_array": []
        },
        "31": {
          "name_array": [ "Termodinámica", "Termodinámica Química" ],
          "dept_array": [ "FI", "IQ" ],
          "courses_array": [ "FI2004", "IQ2212" ]
        },
        "32": {
          "name_array": [ "Núcleo para Gestión de Ingenieros" ],
          "dept_array": [ "CC" ],
          "courses_array": [ "CC5601", "CC5602" ]
        },
        "33": {
          "name_array": [ "Optimización", "Modelamiento y Optimización" ],
          "dept_array": [ "MA", "IN" ],
          "courses_array": [ "MA3701", "IN3171" ]
        },
        "34": {
          "name_array": [ "Formación Especializada de Licenciatura" ],
          "dept_array": [ "GL", "CI", "CI" ],
          "courses_array": [ "GL3101", "CI3242", "CI3251" ]
        },
        "35": {
          "name_array": [ "Núcleo Línea de Especialización" ],
          "dept_array": [ "EL" ],
          "courses_array": [ "EL4103", "EL4105", "EL4106", "EL4107" ]
        },
        "36": {
          "name_array": [ "Laboratorio de Línea de Especialización" ],
          "dept_array": [ "EL" ],
          "courses_array": [ "EL5202", "EL5204", "EL5205", "EL5206", "EL5207" ]
        },
        "37": {
          "name_array": [ "Probabilidades y Estadísticas", "Probabilidades" ],
          "dept_array": [ "MA" ],
          "courses_array": [ "MA3403", "MA3401" ]
        },
        "40": {
          "name_array": "Equivalencia de requisitos",
          "dept_array": [],
          "courses_array": []
        }
      }
    },
    "01": {
      "name": "Credits requirements (Base-36)",
      "comment": "Blocks of mallas that need a minimum of approved courses.",
      "ucampus_code": null,
      "prefix": {
        "ucampus": [],
        "courses": [ "CR" ]
      },
      "xattr": {}
    },
    "03": {
      "name": "Departamento de Astronomía",
      "comment": "",
      "ucampus_code": 3,
      "prefix": {
        "ucampus": [ "AS" ],
        "courses": [ "AS" ]
      },
      "xattr": {}
    },
    "05": {
      "name": "Departamento de Ciencias de la Computación",
      "comment": "",
      "ucampus_code": 5,
      "prefix": {
        "ucampus": [ "CC" ],
        "courses": [ "CC" ]
      },
      "xattr": {}
    },
    "06": {
      "name": "Departamento de Ingeniería Civil",
      "comment": "",
      "ucampus_code": 6,
      "prefix": {
        "ucampus": [ "CI" ],
        "courses": [ "CI" ]
      },
      "xattr": {}
    },
    "07": {
      "name": "Área de Deportes, Educación Física y Expresiones Artísticas",
      "comment": "",
      "ucampus_code": 7,
      "prefix": {
        "ucampus": [ "DR" ],
        "courses": [ "DR" ]
      },
      "xattr": {}
    },
    "08": {
      "name": "Estudios Transversales en Humanidades para las Ingenierías y Ciencias",
      "comment": "",
      "ucampus_code": 8,
      "prefix": {
        "ucampus": [ "EH" ],
        "courses": [ "EH" ]
      },
      "xattr": {}
    },
    "09": {
      "name": "Área de Idiomas, Escuela de Ingeniería",
      "comment": "",
      "ucampus_code": 9,
      "prefix": {
        "ucampus": [ "EI" ],
        "courses": [ "EI", "FT", "TESTD" ]
      },
      "xattr": {}
    },
    "10": {
      "name": "Departamento de Ingeniería Eléctrica",
      "comment": "",
      "ucampus_code": 10,
      "prefix": {
        "ucampus": [ "EL" ],
        "courses": [ "EL" ]
      },
      "xattr": {}
    },
    "12": {
      "name": "Escuela de Ingeniería y Ciencias",
      "comment": "",
      "ucampus_code": 12,
      "prefix": {
        "ucampus": [ "ES", "EI" ],
        "courses": [ "MOV", "CD", "IE" ]
      },
      "xattr": {}
    },
    "13": {
      "name": "Departamento de Física",
      "comment": "",
      "ucampus_code": 13,
      "prefix": {
        "ucampus": [ "FI" ],
        "courses": [ "FI" ]
      },
      "xattr": {}
    },
    "15": {
      "name": "Departamento de Geofísica",
      "comment": "",
      "ucampus_code": 15,
      "prefix": {
        "ucampus": [ "GF" ],
        "courses": [ "GF" ]
      },
      "xattr": {}
    },
    "16": {
      "name": "Departamento de Geología",
      "comment": "",
      "ucampus_code": 16,
      "prefix": {
        "ucampus": [ "GL" ],
        "courses": [ "GL" ]
      },
      "xattr": {}
    },
    "19": {
      "name": "Departamento de Ingeniería Industrial",
      "comment": "",
      "ucampus_code": 19,
      "prefix": {
        "ucampus": [ "IN" ],
        "courses": [ "IN" ]
      },
      "xattr": {}
    },
    "21": {
      "name": "Departamento de Ingeniería Matemática",
      "comment": "",
      "ucampus_code": 21,
      "prefix": {
        "ucampus": [ "MA" ],
        "courses": [ "MA" ]
      },
      "xattr": {}
    },
    "22": {
      "name": "Departamento de Ingeniería Mecánica",
      "comment": "",
      "ucampus_code": 22,
      "prefix": {
        "ucampus": [ "ME" ],
        "courses": [ "ME" ]
      },
      "xattr": {
        "40": {
          "name_array": [ "Equivalencia de requisitos" ],
          "dept_array": [],
          "courses_array": []
        },
        "41": {
          "name_array": ["IN3141/MA3403/MA3401"],
          "dept_array": ["IN", "MA"],
          "courses_array": ["IN3141", "XA0037"]
        },
        "42": {
          "name_array": ["IN3171/IQ3111/MA3701"],
          "dept_array": ["IN", "IQ", "MA"],
          "courses_array": ["XA0033", "IQ3111"]
        },
        "43": {
          "name_array": ["IN3242/MA3403"],
          "dept_array": ["IN", "MA"],
          "courses_array": ["IN3242", "MA3403"]
        },
        "44": {
          "name_array": ["ME4110/ME4130/ME4140/ME4150/ME4160"],
          "dept_array": ["ME"],
          "courses_array": ["ME4110", "ME4130", "ME4140", "ME4150", "ME4160"]
        }
      }
    },
    "23": {
      "name": "Departamento de Ingeniería de Minas",
      "comment": "",
      "ucampus_code": 23,
      "prefix": {
        "ucampus": [ "MI" ],
        "courses": [ "MI" ]
      },
      "xattr": {}
    },
    "25": {
      "name": "Pseudo-departamento de Biolotecnología",
      "comment": "It belongs to Departamento de Ingeniería Química y Biotecnología (QB)",
      "ucampus_code": 307,
      "prefix": {
        "ucampus": [ "QB" ],
        "courses": [ "BT" ]
      },
      "xattr": {}
    },
    "26": {
      "name": "Pseudo-departamento de Química",
      "comment": "It belongs to Departamento de Ingeniería Química y Biotecnología, but the code used to belong to Departamento de Química Básica before the merge.",
      "ucampus_code": 307,
      "prefix": {
        "ucampus": [ "QB" ],
        "courses": [ "IQ" ]
      },
      "xattr": {}
    },
    "27": {
      "name": "Pseudo-departamento de Ciencias de los Materiales",
      "comment": "The code used to belong to Escuela de Ingeniería, which is now deprecated.",
      "ucampus_code": 306,
      "prefix": {
        "ucampus": [ "CM" ],
        "courses": [ "CM" ]
      },
      "xatrr": {}
    }
  }
}`;

  return new Response(data)
}
