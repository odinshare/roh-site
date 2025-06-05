export default {
  async fetch(request, env, ctx) {
    // Parse the incoming URL
    const url = new URL(request.url);

    // Remove the leading slash from the pathname to get the R2 object key
    // e.g. "/roh-bg-mobile.mp4" → "roh-bg-mobile.mp4"
    let key = url.pathname.replace(/^\/+/, "");

    // If the user somehow requested the root ("/"), return an index or a 404
    if (key === "") {
      return new Response("No video specified", { status: 404 });
    }

    try {
      // Attempt to get the object from R2
      let object = await env.ROH_VIDEOS.get(key);

      if (!object) {
        return new Response("Not found", { status: 404 });
      }

      // Build response headers with CORS
      const headers = {
        "Content-Type": "video/mp4",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Range, Accept, Content-Type",
        "Access-Control-Expose-Headers": "Content-Length, Accept-Ranges, Content-Range",
      };

      // If this is a preflight OPTIONS request, return only headers
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers,
        });
      }

      // Return the video with the proper headers
      return new Response(object.body, {
        status: 200,
        headers,
      });
    } catch (err) {
      // If anything goes wrong—permissions, bucket not found, etc.—return a 500
      return new Response("Error fetching from R2: " + err.message, {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};