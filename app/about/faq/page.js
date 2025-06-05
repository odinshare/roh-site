"use client";

export default function AboutFAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl text-outline-blue font-semibold mb-6">FAQ</h1>
        <div className="space-y-6">
          <div className="bg-black/50 p-4 rounded-lg">
            <h2 className="font-medium text-outline-blue text-white text-xl">Is membership truly free?</h2>
            <p className="mt-2 text-gray-200">
              Yes. We do not charge any fees for membership. Our services are funded by grants and donations.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg">
            <h2 className="font-medium text-outline-blue text-white text-xl">Who can join?</h2>
            <p className="mt-2 text-gray-200">
              The center is open and free to anyone in recovery and anyone who’s affected by addiction—family members, allies. There are no fees for membership.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg">
            <h2 className="font-medium text-outline-blue text-white text-xl">What services do you offer?</h2>
            <p className="mt-2 text-gray-200">
              We offer peer-led support groups, workshops on life skills, relapse prevention, and social events.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg">
            <h2 className="font-medium text-outline-blue text-white text-xl">Where are you located?</h2>
            <p className="mt-2 text-gray-200">
              Recovery on the Harbor is at 979 Bennington Street, East Boston, MA.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg">
            <h2 className="font-medium text-outline-blue text-white text-xl">What are your hours?</h2>
            <p className="mt-2 text-gray-200">
              Sunday: 11 a.m. to 9 p.m.<br />
              Monday: 8 a.m. to 9 p.m.<br />
              Tuesday: 7 a.m. to 8 p.m.<br />
              Wednesday: 8 a.m. to 9 p.m.<br />
              Thursday: 7 a.m. to 7 p.m.<br />
              Friday: 8 a.m. to 9 p.m.<br />
              Saturday: Closed
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
