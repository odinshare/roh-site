"use client";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl text-outline-blue sm:text-4xl font-semibold text-[var(--primary-blue)]">
          Our Services
        </h2>
        <p className="text-gray-700 text-lg">
          We offer a variety of peer-led supports to help you build a meaningful, substance-free life:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 text-left">
          <div className="space-y-2">
            <h3 className="font-medium text-xl text-outline-blue">Peer Support Groups</h3>
            <p className="text-gray-600">
              Weekly meetings facilitated by individuals in long‐term recovery who understand your journey.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-xl text-outline-blue">Life Skills Workshops</h3>
            <p className="text-gray-600">
              Resume building, budgeting, healthy cooking, and other workshops to help you succeed in daily life.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-xl text-outline-blue">Recovery Coachin</h3>
            <p className="text-gray-600">
              We have Certified Recovery Coaches in house, they are the resource brokers everyone in recovery needs!
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-xl text-outline-blue">Social & Recreational Events</h3>
            <p className="text-gray-600">
              Group outings, coffee hours, game nights, and more—because recovery thrives in community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
