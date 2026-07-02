"use client";

import { addSkill, deleteSkill } from "@/lib/actions/admin";

export default function SkillsManager({ skills }: { skills: any[] }) {
  return (
    <div className="space-y-4">
      <form action={addSkill} className="flex gap-2">
        <input name="name" placeholder="Skill name" required className="border rounded-md px-3 py-2 text-sm flex-1" />
        <input name="category" placeholder="Category (optional)" className="border rounded-md px-3 py-2 text-sm flex-1" />
        <input name="logo" placeholder="Logo" className="border rounded-md px-3 py-2 text-sm flex-1" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Add
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s._id} className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center gap-2">
            {s.name}
            <button onClick={() => deleteSkill(s._id)} className="text-red-600 text-xs">✕</button>
          </span>
        ))}
      </div>
    </div>
  );
}