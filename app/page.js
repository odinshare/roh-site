"use client";

import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <Services />

      {/* 3. About Section */}
      <About />

      {/* 4. Contact Section */}
      <Contact />
    </>
  );
}
