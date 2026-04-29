"use client";

import Link from "next/link";
import { personal } from "@/lib/personal";
import clsx from "clsx";

const navLinks = [
  { href: "/#projects", label: "work" },
  { href: "/about", label: "about" },
  { href: "/#contact", label: "contact" },
  { href: personal.resume, label: "resume", accent: true },
];

export default function Navbar() {

  return (
    <header className="relative z-20 border-b border-[#1e2a36]">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display font-black text-base tracking-wide text-acid hover:opacity-80 transition-opacity">
          {personal.name.toLowerCase().replace(" ", "_")}
          <span className="text-dim">.</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "text-xs uppercase tracking-widest transition-colors duration-200",
                  link.accent
                    ? "text-acid hover:text-text"
                    : "text-dim hover:text-cyan"
                )}
                target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
