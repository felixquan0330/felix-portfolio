import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";
import Skill from "@/models/Skill";
import Settings from "@/models/Settings";
import Experience from "@/models/Experience";
import { getStats } from "@/lib/actions/stats";
import ProjectsManager from "@/components/admin/ProjectsManager";
import SkillsManager from "@/components/admin/SkillsManager";
import AvatarManager from "@/components/admin/AvatarManager";
import StatsChart from "@/components/admin/StatsChart";
import { ADMIN_EMAIL } from "@/lib/constants";

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user || session.user.email !== ADMIN_EMAIL) {
    redirect("/");
  }

  await dbConnect();
  const [projects, skills, settings, stats, experience] = await Promise.all([
    Project.find({}).sort({ createdAt: -1 }).lean(),
    Skill.find({}).sort({ category: 1 }).lean(),
    Settings.findOne({ key: "profile" }).lean(),
    getStats(),
    Experience.find({}).sort({ order: 1 }).lean(),
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-400">Manage your portfolio content.</p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-white transition-colors"
          >
            ← Back to site
          </Link>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Activity (last 14 days)</h2>
          <StatsChart data={stats} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Avatar</h2>
          <AvatarManager currentUrl={(settings as any)?.avatarUrl} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Skills</h2>
          <SkillsManager skills={JSON.parse(JSON.stringify(skills))} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Projects</h2>
          <ProjectsManager projects={JSON.parse(JSON.stringify(projects))} />
        </section>
      </div>
    </div>
  );
}