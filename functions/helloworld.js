export function onRequest(context) {

const greet = `{
    id: 2,
    title: "Updating my blog",
    text: "It's my second blog post!",
    published_at: new Date("2020-10-26"),
}`;

  return new Response(greet)
}
