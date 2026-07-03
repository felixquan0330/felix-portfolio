type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex gap-2 flex-wrap mt-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {liveUrl && <a href={liveUrl} className="text-blue-600 text-sm">Live Demo</a>}
          {githubUrl && <a href={githubUrl} className="text-blue-600 text-sm">GitHub</a>}
        </div>
      </div>
    </div>
  );
}