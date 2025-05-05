"use client";

import React from "react";
import Link from "next/link";
import { DesktopHeaderProps } from "./types";

export default function DesktopHeader({ navLinks }: DesktopHeaderProps) {
  return (
    <header className="fixed flex items-center justify-between px-6 py-4 gap-6 z-40">
      <div className="logo">
        <Link href="/" className="text-xl text-yellow-400 font-bold">
          Chef Morgan
        </Link>
      </div>

      <div className="flex items-center">
        <nav className="flex space-x-8 mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-white hover:text-yellow-300 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div>
          <Link
            href="/book-demo"
            className="block w-full py-2 px-4 text-center bg-stone-950 text-yellow-300 font-semibold hover:bg-stone-700 transition-colors"
          >
            Logg inn
          </Link>
        </div>
      </div>
    </header>
  );
}
