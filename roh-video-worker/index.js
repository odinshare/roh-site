export default {
  async fetch(request, env, ctx) {
    // 1) If this is a preflight OPTIONS request, immediately return 204 + CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Range, Accept, Content-Type",
          // Expose Content-Range so video can buffer more easily:
          "Access-Control-Expose-Headers": "Content-Length, Accept-Ranges, Content-Range",
        },
      });
    }

    // 2) Otherwise (GET, HEAD, etc), parse the URL path for the file key
    const url = new URL(request.url);
    let key = url.pathname.replace(/^\/+/, ""); // "/roh-bg-desktop.mp4" → "roh-bg-desktop.mp4"

    // 3) If no key was provided, return 404
    if (!key) {
      return new Response("No video specified", { status: 404 });
    }

    try {
      // 4) Try to fetch the R2 object from your bucket binding (ROH_VIDEOS)
      let object = await env.ROH_VIDEOS.get(key);
      if (!object) {
        return new Response("Not found", { status: 404, headers: { "Access-Control-Allow-Origin": "*" } });
      }

      // 5) Build the CORS+video headers
      const headers = {
        "Content-Type": "video/mp4",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Range, Accept, Content-Type",
        "Access-Control-Expose-Headers": "Content-Length, Accept-Ranges, Content-Range",
        // (Optional) add a Cache‐Control if you like:
        // "Cache-Control": "public, max-age=31536000"
      };

      // 6) Return the MP4 body with those headers
      return new Response(object.body, {
        status: 200,
        headers,
      });
    } catch (err) {
      // 7) If something else goes wrong (permissions, bucket missing, etc), still return CORS
      return new Response("Error fetching from R2: " + err.message, {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};