type Props = {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  bgColor: string;
};

export default function StackedProjectCard({ index, title, description, imageUrl, tags, bgColor }: Props) {
  return (
    <div
      className="sticky bg-[#111] rounded-2xl border border-gray-800 p-8 mb-6 shadow-2xl"
      style={{ top: `${100 + index * 40}px` }}
    >
      <div className="flex flex-wrap gap-2 justify-end mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold text-white bg-white/10 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          className="rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          <img src={imageUrl} alt={title} className="w-3/4 object-contain" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}