import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const featuredProjects = [
  {
    title: "My Portfolio Site",
    description: "Personal site built with Next.js and MongoDB",
    imageUrl: "/images/portfolio.png",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/you/portfolio",
  },
  {
    title: "Weather App",
    description: "Real-time weather lookup using a public API",
    imageUrl: "/images/weather-app.png",
    tags: ["React", "API", "CSS"],
    liveUrl: "https://weather-example.com",
    githubUrl: "https://github.com/you/weather-app",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm Felix Quan
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          I build clean, useful web applications with Next.js and modern
          tools. Welcome to my corner of the internet.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="border px-6 py-3 rounded-md font-medium hover:bg-gray-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-blue-600 hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}