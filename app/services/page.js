"use client";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-6">Our Services</h1>
        <ul className="space-y-6 list-disc list-inside">
          <li>
            <span className="font-medium">Peer Support Groups:</span> Weekly meetings facilitated by individuals in long‐term recovery.
          </li>
          <li>
            <span className="font-medium">Life Skills Workshops:</span> Resume building, budgeting, healthy cooking, and more.
          </li>
          <li>
            <span className="font-medium">Counseling Referrals:</span> We partner with local counseling agencies for sliding‐scale services.
          </li>
          <li>
            <span className="font-medium">Social & Recreational Events:</span> Group outings, coffee hours, game nights, etc., to foster community.
          </li>
          <li>
            <span className="font-medium">Educational Seminars:</span> Guest speakers, health education, legal rights, and more.
          </li>
        </ul>
      </main>
    </div>
  );
}
