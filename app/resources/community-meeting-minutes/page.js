import React from "react";
import fs from "fs";
import path from "path";

export default function CommunityMeetingMinutesPage() {
  const dir = path.join(process.cwd(), "public", "docs", "community-meeting-minutes");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .sort();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl text-center font-bold text-outline-blue mb-4">
        Community Meeting Minutes
      </h1>
      <p className="mb-4 text-center text-outline-blue">
        Below you’ll find PDF downloads of all community meeting minutes.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        {files.map((file) => {
          const match = file.match(/(\d{4})-(\d{2})-(\d{2})/);
          let label = file.replace(/_/g, " ").replace(".pdf", "");
          if (match) {
            const [_, year, month, day] = match;
            label = new Date(`${year}-${month}-${day}`).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });
          }
          return (
            <li key={file}>
              <a
                href={`/docs/community-meeting-minutes/${file}`}
                className="text-blue-600 underline"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
