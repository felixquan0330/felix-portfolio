"use client";

import { useState } from "react";
import { addSkill, deleteSkill } from "@/lib/actions/admin";

type Skill = {
  _id: string;
  name: string;
  category: string;
  logoUrl?: string;
};

export default function SkillsManager({ skills }: { skills: Skill[] }) {
  const [logoUrl, setLogoUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setLogoUrl(`/images/logos/${file.name}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
      {/* Left: skill cards (unchanged) */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 content-start">
        {skills.map((s) => (
          <div key={s._id} className="group relative aspect-square bg-[#1118] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors">
            <button
              onClick={() => deleteSkill(s._id)}
              className="absolute top-2 right-2 z-10 w-5 h-5 flex items-center justify-center rounded-full bg-black/60 text-gray-400 hover:text-red-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Delete skill"
            >
              ✕
            </button>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              {s.logoUrl ? (
                <img src={s.logoUrl} alt={s.name} className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-10" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-500 group-hover:opacity-10 transition-opacity">
                  {s.name.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-semibold text-white text-center px-2">{s.name}</p>
            </div>
          </div>
        ))}
        {skills.length === 0 && (
          <p className="col-span-full text-sm text-gray-600">No skills added yet — use the form to add your first one.</p>
        )}
      </div>

      {/* Right: create form */}
      <div className="bg-[#1118] border border-gray-800 rounded-2xl p-5 h-fit">
        <p className="text-sm font-semibold text-white mb-4">Add Skill</p>
        <form action={addSkill} className="space-y-3">
          <input
            name="name"
            placeholder="Skill name"
            required
            className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
          />
          <input
            name="category"
            placeholder="Category (optional)"
            className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-sm text-white placeholder-gray-500"
          />

          {/* Hidden input — this is what actually gets submitted as "logoUrl" */}
          <input type="hidden" name="logoUrl" value={logoUrl} />

          <div>
            <label className="block text-xs text-gray-500 mb-1">Logo file</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-xs text-gray-400 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-white file:text-black hover:file:bg-gray-200 file:cursor-pointer cursor-pointer"
            />
            {fileName && (
              <p className="text-xs text-gray-500 mt-1">
                Will use: <span className="text-gray-300">/images/logos/{fileName}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
}