"use client";

export default function AboutFAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-6">FAQ</h1>
        <div className="space-y-6">
          <div>
            <h2 className="font-medium text-xl">Is membership truly free?</h2>
            <p className="mt-2 text-gray-700">
              Yes. We do not charge any fees for membership. Our services are funded by grants and donations.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-xl">Who can join?</h2>
            <p className="mt-2 text-gray-700">
              Anyone in recovery (or seeking recovery) is welcome to join—no matter where you are in your journey.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-xl">What services do you offer?</h2>
            <p className="mt-2 text-gray-700">
              We offer peer-led support groups, workshops on life skills, relapse prevention, and social events.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
