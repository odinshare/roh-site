import React from "react";
import fs from "fs";
import path from "path";

export default function AdvisoryBoardMeetingMinutesPage() {
  const dir = path.join(
    process.cwd(),
    "public",
    "docs",
    "advisory-board-meeting-minutes"
  );

  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .sort();
  } catch {
    files = [];
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl text-center font-bold text-outline-blue mb-4">
        Advisory Board Meeting Minutes
      </h1>
      <p className="mb-4 text-center text-outline-blue">
        Our Advisory Board meets quarterly (or as needed). Download the minutes below.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        {files.map((file) => {
          // Try YYYY-MM-DD first
          let label = file;
          const ymd = file.match(/(\d{4})-(\d{2})-(\d{2})/);
          if (ymd) {
            const [_, year, month, day] = ymd;
            label = new Date(`${year}-${month}-${day}`).toLocaleDateString("en-US", {
              month: "long", day: "numeric", year: "numeric"
            });
          } else {
            // Fallback to M-D-YY or M-D-YYYY at end of filename
            const mdyy = file.match(/(\d{1,2})-(\d{1,2})-(\d{2,4})(?=\.pdf$)/);
            if (mdyy) {
              let [_, m, d, y] = mdyy;
              if (y.length === 2) y = "20" + y;
              // Month is 1-based in JS constructor
              label = new Date(y, parseInt(m,10)-1, parseInt(d,10)).toLocaleDateString("en-US", {
                month: "long", day: "numeric", year: "numeric"
              });
            } else {
              // If all else fails, strip extension and underscores
              label = file.replace(/_/g, " ").replace(/\.pdf$/i, "");
            }
          }

          return (
            <li key={file}>
              <a
                href={`/docs/advisory-board-meeting-minutes/${file}`}
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
