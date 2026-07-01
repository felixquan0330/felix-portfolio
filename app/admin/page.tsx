import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ADMIN_EMAIL = "youremail@gmail.com";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user || session.user.email !== ADMIN_EMAIL) {
    redirect("/");
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Manage your projects here.</p>
    </div>
  );
}