import mongoose, { Schema, models, model } from "mongoose";

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  tags: { type: [String], default: [] },
  liveUrl: { type: String },
  githubUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Prevents model overwrite errors during Next.js hot reload
export default models.Project || model("Project", ProjectSchema);