"use client";

import { updateAvatar } from "@/lib/actions/admin";

export default function AvatarManager({ currentUrl }: { currentUrl?: string }) {
  return (
    <div className="flex items-center gap-6">
      <img
        src={currentUrl || "/images/profile.jpg"}
        alt="Avatar"
        className="w-20 h-20 rounded-full object-cover border border-gray-700"
      />
      <form action={updateAvatar} className="flex gap-2">
        <input
          name="avatarUrl"
          placeholder="/images/new-avatar.jpg"
          defaultValue={currentUrl}
          className="border border-gray-700 bg-black text-white placeholder-gray-500 rounded-md px-3 py-2 text-sm w-64"
        />
        <button type="submit" className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
          Update
        </button>
      </form>
    </div>
  );
}