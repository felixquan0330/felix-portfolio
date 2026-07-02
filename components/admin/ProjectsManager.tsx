"use client";

import { useState } from "react";
import { createProject, updateProject, deleteProject } from "@/lib/actions/admin";

export default function ProjectsManager({ projects }: { projects: any[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
      >
        {showAddForm ? "Cancel" : "+ Add Project"}
      </button>

      {showAddForm && (
        <form
          action={async (formData) => {
            await createProject(formData);
            setShowAddForm(false);
          }}
          className="border rounded-lg p-4 space-y-2"
        >
          <ProjectFields />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
            Save
          </button>
        </form>
      )}

      <div className="space-y-2">
        {projects.map((p) => (
          <div key={p._id} className="border rounded-lg p-4">
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
                  <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="border px-4 py-2 rounded-md text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-gray-600">{p.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingId(p._id)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProject(p._id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectFields({ defaults }: { defaults?: any }) {
  return (
    <>
      <input name="title" placeholder="Title" defaultValue={defaults?.title} required className="w-full border rounded-md px-3 py-2 text-sm" />
      <textarea name="description" placeholder="Description" defaultValue={defaults?.description} required className="w-full border rounded-md px-3 py-2 text-sm" />
      <input name="imageUrl" placeholder="Image URL (/images/...)" defaultValue={defaults?.imageUrl} className="w-full border rounded-md px-3 py-2 text-sm" />
      <input name="tags" placeholder="Tags (comma separated)" defaultValue={defaults?.tags?.join(", ")} className="w-full border rounded-md px-3 py-2 text-sm" />
      <input name="liveUrl" placeholder="Live URL" defaultValue={defaults?.liveUrl} className="w-full border rounded-md px-3 py-2 text-sm" />
      <input name="githubUrl" placeholder="GitHub URL" defaultValue={defaults?.githubUrl} className="w-full border rounded-md px-3 py-2 text-sm" />
    </>
  );
}