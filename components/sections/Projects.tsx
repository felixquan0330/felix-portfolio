import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";
import StackedProjectCard from "../StackedProjectCard";

export default async function Projects() {
  await dbConnect();
  const projects = await Project.find({}).lean();

  return (
    <section id="projects" className="py-24 scroll-mt-50">
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {projects.map((p: any, i: number) => (
          <StackedProjectCard
            key={p._id.toString()}
            index={i}
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