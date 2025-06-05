"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="pt-24 pb-12 bg-gray-50"> {/* pt-24 to push below a fixed header */}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl text-outline-blue font-bold mb-2">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have questions or want to connect? Reach out to our team below.
        </p>

        {/* ───────────────── Team Cards ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Member Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
              <img
                src="/assets/headshots/john-Smith.jpg"
                alt="John Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl text-outline-blue font-semibold">John Smith</h2>
            <p className="text-gray-600 mt-1">Peer Recovery Coach</p>
            <a
              href="mailto:JSmith@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              JSmith@NorthSuffolk.org
            </a>
          </div>

          {/* Add more cards below, following the same pattern */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
              <img
                src="/assets/headshots/sam-Smith.jpg"
                alt="Jane Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl text-outline-blue font-semibold">Jane Doe</h2>
            <p className="text-gray-600 mt-1">Program Coordinator</p>
            <a
              href="mailto:jdoe@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              jdoe@NorthSuffolk.org
            </a>
          </div>

          {/* …repeat for each team member… */}
        </div>

        {/* ────────────── Toggle Contact Form Button ────────────── */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
          >
            {showForm ? 'Hide Contact Form' : 'Show Contact Form'}
          </button>
        </div>

        {/* ─────────────── Contact Form (Collapsible) ─────────────── */}
        {showForm && (
          <form
            className="mt-8 bg-white p-6 rounded-lg shadow-lg space-y-6"
            action="/api/send-contact"
            method="post"
          >
            <div>
              <label htmlFor="name" className="block text-gray-800 font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-800 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-800 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Type your message here..."
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
