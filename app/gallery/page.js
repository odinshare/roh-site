"use client";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold text-outline-blue text-center mb-6">Gallery</h1>
        <p className="mb-8 text-white-700 text-outline-blue">
          A few snapshots of our members, events, and the Harbor space. (Placeholder images below.)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">Image 1</div>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">Image 2</div>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">Image 3</div>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">Image 4</div>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">Image 5</div>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">Image 6</div>
        </div>
      </main>
    </div>
  );
}
