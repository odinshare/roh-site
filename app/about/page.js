"use client";

export default function AboutOverview() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold mb-6">About Recovery on the Harbor</h1>
        <p className="mb-4">
          Recovery on the Harbor is a peer recovery support center located in Massachusetts. 
          We provide a safe, welcoming environment for people in recovery. Our services are always free for members.
        </p>
        <p className="mb-4">
          Our mission is to foster community and help individuals build meaningful, substance-free lives.
          We host peer-to-peer support groups, educational workshops, and social events.
        </p>
      </main>
    </div>
  );
}
