import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";
import ProjectCard from "@/components/ProjectCard";

export default async function Projects() {
  await dbConnect();
  const projects = await Project.find({}).lean();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-2">My Projects</h2>
      <p className="text-gray-600 mb-10">A selection of things I've built.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p: any) => (
          <ProjectCard
            key={p._id.toString()}
            title={p.title}
            description={p.description}
            imageUrl={p.imageUrl}
            tags={p.tags}
            liveUrl={p.liveUrl}
            githubUrl={p.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}