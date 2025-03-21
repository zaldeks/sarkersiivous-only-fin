"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Sarker Siivous"
              width={180}
              height={60}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#27ae60]">
              Etusivu
            </Link>
            <Link
              href="/tietoa-meista"
              className="text-gray-700 hover:text-[#27ae60]"
            >
              Tietoa meistä
            </Link>
            <Link
              href="/palvelut"
              className="text-gray-700 hover:text-[#27ae60]"
            >
              Palvelut
            </Link>
            <Link
              href="/kotitalousvahennys"
              className="text-gray-700 hover:text-[#27ae60]"
            >
              Kotitalousvähennys
            </Link>
            <Link
              href="/arvolisaton-siivous"
              className="text-gray-700 hover:text-[#27ae60]"
            >
              Arvonlisäveroton siivous
            </Link>
            <Link href="/blogi" className="text-gray-700 hover:text-[#27ae60]">
              Blogi
            </Link>
            <Link
              href="/ota-yhteytta"
              className="bg-[#27ae60] text-white px-4 py-2 rounded-lg hover:bg-[#219a54] transition-colors"
            >
              Ota yhteyttä
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-[#27ae60]"
              onClick={() => setIsMenuOpen(false)}
            >
              Etusivu
            </Link>
            <Link
              href="/tietoa-meista"
              className="block py-2 text-gray-700 hover:text-[#27ae60]"
              onClick={() => setIsMenuOpen(false)}
            >
              Tietoa meistä
            </Link>
            <Link
              href="/palvelut"
              className="block py-2 text-gray-700 hover:text-[#27ae60]"
              onClick={() => setIsMenuOpen(false)}
            >
              Palvelut
            </Link>
            <Link
              href="/kotitalousvahennys"
              className="block py-2 text-gray-700 hover:text-[#27ae60]"
              onClick={() => setIsMenuOpen(false)}
            >
              Kotitalousvähennys
            </Link>
            <Link
              href="/arvolisaton-siivous"
              className="block py-2 text-gray-700 hover:text-[#27ae60]"
              onClick={() => setIsMenuOpen(false)}
            >
              Arvonlisäveroton siivous
            </Link>
            <Link
              href="/blogi"
              className="block py-2 text-gray-700 hover:text-[#27ae60]"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogi
            </Link>
            <Link
              href="/ota-yhteytta"
              className="block py-2 bg-[#27ae60] text-white px-4 rounded-lg hover:bg-[#219a54] my-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ota yhteyttä
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
