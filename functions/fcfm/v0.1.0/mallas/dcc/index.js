export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "Ingeniería Civil en Computación",
    "site": "https://www.dcc.uchile.cl/pregrado/malla",
    "comment": "It's a really informative website, worth checking."
  },
  "version": {
    "v3": {
      "semesters": 7,
      "degrees": [
        "licenciatura",
        "especialidad"
      ]
    },
    "v7": {
      "semesters": 7,
      "degrees": [
        "licenciatura",
        "especialidad"
      ]
    }
  }
}`;

  return new Response(data)
}
