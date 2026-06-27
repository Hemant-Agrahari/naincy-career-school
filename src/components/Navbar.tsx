"use client";

import React, { useState } from "react";
import Mascot from "./Mascot";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Curriculum", href: "#academics" },
    { name: "Career Zone", href: "#careers" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-yellow-300 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <a href="#hero" className="flex items-center gap-3 group">
            <Mascot width={55} height={55} interactive={false} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-header text-xl sm:text-2xl font-extrabold tracking-tight text-indigo-600 group-hover:text-pink-500 transition-colors">
                Naincy
              </span>
              <span className="text-xs font-semibold tracking-widest text-yellow-500 uppercase -mt-1">
                Career School
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-header text-base font-bold text-slate-600 hover:text-indigo-600 hover:scale-110 active:scale-95 transition-all duration-200 px-3 py-2 rounded-full hover:bg-indigo-50"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#admissions"
              className="playful-btn bg-pink-500 hover:bg-pink-600 text-white font-header font-bold text-sm px-6 py-2.5 rounded-full"
            >
              Enroll Now! 🚀
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon (X)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-t-2 border-indigo-100 bg-white" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-2 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center playful-btn bg-pink-500 hover:bg-pink-600 text-white font-header font-bold text-base px-6 py-3 rounded-full"
            >
              Enroll Now! 🚀
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
