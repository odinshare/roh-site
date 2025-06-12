"use client";
import React, { useState, useEffect } from "react";

export default function GalleryPage() {
  const topics = [
    { slug: "trainings", label: "Trainings" },
    { slug: "pizza-day", label: "Pizza Day" },
    { slug: "community-events", label: "Community Events" },
    { slug: "volunteering", label: "Volunteering" },
    { slug: "health-wellness", label: "Health & Wellness Workshops" },
    { slug: "sober-socials", label: "Sober Socials" },
    { slug: "advocacy-outreach", label: "Advocacy & Outreach Events" },
  ];

  const imageMap = {};
  topics.forEach(({ slug }) => {
    imageMap[slug] = `/images/gallery/${slug}/cover.jpg`;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold text-outline-blue text-center mb-6">
          Gallery
        </h1>
        <p className="mb-8 text-outline-blue text-center">
          Browse snapshots organized by event type.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map(({ slug, label }) => (
            <a
              key={slug}
              href={`/gallery/${slug}`}
              className="relative h-48 text-outline-blue rounded-lg overflow-hidden hover:shadow-lg transition bg-gray-200"
              style={{ backgroundImage: `url(${imageMap[slug]})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <span className="relative text-lg font-medium text-white">{label}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}