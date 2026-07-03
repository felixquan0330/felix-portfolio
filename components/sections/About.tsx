"use client";

import { useState } from "react";

const experience = [
  { company: "Pathao", role: "Product Designer", period: "Mar 2025 – Present", description: "Leading design for core product features." },
  { company: "klikit", role: "Product Designer", period: "Mar 2023 – Feb 2025", description: "Shipped B2B tools used by thousands of merchants." },
  { company: "ACS Future School", role: "Design Mentor", period: "Sept 2024 – Feb 2025", description: "Mentored students on design fundamentals." },
  { company: "Panorama", role: "UI/UX Designer", period: "Oct 2022 – Feb 2023", description: "Designed consumer-facing mobile experiences." },
  { company: "Better Aid BD", role: "Designer", period: "May 2022 – Sept 2022", description: "Worked on early-stage product design." },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="about" className="bg-black text-white py-24 scroll-mt-20">
      <div className="grid grid-cols-1 max-w-5xl px-6 mx-auto md:grid-cols-[280px_1fr] gap-16">
        <div>
          <div className="bg-white p-3 pb-8 shadow-2xl rounded-sm -rotate-3 w-56 mb-10">
            <img
              src="/images/profile.jpg"
              alt="Your name"
              className="w-full h-56 object-cover"
            />
          </div>

          <p className="text-sm text-gray-500 mb-2">About</p>
          <div className="space-y-1 mb-8">
            <p className="font-semibold text-white">5+ Years Experience</p>
            <p className="font-semibold text-white">5.7M+ Users Reached</p>
            <p className="font-semibold text-gray-500">Dhaka · Remote-Open</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-snug mb-6 text-white">
            My background had nothing to do with design.
            <br />
            I ended up here anyway.
          </h2>

          <p className="text-gray-400 leading-relaxed mb-12 max-w-xl">
            A few years later, I've shipped products used by thousands of
            people. I work best in complex, cross-functional environments
            where the design problem is embedded inside a business problem.
          </p>

          <div className="divide-y divide-gray-800 border-t border-gray-800">
            {experience.map((exp, i) => (
              <div key={exp.company}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-semibold text-white">{exp.company}</span>
                  <span className="flex items-center gap-3 text-sm text-gray-500">
                    {exp.period}
                    <svg
                      className={`w-4 h-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openIndex === i && (
                  <div className="pb-5 text-sm text-gray-400">
                    <p className="mb-1">{exp.role}</p>
                    <p>{exp.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}