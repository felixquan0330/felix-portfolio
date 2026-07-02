import { model, models, Schema } from "mongoose";

const SkillSchema = new Schema({
    name: { type: String, required: true },
    logoImage: { type: String, required: true },
    category: { type: String, default: "General" },
    createdAt: { type: Date, default: Date.now }
})

export default models.Skill || model("Skill", SkillSchema);