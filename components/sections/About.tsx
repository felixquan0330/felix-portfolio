export default function About() {
  const skills = ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"];

  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <img src="/images/profile.jpg" alt="Your name" className="w-32 h-32 rounded-full object-cover" />
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-600 mt-2">
            Hi, I'm [Your Name] — a developer passionate about building clean, useful web applications.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">My Story</h3>
        <p className="text-gray-700 leading-relaxed">
          Write a couple paragraphs about who you are and what excites you.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}