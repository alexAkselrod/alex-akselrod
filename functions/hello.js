export function onRequest (contect) {
    const { request } = context;
    console.log(`Request came from ${request.url}`)
    
    return new Response ("Hello, world!")
}
