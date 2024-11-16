export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "Mallas Curriculares Facultad de Ciencias Físicas y Matemáticas",
    "year": "2019",
    "source": "https://ingenieria.uchile.cl/escuela/pregrado/mallas-curriculares/2018"
  },
  "mallas": {
    "03": {
      "name": [ "Licenciatura en Ciencias, mención Astronomía" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:4eb352f1-efee-4c12-81c5-5687aa0183c1/Malla%20Geofisica%202022%20%20-%20Taller%20de%20practica,%2028%20julio.jpg" ]
    },
    "05": {
      "name": [ "Ingeniería Civil en Computación" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:603c734d-53d6-4717-8d73-491cc026b0fb/_Malla%20Civil%20Computaci%C3%B3n%202022,%20Taller%20de%20pr%C3%A1ctica,%2028%20de%20julio.jpg" ]
    },
    "06": {
      "name": [
        "Ingeniería Civil: Estructura, Construcción y Geotecnia",
        "Ingeniería Civil: Hidráulica, Sanitaria y Ambiental",
        "Ingeniería Civil: Transporte"
      ],
      "malla": [
        "https://ingenieria.uchile.cl/dam/jcr:3b416c2e-69a5-4d7f-afd1-f927d03e005e/Malla%20Civil%20Estructura%202022.-%20Taller%20de%20proyecto-28%20Julio%20.jpg",
        "https://ingenieria.uchile.cl/dam/jcr:aa2e2aa4-64c0-4c54-a773-decdc981dc42/Malla%20Civil%20Hidr%C3%A1ulica%202022,Taller%20de%20proyecto,28%20julio%20.jpg",
        "https://ingenieria.uchile.cl/dam/jcr:71b63842-5442-48e6-a0e3-43a0d2058f92/Malla%20Civil%20Transporte%202022,%20taller%20de%20pr%C3%A1ctica,%2028%20de%20julio.jpg"
       ]
    },
    "10": {
      "name": [ "Ingeniería Civil Eléctrica" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:2ef01252-50af-46db-9fdb-d1ed9571401b/Malla%20Civil%20Electrica%202022,%20Taller%20de%20proyecto.28%20julio.jpg"  ]
    },
    "13": {
      "name": [ "Licenciatura en Ciencias, mención Física" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:937c4b6f-dab8-4373-8f6a-91256b019749/Malla%20Licenciatura%20en%20Ciencias%20con%20Menci%C3%B3n%20F%C3%ADsica,%20a%C3%B1o%202021.jpg" ]
    },
    "15": {
      "name": [ "Licenciatura en Ciencias, mención Geofísica" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:4eb352f1-efee-4c12-81c5-5687aa0183c1/Malla%20Geofisica%202022%20%20-%20Taller%20de%20practica,%2028%20julio.jpg" ]
    },
    "16": {
      "name": [ "Geología" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:0c565237-1fad-4866-bb0f-788243ad5a67/Malla%20Geologia%20Taller%20de%20pr%C3%A1ctica,%2028%20julio.jpg"  ]
    },
    "19": {
      "name": [ "Ingeniería Civil Industrial" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:42081089-78f6-4c71-aafa-c4f1cd54dac0/Malla%20Civil%20Industrial%202022,%20Taller%20de%20Pr%C3%A1ctica%20I,%2028%20julio.jpg"  ]
    },
    "21": {
      "name": [ "Ingeniería Civil Matemática" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:81d8f39f-7951-4655-a150-e50f3b3dc67d/Malla%20Civil%20Matem%C3%A1tica%202022,%20taller%20de%20proyecto,%2028%20de%20julio.jpg" ]
    },
    "22": {
      "name": [ "Ingeniería Civil Mecánica" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:cf52c2cc-375c-4ce2-aa18-499ffb76f73b/Malla%20Civil%20Mecanica%202022%20,%20Taller%20de%20Pr%C3%A1ctica%2028%20julio%20.jpg" ]
    },
    "23": {
      "name": [ "Ingeniería Civil Minas" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:eeeb556b-c42a-4e0c-90a7-eeeaeff97a38/Malla%20Minas%202022%20Requisitos%20-%20Taller%20de%20practicas-%2028%20de%20julio%20(1).jpg" ]
    },
    "25": {
      "name": [ "Ingeniería Civil en Biotecnología" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:9f5a197a-d38a-4bc7-9d34-48013b74a153/Malla%20Biotecnologia2022%20%20-Taller%20de%20Practica,%2028%20de%20julio.jpg" ]
    },
    "26": {
      "name": [ "Ingeniería Civil Química" ],
      "malla": [ "https://ingenieria.uchile.cl/dam/jcr:e50033b7-5a83-42cd-9227-e567a5600aa8/Malla%20Quimica%202022,%20taller%20de%20pr%C3%A1ctica,%2028%20julio.jpg" ]
    }
  }
}`;

  return new Response(data)
}
