"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubOpen, setAboutSubOpen] = useState(false);
  const [resourcesSubOpen, setResourcesSubOpen] = useState(false);

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
          <li className="relative">
            <button
              onClick={() => setAboutSubOpen(!aboutSubOpen)}
              className="flex items-center text-outline hover:text-[var(--primary-blue)]"
            >
              About
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </button>
            {/* Desktop “About” submenu */}
            {aboutSubOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/#about" className="block text-outline">
                    Overview
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/#about" className="block text-outline">
                    About
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/#contact" className="block text-outline">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/#services" className="text-outline hover:text-[var(--primary-blue)]">
              Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-outline hover:text-[var(--primary-blue)]">
              Gallery
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setResourcesSubOpen(!resourcesSubOpen)}
              className="flex items-center text-outline hover:text-[var(--primary-blue)]"
            >
              Resources
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </button>
            {/* Desktop “Resources” submenu */}
            {resourcesSubOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow-lg">
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
              </ul>
            )}
          </li>
          <li>
            <Link href="/#contact" className="text-outline hover:text-[var(--primary-blue)]">
              Contact
            </Link>
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
              <Link href="/#services" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                Services
              </Link>
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
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              {resourcesSubOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/resources/calendar" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/flyers" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                      Flyers
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
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              {aboutSubOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/#about" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/blog" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/faq" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                      FAQ
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className="block text-lg text-blue-900 text-outline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
