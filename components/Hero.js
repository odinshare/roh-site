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
        <a
          href="/about"
          className="inline-block bg-[var(--secondary-gold)] text-[var(--primary-blue)] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-30 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
