/**
 * A very minimal Worker that:
 *  - Listens for requests on videos.recoveryontheharbor.com/*
 *  - Strips off the leading slash to get the object key (e.g. "/roh-bg-mobile.mp4" → "roh-bg-mobile.mp4")
 *  - Calls R2.get(key) on the bound bucket (binding = "ROH_VIDEOS")
 *  - Returns the object, with correct headers, or a 404 if missing
 */

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
      // Note: "ROH_VIDEOS" must match the binding in wrangler.toml
      let object = await env.ROH_VIDEOS.get(key);

      if (!object) {
        return new Response("Not found", { status: 404 });
      }

      // Return the object as a Response. We set "Content-Type: video/mp4" explicitly.
      // You can also forward all headers by doing: `Response.object(body, {headers: object.httpMetadata})`
      return new Response(object.body, {
        status: 200,
        headers: {
          "Content-Type": "video/mp4",
          // You can also add `Cache-Control` if desired, e.g.:
          // "Cache-Control": "public, max-age=31536000"
        },
      });
    } catch (err) {
      // If anything goes wrong—permissions, bucket not found, etc.—return a 500
      return new Response("Error fetching from R2: " + err.message, {
        status: 500,
      });
    }
  },
};