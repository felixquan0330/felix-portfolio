export default function AboutPage() {
  const skills = ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <img
          src="/images/user.png"
          alt="Your name"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-gray-600 mt-2">
            Hi, I'm Felix Quan — a developer passionate about building
            clean, useful web applications.
          </p>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">My Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Write a couple paragraphs here about who you are, how you got
          into web development, what you're currently learning, and what
          kind of projects excite you. Keep it conversational — visitors
          want to get a sense of you as a person, not just a resume.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Let's Connect</h2>
        <p className="text-gray-700">
          Feel free to reach out via the{" "}
          <a href="/contact" className="text-blue-600 underline">
            contact page
          </a>{" "}
          or find me on{" "}
          <a
            href="https://github.com/yourusername"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}