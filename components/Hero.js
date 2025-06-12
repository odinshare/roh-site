"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3rem)] flex items-center justify-center text-center px-4 sm:px-8">
      <div className="text-white text-outline-blue max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
          Recovery on the Harbor
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl drop-shadow-md">
          A Peer Recovery Support Center in<br />
          East Boston, Massachusetts.<br />
          Membership is free—always.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="/services/volunteering"
            className="bg-[var(--secondary-black)] text-[var(--primary-blue)] font-semibold px-4 py-2 rounded-lg shadow hover:bg-black/90 transition"
          >
            Volunteering
          </a>
          <a
            href="/services/peer-leadership"
            className="bg-[var(--secondary-black)] text-[var(--primary-blue)] font-semibold px-4 py-2 rounded-lg shadow hover:bg-black/90 transition"
          >
            Peer Leadership
          </a>
          <a
            href="/services/recovery-coaching"
            className="bg-[var(--secondary-black)] text-[var(--primary-blue)] font-semibold px-4 py-2 rounded-lg shadow hover:bg-black/90 transition"
          >
            Recovery Coaching
          </a>
          <a
            href="/services/community-events"
            className="bg-[var(--secondary-black)] text-[var(--primary-blue)] font-semibold px-4 py-2 rounded-lg shadow hover:bg-black/90 transition"
          >
            Community Events
          </a>
        </div>
      </div>
    </section>
  );
}
