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

        {/* ────────── Recovery Support Hotline ────────── */}
        <section id="hotline" className="mb-8 scroll-mt-24">
          <h2 className="text-2xl text-outline-blue font-semibold mb-2">
            Recovery Support Hotline
          </h2>
          <p className="mb-2 text-gray-900">
            Call or Text{' '}
            <a href="tel:1-844-677-3377" className="text-blue-600 underline">
              1-844-NSPEERS (844-677-3377)
            </a>
          </p>
          <p className="mb-4 text-gray-900">
            Support for anyone affected by addiction. Any time. Any place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Who's Calling */}
            <div>
              <h3 className="text-xl font-semibold text-outline-blue mb-2">
                Who&rsquo;s Calling
              </h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-900">
                <li>
                  <strong>People in Recovery:</strong> Seeking peer support, meeting referrals,
                  shelter info, or community recovery services.
                </li>
                <li>
                  <strong>Family, Friends & Loved Ones:</strong> Looking for guidance, support,
                  or resources when a loved one is affected by substance use disorder.
                </li>
                <li>
                  <strong>People Considering Treatment:</strong> Information about treatment
                  options, detox referrals, meetings, shelter, or other recovery services.
                </li>
                <li>
                  <strong>Translation Capability:</strong> Assistance is available in multiple
                  languages.
                </li>
              </ul>
            </div>
            {/* Who's Answering */}
            <div>
              <h3 className="text-xl font-semibold text-outline-blue mb-2">
                Who&rsquo;s Answering
              </h3>
              <p className="text-gray-900">
                Our experienced Recovery Coaches—peers in long-term recovery—understand the
                challenges of substance use disorder and are equipped to provide emotional,
                social, and practical support.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-outline-blue mb-2">Call For</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-900">
              <li>Emotional, Social, and Practical Support</li>
              <li>Referrals to treatment</li>
              <li>Meeting and shelter locations</li>
              <li>Connections to Recovery Coaches</li>
              <li>Information on treatment options</li>
            </ul>
          </div>
        </section>

        {/* ───────────────── Team Cards ───────────────── */}
        <div className="mb-6 p-4 bg-yellow-100 rounded text-center text-blue-700">
          Billy Magner is currently on leave. In the meantime, please direct all Program Director inquiries to Alisha Cohen, our Interim Program Director.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* William Magner */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/BMagner.png"
              alt="William Magner"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">William Magner</h2>
            <p className="text-gray-600 mt-1">Program Director (On Leave)</p>
            <a
              href="mailto:WMagner@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              WMagner@NorthSuffolk.org
            </a>
          </div>
          {/* Alisha Cohen */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/ACohen.png"
              alt="Alisha Cohen"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">Alisha Cohen</h2>
            <p className="text-gray-600 mt-1">Interim Program Director</p>
            <a
              href="mailto:ACohen@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              ACohen@NorthSuffolk.org
            </a>
          </div>
          {/* Kevin Mortimer */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/KMortimer.png"
              alt="Kevin Mortimer"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">Kevin Mortimer</h2>
            <p className="text-gray-600 mt-1">Volunteer Coordinator</p>
            <a
              href="mailto:KMortimer@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              KMortimer@NorthSuffolk.org
            </a>
          </div>
          {/* Matt Langley */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/MLangley.png"
              alt="Matt Langley"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">Matt Langley</h2>
            <p className="text-gray-600 mt-1">Outreach Coordinator</p>
            <a
              href="mailto:MLangley@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              MLangley@NorthSuffolk.org
            </a>
          </div>
          {/* Corey Morris */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/CMorris.png"
              alt="Corey Morris"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">Corey Morris</h2>
            <p className="text-gray-600 mt-1">Recovery Coach</p>
            <a
              href="mailto:CMorris@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              CMorris@NorthSuffolk.org
            </a>
          </div>
          {/* John Doering */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/JDoering.png"
              alt="John Doering"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">John Doering</h2>
            <p className="text-gray-600 mt-1">Recovery Coach</p>
            <a
              href="mailto:JDoering@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              JDoering@NorthSuffolk.org
            </a>
          </div>
          {/* Derek Burns */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/DBurns.png"
              alt="Derek Burns"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">Derek Burns</h2>
            <p className="text-gray-600 mt-1">Recovery Coach</p>
            <a
              href="mailto:DBurns@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              DBurns@NorthSuffolk.org
            </a>
          </div>
          {/* Timothy Gunn */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/staff/TGunn.png"
              alt="Timothy Gunn"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-xl text-outline-blue font-semibold">Timothy Gunn</h2>
            <p className="text-gray-600 mt-1">Recovery Coach</p>
            <a
              href="mailto:TGunn@NorthSuffolk.org"
              className="mt-3 text-blue-600 hover:underline"
            >
              TGunn@NorthSuffolk.org
            </a>
          </div>
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
