"use client";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 scroll-mt-20"
    >
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 opacity-0 animate-[fade-in_0.6s_ease_forwards]">
        Product Designer & Developer
      </p>

      <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
        {"Hi, I'm Felix Quan".split(" ").map((word, i) => (
          <span
            key={i}
            className="inline-block mr-4 opacity-0 animate-[fade-up_0.7s_ease_forwards]"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {word}
          </span>
        ))}
      </h1>

      <p
        className="text-lg text-gray-600 max-w-xl mb-10 opacity-0 animate-[fade-in_0.6s_ease_forwards]"
        style={{ animationDelay: "0.6s" }}
      >
        I design and build clean, thoughtful digital products — from idea to
        interface to code.
      </p>

      <div
        className="flex gap-4 opacity-0 animate-[fade-in_0.6s_ease_forwards]"
        style={{ animationDelay: "0.8s" }}
      >
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}