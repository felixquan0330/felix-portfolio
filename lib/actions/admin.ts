"use server";

import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";
import Skill from "@/models/Skill";
import Settings from "@/models/Settings";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

const ADMIN_EMAIL = "tomasismy1@gmail.com"; // same as your admin page check

async function requireAdmin() {
  const session = await auth();
  if (!session?.user || session.user.email !== ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
}

// --- Projects ---
export async function createProject(formData: FormData) {
  await requireAdmin();
  await dbConnect();
  await Project.create({
    title: formData.get("title"),
    description: formData.get("description"),
    imageUrl: formData.get("imageUrl"),
    tags: (formData.get("tags") as string).split(",").map((t) => t.trim()).filter(Boolean),
    liveUrl: formData.get("liveUrl"),
    githubUrl: formData.get("githubUrl"),
  });
  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function updateProject(id: string, formData: FormData) {
  await requireAdmin();
  await dbConnect();
  await Project.findByIdAndUpdate(id, {
    title: formData.get("title"),
    description: formData.get("description"),
    imageUrl: formData.get("imageUrl"),
    tags: (formData.get("tags") as string).split(",").map((t) => t.trim()).filter(Boolean),
    liveUrl: formData.get("liveUrl"),
    githubUrl: formData.get("githubUrl"),
  });
  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function deleteProject(id: string) {
  await requireAdmin();
  await dbConnect();
  await Project.findByIdAndDelete(id);
  revalidatePath("/admin");
  revalidatePath("/projects");
}

// --- Skills ---
export async function addSkill(formData: FormData) {
  await requireAdmin();
  await dbConnect();
  await Skill.create({
    name: formData.get("name"),
    category: formData.get("category") || "General",
    logoUrl: formData.get("logoUrl"), // confirm this line exists
  });
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteSkill(id: string) {
  await requireAdmin();
  await dbConnect();
  await Skill.findByIdAndDelete(id);
  revalidatePath("/admin");
}

// --- Avatar ---
export async function updateAvatars(formData: FormData) {
  await requireAdmin();
  await dbConnect();
  await Settings.findOneAndUpdate(
    { key: "profile" },
    {
      avatarUrl: formData.get("avatarUrl"),
      avatarBackLeftUrl: formData.get("avatarBackLeftUrl"),
      avatarBackRightUrl: formData.get("avatarBackRightUrl"),
      avatarFrontTopUrl: formData.get("avatarFrontTopUrl"),
    },
    { upsert: true }
  );
  revalidatePath("/admin");
  revalidatePath("/");
}