"use client";

import React, { useState } from "react";

// Array of flyer image file paths (put your actual files in public/flyers/)
const flyers = [
  "/flyers/flyer1.png",
  "/flyers/flyer2.png",
  "/flyers/flyer3.png",
  "/flyers/flyer4.png",
  // Add more entries here for each flyer image
];

export default function FlyersPage() {
  // State to track which flyer is currently open in the modal (null if none)
  const [selected, setSelected] = useState(null);

  // When a flyer is clicked, store its URL in `selected` to open the modal
  const openModal = (url) => {
    setSelected(url);
  };

  // Close the modal when background or close button is clicked
  const closeModal = () => {
    setSelected(null);
  };

  return (
    <section className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-[var(--primary-blue)] text-center mb-8">
        Downloadable Flyers
      </h1>

      {/* Grid container with a little spacing between "window panes" */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {flyers.map((src) => (
          <div
            key={src}
            className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition"
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt="Flyer"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Full-screen modal overlay */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            {/* The enlarged flyer */}
            <img
              src={selected}
              alt="Flyer enlarged"
              className="w-full h-auto object-contain rounded-lg"
            />
            {/* Download button */}
            <a
              href={selected}
              download
              className="absolute top-4 right-4 bg-white text-[var(--primary-blue)] font-semibold px-4 py-2 rounded-full shadow"
              onClick={(e) => e.stopPropagation()}
            >
              Download
            </a>
            {/* Close button */}
            <button
              className="absolute top-4 left-4 text-white text-2xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
