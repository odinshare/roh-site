"use client";

export default function GalleryPage() {
  const topics = [
    { slug: "trainings", label: "Trainings" },
    { slug: "pizza-day", label: "Pizza Day" },
    { slug: "community-events", label: "Community Events" },
    { slug: "volunteering", label: "Volunteering" },
    { slug: "health-wellness", label: "Health & Wellness Workshops" },
    { slug: "sober-socials", label: "Sober Socials" },
    { slug: "advocacy-outreach", label: "Advocacy & Outreach Events" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold text-outline-blue text-center mb-6">
          Gallery
        </h1>
        <p className="mb-8 text-outline-blue text-center">
          Browse snapshots organized by event type.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map(({ slug, label }) => (
            <a
              key={slug}
              href={`/gallery/${slug}`}
              className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-lg font-medium text-outline-blue hover:shadow-lg transition"
            >
              {label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}