// index.js

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Strip off the "/some-path/" prefix to get the object key.
    // Example: if request is "https://videos.recoveryontheharbor.com/roh-bg-desktop.mp4",
    // url.pathname === "/roh-bg-desktop.mp4", so key = "roh-bg-desktop.mp4".
    const key = url.pathname.slice(1); // remove leading "/"

    // Attempt to get the object from our R2 bucket
    const obj = await env.ROH_VIDEOS.get(key);
    if (!obj) {
      return new Response("Not found", { status: 404 });
    }

    // Return the raw body with appropriate headers.
    return new Response(obj.body, {
      headers: {
        "Content-Type": "video/mp4",
        // Optionally add caching headers:
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }
};