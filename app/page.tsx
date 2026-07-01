import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "My Portfolio Site",
      description: "Personal site built with Next.js and Firebase",
      imageUrl: "/images/portfolio.png",
      tags: ["Next.js", "Firebase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/you/portfolio",
    },
    // ...more projects
  ];

  return (  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}