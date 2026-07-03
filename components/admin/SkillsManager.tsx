"use client";

import { addSkill, deleteSkill } from "@/lib/actions/admin";

type Skill = {
  _id: string;
  name: string;
  category: string;
  logoUrl?: string;
};

export default function SkillsManager({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div key={skill._id} className="group flex flex-col items-center gap-2">
            <img
              src={skill.logoUrl}
              alt={skill.name}
              className="w-10 h-10 object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
            <span className="text-xs text-gray-500 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      {/* Add form */}
      <form action={addSkill} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        <input
          name="name"
          placeholder="Skill name"
          required
          className="border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
        />
        <input
          name="category"
          placeholder="Category (optional)"
          className="border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
        />
        <input
          name="logoUrl"
          placeholder="Logo URL (/images/logos/...)"
          className="border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
        />
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Add Skill
        </button>
      </form>

      {/* Card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((s) => (
          <div
            key={s._id}
            className="group relative bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-gray-600 transition-colors"
          >
            <button
              onClick={() => deleteSkill(s._id)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Delete skill"
            >
              ✕
            </button>

            <div className="w-12 h-12 flex items-center justify-center">
              {s.logoUrl ? (
                <img
                  src={s.logoUrl}
                  alt={s.name}
                  className="w-full h-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-500">
                  {s.name.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>

            <p className="text-xs text-gray-400 text-center">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}