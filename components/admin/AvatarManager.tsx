"use client";

import { updateAvatar } from "@/lib/actions/admin";

export default function AvatarManager({ currentUrl }: { currentUrl?: string }) {
  return (
    <div className="flex items-center gap-6">
      <img
        src={currentUrl || "/images/profile.jpg"}
        alt="Avatar"
        className="w-20 h-20 rounded-full object-cover border"
      />
      <form action={updateAvatar} className="flex gap-2">
        <input
          name="avatarUrl"
          placeholder="/images/new-avatar.jpg"
          defaultValue={currentUrl}
          className="border rounded-md px-3 py-2 text-sm w-64"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Update
        </button>
      </form>
    </div>
  );
}