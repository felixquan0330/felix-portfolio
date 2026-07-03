import { Schema, models, model } from "mongoose";

const ExperienceSchema = new Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 }, // controls display order
  createdAt: { type: Date, default: Date.now },
});

export default models.Experience || model("Experience", ExperienceSchema);