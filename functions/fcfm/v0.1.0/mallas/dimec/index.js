export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "Ingeniería Civil Mecánica",
    "site": "https://dimec.uchile.cl/app/ingenieria-civil-mecanica/plan-de-estudios/",
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
    "v5": {
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
