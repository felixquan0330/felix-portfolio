import mongoose from "mongoose";

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

declare global {
  var _mongooseConnection: Promise<typeof mongoose> | undefined;
}

let cached = global._mongooseConnection;

async function dbConnect() {
  if (cached) {
    return cached;
  }

  console.log("Attempting MongoDB connection...");

  cached = mongoose
    .connect(uri, { dbName: "portfolio" })
    .then((m) => {
      console.log("MongoDB connected successfully");
      return m;
    })
    .catch((err) => {
      console.error("MongoDB connection FAILED:", err.message);
      global._mongooseConnection = undefined;
      throw err;
    });

  global._mongooseConnection = cached;
  return cached;
}

export default dbConnect;