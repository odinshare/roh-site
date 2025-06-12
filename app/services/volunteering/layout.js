import React from "react";

export const metadata = {
  title: "Volunteering – ROH",
};

export default function VolunteeringLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/volunteer-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto p-8 text-white">
          <h1 className="text-4xl font-bold text-outline-blue mb-2">Volunteering</h1>
          <p className="text-lg text-outline-blue">
            Share your strengths—volunteer to lead activities, host recovery workshops, or help run sober social events. Everyone has a gift to offer.
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md -mt-8 rounded-t-lg">
        {children}
      </main>
    </div>
  );
}
