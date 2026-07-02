import { model, models, Schema } from "mongoose";

const SettingsSchema = new Schema({
    key: { type: String, required: true, unique: true },
    avatarUrl: { type: String },
})

export default models.Settings || model("Settings", SettingsSchema);