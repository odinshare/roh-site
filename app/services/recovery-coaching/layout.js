import React from "react";

export const metadata = {
  title: "Recovery Coaching – ROH",
};

export default function RecoveryCoachingLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/coaching-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto p-8 text-white">
          <h1 className="text-4xl font-bold text-outline-blue mb-2">Recovery Coaching</h1>
          <p className="text-lg text-outline-blue">
            Recovery coaching pairs you with a peer who has walked the same path and is here to guide, motivate, and empower your journey.
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md -mt-8 rounded-t-lg">
        {children}
      </main>
    </div>
  );
}
