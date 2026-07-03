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
import Reveal from "@/components/Reveal";

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
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 mt-20">
        {/* Title and stats chart for viewport height */}
        <div className="min-h-screen">
          <div className="mb-12 px-6">
            <h1 className="text-5xl font-bold my-8 text-center typewriter">Admin Dashboard</h1>
            <div className="flex justify-between items-center mt-16">
              <p
                className="text-gray-400 opacity-0 animate-[fade-in_0.6s_ease_forwards]"
                style={{ animationDelay: "0.6s" }}
              >
                Manage your portfolio content.
              </p>
              <Reveal delay={200}>
                <Link
                  href="/"
                  className="text-sm font-medium px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-white transition-colors"
                >
                  ← Back to site
                </Link>
              </Reveal>
            </div>
          </div>

          <section className="">
            <Reveal delay={300} className="px-6">
              <h2 className="text-2xl font-semibold text-white">Site Activity - last 14 days</h2>
              <h4 className="text-lg text-gray-400 mb-4">A look at sign-ins and messages over the past two weeks.</h4>
            </Reveal>
            <StatsChart data={stats} />
          </section>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white px-6">Avatar</h2>
          <AvatarManager settings={JSON.parse(JSON.stringify(settings)) ?? {}} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white px-6">Skills</h2>
          <SkillsManager skills={JSON.parse(JSON.stringify(skills))} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
          <ProjectsManager projects={JSON.parse(JSON.stringify(projects))} />
        </section>
      </div>
    </div>
  );
}