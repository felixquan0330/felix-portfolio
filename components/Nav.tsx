"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About me" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav({
  authSlot,
  isAdmin
}: {
  authSlot: React.ReactNode,
  isAdmin: boolean
}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = isAdmin ? [...links, { href: "/admin", label: "Admin" }] : links;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="relative flex items-center gap-1 pl-2 pr-3 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl">
        {/* Glow behind the nav */}
        <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-400/20 blur-2xl" />

        {/* Logo badge */}
        <a
          href="#intro"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white font-bold text-sm mr-2 shrink-0"
        >
          FQ
        </a>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${activeSection === link.href.replace("#", "")
                ? "text-white bg-white/10"
                : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
            >
              {link.label}
            </a>
          ))}
          {authSlot}

          {/* Resume as a distinct pill button */}
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors ml-1"
          >
            Resume
          </a> */}
        </div>
      </nav>
    </div>
  );
}