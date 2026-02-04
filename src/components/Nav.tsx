"use client";
import { useState } from "react";

const links = [
  { href: "/templates/", label: "Templates" },
  { href: "/tutorials/", label: "Tutorials" },
  { href: "/blog/", label: "Blog" },
  { href: "/hire/", label: "Hire Us", highlight: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🐢</span>
          <span className="text-turtle-400">Turtle</span>
          <span className="text-white">Tools</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className={l.highlight 
                ? "bg-turtle-600 hover:bg-turtle-500 text-white px-4 py-2 rounded-lg font-medium transition" 
                : "text-gray-400 hover:text-white transition"
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white p-2"
          aria-label="Menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-gray-300 hover:text-white text-lg py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#subscribe"
            className="block bg-turtle-600 hover:bg-turtle-500 text-white px-4 py-3 rounded-lg font-medium text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Subscribe Free
          </a>
        </div>
      )}
    </nav>
  );
}
