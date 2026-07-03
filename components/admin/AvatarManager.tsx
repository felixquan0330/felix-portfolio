"use client";

import { useState } from "react";
import { updateAvatars } from "@/lib/actions/admin";

type Settings = {
  avatarUrl?: string;
  avatarBackLeftUrl?: string;
  avatarBackRightUrl?: string;
  avatarFrontTopUrl?: string;
};

const slots = [
  { key: "avatarUrl", label: "Main Photo" },
  { key: "avatarBackLeftUrl", label: "Back Left" },
  { key: "avatarBackRightUrl", label: "Back Right" },
  { key: "avatarFrontTopUrl", label: "Front Top" },
] as const;

export default function AvatarManager({ settings }: { settings: Settings }) {
  const [preview, setPreview] = useState<Settings>(settings);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");

  const handleChange = (key: string, value: string) => {
    setPreview((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (formData: FormData) => {
    setStatus("saving");
    await updateAvatars(formData);
    setStatus("saved");
    setTimeout(() => setStatus("idle"), 1500);
  };

  return (
    <form action={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {slots.map((slot) => (
        <div
          key={slot.key}
          className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
        >
          <div className="aspect-square bg-black flex items-center justify-center overflow-hidden">
            {preview[slot.key as keyof Settings] ? (
              <img
                src={preview[slot.key as keyof Settings]}
                alt={slot.label}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-600 text-sm">No image</span>
            )}
          </div>

          <div className="p-4 space-y-2">
            <p className="text-sm font-semibold text-white">{slot.label}</p>
            <input
              name={slot.key}
              defaultValue={settings[slot.key as keyof Settings] ?? ""}
              onChange={(e) => handleChange(slot.key, e.target.value)}
              placeholder="/images/photo.jpg"
              className="w-full border border-gray-700 bg-black rounded-md px-3 py-2 text-xs text-white placeholder-gray-500"
            />
          </div>
        </div>
      ))}

      <div className="col-span-full">
        <button
          type="submit"
          disabled={status === "saving"}
          className="text-sm font-medium px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-white transition-colors"
        >
          {status === "saving" ? "Saving..." : status === "saved" ? "Saved!" : "Save All Photos"}
        </button>
      </div>
    </form>
  );
}