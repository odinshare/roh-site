"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubOpen, setAboutSubOpen] = useState(false);
  const [resourcesSubOpen, setResourcesSubOpen] = useState(false);
  const [caprssSubOpen, setCaprssSubOpen] = useState(false);
  const [servicesSubOpen, setServicesSubOpen] = useState(false);
  const [contactSubOpen, setContactSubOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Recovery on the Harbor"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-lg text-gray-700">
          <li>
            <Link href="/" className="text-outline hover:text-[var(--primary-blue)]">
              Home
            </Link>
          </li>
          <li className="group relative">
            <div className="flex items-center text-outline hover:text-[var(--primary-blue)] cursor-pointer">
              About
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </div>
            <ul className="hidden group-hover:block hover:block absolute top-full left-0 w-40 bg-white border rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about" className="block text-outline">
                Overview
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about#mission-statement" className="block text-outline">
                  Mission Statement
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about#vision-statement" className="block text-outline">
                  Vision Statement
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about#values-statement" className="block text-outline">
                  Values Statement
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about#code-of-conduct" className="block text-outline">
                  Code of Conduct
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about#code-of-ethics" className="block text-outline">
                  Code of Ethics
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/blog" className="block text-outline">
                Blog
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/faq" className="block text-outline">
                FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <div
              className="flex items-center text-outline hover:text-[var(--primary-blue)] cursor-pointer"
            >
              Services
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </div>
            <ul className="hidden group-hover:block hover:block absolute top-full left-0 w-48 bg-white border rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/recovery-coaching" className="block text-outline">
                  Recovery Coaching
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/volunteering" className="block text-outline">
                  Volunteering
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/peer-leadership" className="block text-outline">
                  Peer Leadership
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/community-events" className="block text-outline">
                  Community Events
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/gallery" className="text-outline hover:text-[var(--primary-blue)]">
              Gallery
            </Link>
          </li>
          <li className="group relative">
            <div className="flex items-center text-outline hover:text-[var(--primary-blue)] cursor-pointer">
              Resources
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </div>
            <ul className="hidden group-hover:block hover:block absolute top-full left-0 w-40 bg-white border rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/resources/calendar" className="block text-outline">
                  Calendar
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/resources/flyers" className="block text-outline">
                  Flyers
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/resources/community-meeting-minutes" className="block text-outline">
                  Community Meeting Minutes
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/resources/advisory-board-meeting-minutes" className="block text-outline">
                  Advisory Board Meeting Minutes
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <div className="flex items-center text-outline hover:text-[var(--primary-blue)] cursor-pointer">
              Contact
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </div>
            <ul className="hidden group-hover:block hover:block absolute top-full left-0 w-48 bg-white border rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/contact#hotline" className="block text-outline">
                  Recovery Hotline
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/contact#form" className="block text-outline">
                  Contact
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <div className="flex items-center hover:text-[var(--primary-blue)] cursor-pointer">
              CAPRSS
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </div>
            <ul className="hidden group-hover:block hover:block absolute top-full right-0 w-48 bg-white border rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/caprss-hub">Hub</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/final-statements">Final Statements</Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7 text-blue-700" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-blue-700" />
          )}
        </button>
      </nav>

      {/* Mobile slide‐out panel */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-3/4 bg-gray-200 shadow-lg z-40">
          <div className="px-4 py-4 border-b flex items-center justify-between">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
              <XMarkIcon className="h-6 w-6 text-blue-900" />
            </button>
          </div>
          <ul className="p-4 space-y-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setServicesSubOpen(!servicesSubOpen)}
                className="w-full flex items-center justify-between text-lg text-blue-900 text-outline"
              >
                Services
                <ChevronDownIcon className={`h-5 w-5 transform ${servicesSubOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesSubOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/services/recovery-coaching" onClick={() => { setMenuOpen(false); setServicesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Recovery Coaching
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/volunteering" onClick={() => { setMenuOpen(false); setServicesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Volunteering
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/peer-leadership" onClick={() => { setMenuOpen(false); setServicesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Peer Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/community-events" onClick={() => { setMenuOpen(false); setServicesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Community Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/gallery" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                Gallery
              </Link>
            </li>
            <li>
              <button
                onClick={() => setResourcesSubOpen(!resourcesSubOpen)}
                className="w-full flex items-center justify-between text-lg text-blue-900 text-outline"
              >
                Resources
                <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${resourcesSubOpen ? "rotate-180" : ""}`} />
              </button>
              {resourcesSubOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/resources/calendar" onClick={() => { setMenuOpen(false); setResourcesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/flyers" onClick={() => { setMenuOpen(false); setResourcesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Flyers
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/community-meeting-minutes" onClick={() => { setMenuOpen(false); setResourcesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Community Meeting Minutes
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/advisory-board-meeting-minutes" onClick={() => { setMenuOpen(false); setResourcesSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Advisory Board Meeting Minutes
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setAboutSubOpen(!aboutSubOpen)}
                className="w-full flex items-center justify-between text-lg text-blue-900 text-outline"
              >
                About
                <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${aboutSubOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutSubOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/about" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#mission-statement" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#vision-statement" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Vision Statement
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#values-statement" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Values Statement
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#code-of-conduct" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#code-of-ethics" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Code of Ethics
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/blog" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/faq" onClick={() => { setMenuOpen(false); setAboutSubOpen(false); }} className="block text-lg text-blue-900 text-outline">
                      FAQ
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setCaprssSubOpen(!caprssSubOpen)}
                className="block text-lg text-blue-900 text-outline w-full flex items-center justify-between"
              >
                CAPRSS
                <ChevronDownIcon className={`h-5 w-5 transform ${caprssSubOpen ? "rotate-180" : ""}`} />
              </button>
              {caprssSubOpen && (
                <ul className="mt-2 ml-4 block text-lg text-blue-900 text-outline space-y-2">
                  <li>
                    <Link href="/caprss-hub" onClick={() => { setMenuOpen(false); setCaprssSubOpen(false); }}>
                      Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/final-statements" onClick={() => { setMenuOpen(false); setCaprssSubOpen(false); }}>
                      Final Statements
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setContactSubOpen(!contactSubOpen)}
                className="w-full flex items-center justify-between text-lg text-blue-900 text-outline"
              >
                Contact
                <ChevronDownIcon className={`h-5 w-5 transform ${contactSubOpen ? "rotate-180" : ""}`} />
              </button>
              {contactSubOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/contact#hotline"
                      onClick={() => { setMenuOpen(false); setContactSubOpen(false); }}
                      className="block text-lg text-blue-900 text-outline"
                    >
                      Recovery Hotline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact#form"
                      onClick={() => { setMenuOpen(false); setContactSubOpen(false); }}
                      className="block text-lg text-blue-900 text-outline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
