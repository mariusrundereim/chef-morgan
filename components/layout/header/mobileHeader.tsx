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
    <header className="bg-teal-950 text-white">
      {/* Closed state: Only logo and menu bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">
            HERIFRA
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
        <div className="mobile-menu">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.title} className="border-b border-teal-800">
                <Link
                  href={link.href}
                  className="block px-6 py-3 font-medium hover:text-yellow-300"
                >
                  {link.title}
                </Link>

                {link.subLinks && (
                  <div className="mb-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.title}
                        href={subLink.href}
                        className="block px-10 py-2 text-gray-300 hover:text-yellow-300"
                      >
                        {subLink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="px-6 py-4 mt-4">
            <Link
              href="/book-demo"
              className="block w-full py-2 text-center bg-yellow-500 text-teal-900 font-semibold hover:bg-yellow-400 transition-colors"
            >
              Book demo!
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
