"use client";

import { useState } from "react";
import { googleSignOut } from "@/lib/actions";

export default function UserMenu({ name, image }: { name: string; image: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2 pl-2 cursor-pointer">
        {image && (
          <img src={image} alt={name} className="w-7 h-7 rounded-full" />
        )}
        <span className="text-sm text-gray-300 hidden sm:inline">{name}</span>
      </div>

      {/* Popup */}
      <div
        className={`absolute top-full right-0 mt-0 w-24 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-200 origin-top-right ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <form action={googleSignOut}>
          <button
            type="submit"
            className="w-full text-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}