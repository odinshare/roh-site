export default {
  async fetch(request, env, ctx) {
    // 1) Handle preflight CORS (OPTIONS) right away
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Range, Accept, Content-Type",
          "Access-Control-Expose-Headers": "Content-Length, Accept-Ranges, Content-Range",
        },
      });
    }

    // 2) For all non-OPTIONS requests, parse the URL and key
    const url = new URL(request.url);
    let key = url.pathname.replace(/^\/+/, ""); // e.g. "/roh-bg-mobile.mp4" → "roh-bg-mobile.mp4"

    // 3) If no key was specified (i.e. the root path), return a 404
    if (key === "") {
      return new Response("No video specified", { status: 404 });
    }

    try {
      // 4) Attempt to fetch the object from the bound R2 bucket
      let object = await env.ROH_VIDEOS.get(key);
      if (!object) {
        return new Response("Not found", { status: 404 });
      }

      // 5) Build response headers (including CORS) once the object is found
      const headers = {
        "Content-Type": "video/mp4",
        "Access-Control-Allow-Origin": "*",               // Allow any origin to fetch
        "Access-Control-Allow-Methods": "GET, OPTIONS",   // Allowed methods
        "Access-Control-Allow-Headers": "Range, Accept, Content-Type",
        "Access-Control-Expose-Headers": "Content-Length, Accept-Ranges, Content-Range",
        // Optionally, you can add a Cache-Control header:
        // "Cache-Control": "public, max-age=31536000"
      };

      // 6) Return the video data with the above headers
      return new Response(object.body, {
        status: 200,
        headers,
      });
    } catch (err) {
      // 7) If something goes wrong (permissions, bucket missing, etc.), return 500 + CORS header
      return new Response("Error fetching from R2: " + err.message, {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};