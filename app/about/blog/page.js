"use client";

export default function AboutBlog() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-6">Blog</h1>
        <p className="mb-4">
          Welcome to our blog! Here we share stories of hope, recovery tips, member spotlights, and more.
        </p>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-medium">Getting Started in Recovery</h2>
            <p className="text-gray-700 text-sm">Jan 15, 2025</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-medium">Peer Support & Community</h2>
            <p className="text-gray-700 text-sm">Feb 10, 2025</p>
          </div>
        </div>
      </main>
    </div>
  );
}
