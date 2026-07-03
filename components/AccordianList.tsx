"use client";

import { useState, useRef } from "react";

type Experience = {
  _id: string;
  company: string;
  role: string;
  period: string;
  description: string;
};

export default function AccordionList({ items }: { items: Experience[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-800 border-t border-gray-800">
      {items.map((exp, i) => (
        <AccordionItem
          key={exp._id}
          exp={exp}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  exp,
  isOpen,
  onToggle,
}: {
  exp: Experience;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-semibold text-white">{exp.company}</span>
        <span className="flex items-center gap-3 text-sm text-gray-500">
          {exp.period}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight ?? 200 : 0 }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pb-5 text-sm text-gray-400">
          <p className="mb-1">{exp.role}</p>
          <p>{exp.description}</p>
        </div>
      </div>
    </div>
  );
}