import React from "react";

export const metadata = {
  title: "Community Meeting Minutes – ROH",
};

export default function CommunityMeetingLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner with semi-transparent overlay */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/community-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto p-8 text-white">
          <h1 className="text-4xl text-outline-blue text-center font-bold mb-2">Community Meeting Minutes</h1>
          <p className="text-lg text-center text-outline-blue">
            At Recovery on the Harbor, our community meetings are the true heartbeat of the center—owned, shaped, and driven by its members. <br/>
            Every Wednesday at 12:30 PM, peers gather in a safe, non-clinical space where lived experience leads the way. If members want to add a new support group, change programming, celebrate personal milestones, or raise a concern, this is where it starts. <br/>
            Information flows in both directions: members bring ideas and feedback, the group discusses and votes or polls as needed, and decisions move forward transparently. By centering peer-to-peer facilitation—led by individuals in long-term recovery—we ensure that every voice matters, wins are recognized publicly, and the center continually evolves in direct response to the community it serves.
          </p>
        </div>
      </div>

      {/* Page content */}
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md -mt-8 rounded-t-lg">
        {children}
      </main>
    </div>
  );
}
