type Props = {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function StackedProjectCard({
  index,
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
}: Props) {
  return (
    <div
      className="sticky bg-[#111] rounded-2xl border border-gray-800 p-8 mb-6 shadow-2xl"
      style={{ top: `${150 + index * 20}px` }}
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
        >
          <img src={imageUrl} alt={title} className="w-full object-contain" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          <p className="text-gray-400 mb-10 leading-relaxed">{description}</p>

          <div className="flex items-center justify-end gap-3 mr-15">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2.01-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live site"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}