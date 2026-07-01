import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "My Portfolio Site",
    description: "Personal site built with Next.js and Firebase",
    imageUrl: "/images/portfolio.png",
    tags: ["Next.js", "Firebase", "Tailwind"],
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
  {
    title: "Task Manager",
    description: "A to-do list app with drag-and-drop reordering",
    imageUrl: "/images/task-manager.png",
    tags: ["Next.js", "TypeScript", "Firestore"],
    liveUrl: "https://tasks-example.com",
    githubUrl: "https://github.com/you/task-manager",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">My Projects</h1>
      <p className="text-gray-600 mb-10">
        A selection of things I've built.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}