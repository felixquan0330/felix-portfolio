import { Schema, models, model } from "mongoose";

const SettingsSchema = new Schema({
  key: { type: String, required: true, unique: true },
  avatarUrl: { type: String },
  avatarBackLeftUrl: { type: String },
  avatarBackRightUrl: { type: String },
  avatarFrontTopUrl: { type: String },
});

export default models.Settings || model("Settings", SettingsSchema);