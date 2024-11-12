export function onRequest(context) {

let greet: string `{
    id: 2,
    title: "Updating my blog",
    text: "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
    published_at: new Date("2020-10-26"),
  }`

  return new Response(greet)
}
