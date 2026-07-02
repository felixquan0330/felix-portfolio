import dbConnect from "@/lib/mongoose";
import Message from "@/models/Message";
import clientPromise from "@/lib/mongodb-client";

export async function getStats() {
  await dbConnect();

  // Messages per day, last 14 days
  const messages = await Message.find({}).sort({ createdAt: -1 }).lean();

  // Users collection is managed by the Auth.js MongoDB adapter directly
  const client = await clientPromise;
  const db = client.db("portfolio");
  const users = await db.collection("users").find({}).toArray();

  // Group both by day for the last 14 days
  const days: Record<string, { signIns: number; messages: number }> = {};
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split("T")[0];
    days[key] = { signIns: 0, messages: 0 };
  }

  users.forEach((u: any) => {
    const key = new Date(u.emailVerified || u._id.getTimestamp()).toISOString().split("T")[0];
    if (days[key]) days[key].signIns++;
  });

  messages.forEach((m: any) => {
    const key = new Date(m.createdAt).toISOString().split("T")[0];
    if (days[key]) days[key].messages++;
  });

  return Object.entries(days).map(([date, counts]) => ({
    date: date.slice(5), // MM-DD
    signIns: counts.signIns,
    messages: counts.messages,
  }));
}