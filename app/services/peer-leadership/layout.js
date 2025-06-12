import React from "react";

export const metadata = {
  title: "Peer Leadership – ROH",
};

export default function PeerLeadershipLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/peer-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto p-8 text-white">
          <h1 className="text-4xl font-bold text-outline-blue mb-2">Peer Leadership</h1>
          <p className="text-lg text-outline-blue">
            Step into a leadership role—learn facilitation skills, ethics, and program development so you can serve as a role model and advocate in our community.
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md -mt-8 rounded-t-lg">
        {children}
      </main>
    </div>
  );
}
