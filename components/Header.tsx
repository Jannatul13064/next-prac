"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold text-indigo-600">
            <Link href="/">My Brand</Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 font-semibold text-gray-700">
            <Link href="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-indigo-600 transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-indigo-600 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-indigo-600 transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>
            <Link href="/training" className="hover:text-indigo-600 transition">
              Training
            </Link>
            <Link
              href="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Sign In / Sign Up
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white-20 border-t border-gray-200 shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/training" onClick={() => setIsOpen(false)}>
              Training
            </Link>
            <Link
              href="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign In / Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
