"use client";

import { useState } from "react";
import { createProject, updateProject, deleteProject } from "@/lib/actions/admin";

type Project = {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectsManager({ projects }: { projects: Project[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6">
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        {showAddForm ? "Cancel" : "+ Add Project"}
      </button>

      {showAddForm && (
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
          <p className="text-sm font-semibold text-white mb-4">New Project</p>
          <form
            action={async (formData) => {
              await createProject(formData);
              setShowAddForm(false);
            }}
            className="space-y-3"
          >
            <ProjectFields />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Save
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="aspect-video bg-black flex items-center justify-center overflow-hidden">
              {p.imageUrl ? (
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-600 text-sm">No image</span>
              )}
            </div>

            <div className="p-4 flex-1 flex flex-col">
              {editingId === p._id ? (
                <form
                  action={async (formData) => {
                    await updateProject(p._id, formData);
                    setEditingId(null);
                  }}
                  className="space-y-2"
                >
                  <ProjectFields defaults={p} />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-white text-black px-3 py-2 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="flex-1 border border-gray-700 text-gray-300 px-3 py-2 rounded-md text-xs hover:text-white hover:border-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">{p.title}</p>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3">{p.description}</p>

                    {p.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex gap-3 text-xs">
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          Live
                        </a>
                      )}
                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          GitHub
                        </a>
                      )}
                    </div>
                    <div className="flex gap-3 text-xs">
                      <button
                        onClick={() => setEditingId(p._id)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProject(p._id)}
                        className="text-red-400/70 hover:text-red-400 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-sm text-gray-600">No projects yet — add your first one above.</p>
      )}
    </div>
  );
}

function ProjectFields({ defaults }: { defaults?: Project }) {
  return (
    <>
      <input
        name="title"
        placeholder="Title"
        defaultValue={defaults?.title}
        required
        className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
      />
      <textarea
        name="description"
        placeholder="Description"
        defaultValue={defaults?.description}
        required
        rows={3}
        className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
      />
      <input
        name="imageUrl"
        placeholder="Image URL (/images/...)"
        defaultValue={defaults?.imageUrl}
        className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
      />
      <input
        name="tags"
        placeholder="Tags (comma separated)"
        defaultValue={defaults?.tags?.join(", ")}
        className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
      />
      <input
        name="liveUrl"
        placeholder="Live URL"
        defaultValue={defaults?.liveUrl}
        className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
      />
      <input
        name="githubUrl"
        placeholder="GitHub URL"
        defaultValue={defaults?.githubUrl}
        className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
      />
    </>
  );
}