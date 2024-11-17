export function onRequest(context) {

const data = `{
  "metadata": {
    "name": "Plan Común",
    "site": "https://www.dii.uchile.cl/~webpgrado2/plan-de-estudios/plan-comun/",
    "comment": "For some reason the DII gives Plan Común a website of its own."
  },
  "version": {
    "v3": {
      "semesters": 4,
      "degrees": []
    },
    "v7": {
      "semesters": 4,
      "degrees": []
    }
  }
}`;

  return new Response(data)
}