"use client";

import { useState } from "react";

export function PhotoStack() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-64 h-64 mb-10">
      <div className={`absolute top-10 left-0 bg-white p-2 pb-6 shadow-xl rounded-sm w-32 z-0 transition-all duration-500 ease-out ${isHovered ? "opacity-100 -translate-x-15 scale-100 -rotate-25" : "opacity-0 -translate-x-4 scale-90"}`}>
        <img src="/images/profile-2.jpg" alt="" className="w-full h-32 object-cover grayscale" />
      </div>

      <div className={`absolute top-10 right-0 bg-white p-2 pb-6 shadow-xl rounded-sm w-32 z-0 transition-all duration-500 ease-out ${isHovered ? "opacity-100 translate-x-15 scale-100 rotate-25" : "opacity-0 translate-x-4 scale-90"}`}>
        <img src="/images/profile-3.jpg" alt="" className="w-full h-32 object-cover grayscale" />
      </div>

      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 pb-6 shadow-xl rounded-sm w-32 z-0 transition-all duration-500 ease-out ${isHovered ? "opacity-100 -translate-y-10 scale-100 rotate-6" : "opacity-0 -translate-y-4 scale-90"}`}>
        <img src="/images/profile-1.jpg" alt="" className="w-full h-32 object-cover grayscale" />
      </div>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute top-16 left-1/2 -translate-x-1/2 bg-white p-3 pb-8 shadow-2xl rounded-sm w-48 z-10 transition-transform duration-500 cursor-pointer ${isHovered ? "rotate-0 grayscale" : "-rotate-3"}`}
      >
        <img src="/images/profile.jpg" alt="Your name" className="w-full h-48 object-cover" />
      </div>
    </div>
  );
}