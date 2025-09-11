"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              <span className="text-base font-semibold tracking-tight">Grace Worship Center</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link className="hover:opacity-80" href="/give">Give</Link>
            <Link className="hover:opacity-80" href="/contact">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/about">About</Link>
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/ministries">Ministries</Link>
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/events">Events</Link>
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/give">Give</Link>
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


