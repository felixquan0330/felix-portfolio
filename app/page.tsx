import clientPromise from "@/lib/mongodb";

export default async function Home() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collections = await db.listCollections().toArray();
    return <div>Connected! Collections: {JSON.stringify(collections.map(c => c.name))}</div>;
  } catch (err) {
    return <div>Connection failed: {String(err)}</div>;
  }
}