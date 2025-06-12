import fs from "fs";
import path from "path";
import React from "react";

// Pre-render these topic slugs
export async function generateStaticParams() {
  const topics = [
    "trainings",
    "pizza-day",
    "community-events",
    "volunteering",
    "health-wellness",
    "sober-socials",
    "advocacy-outreach"
  ];
  return topics.map((slug) => ({ slug }));
}

export default function GalleryCategoryPage({ params }) {
  const { slug } = params;
  const dir = path.join(process.cwd(), "public", "images", "gallery", slug);
  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|gif)$/i.test(f))
      .sort();
  } catch {
    files = [];
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-outline-blue mb-6">
        {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      {files.length === 0 ? (
        <p className="text-center text-gray-500">No photos uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {files.map((file) => (
            <img
              key={file}
              src={`/images/gallery/${slug}/${file}`}
              alt=""
              className="w-full h-48 object-cover rounded-lg shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
}
