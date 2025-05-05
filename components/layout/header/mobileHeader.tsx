"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MobileHeaderProps } from "./types";

export default function MobileHeader({ navLinks }: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="absolute w-full text-white z-40">
      {/* Closed state: Only logo and menu bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">
            Chef Morgan
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="text-yellow-500 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Expanded state: Full navigation with main links and sub-navigation */}
      {isMenuOpen && (
        <div className="mobile-men bg-amber-500">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.title} className="border-b border-stone-800">
                <Link
                  href={link.href}
                  className="block px-6 py-3 font-medium text-stone-800  hover:text-yellow-300"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>

          <div className="px-6 py-4 mt-4">
            <Link
              href="/book-demo"
              className="block w-full py-2 text-center bg-stone-800 text-yellow-200 font-semibold hover:bg-stone-700 transition-colors"
            >
              Logg inn
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
