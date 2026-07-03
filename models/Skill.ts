import { Schema, models, model } from "mongoose";

const SkillSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, default: "General" },
  logoUrl: { type: String }, // renamed from logoImage, and made optional
  createdAt: { type: Date, default: Date.now },
});

export default models.Skill || model("Skill", SkillSchema);