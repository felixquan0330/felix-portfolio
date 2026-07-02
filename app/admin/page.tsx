import { auth } from "@/auth";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";
import Skill from "@/models/Skill";
import Settings from "@/models/Settings";
import { getStats } from "@/lib/actions/stats";
import ProjectsManager from "@/components/admin/ProjectsManager";
import SkillsManager from "@/components/admin/SkillsManager";
import AvatarManager from "@/components/admin/AvatarManager";
import StatsChart from "@/components/admin/StatsChart";

const ADMIN_EMAIL = "tomasismy1@gmail.com";

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user || session.user.email !== ADMIN_EMAIL) {
    redirect("/");
  }

  await dbConnect();
  const [projects, skills, settings, stats] = await Promise.all([
    Project.find({}).sort({ createdAt: -1 }).lean(),
    Skill.find({}).sort({ category: 1 }).lean(),
    Settings.findOne({ key: "profile" }).lean(),
    getStats(),
  ]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your portfolio content.</p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Activity (last 14 days)</h2>
        <StatsChart data={stats} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Avatar</h2>
        <AvatarManager currentUrl={(settings as any)?.avatarUrl} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <SkillsManager skills={JSON.parse(JSON.stringify(skills))} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ProjectsManager projects={JSON.parse(JSON.stringify(projects))} />
      </section>
    </div>
  );
}