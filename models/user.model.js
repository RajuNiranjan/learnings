import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["male", 'female'], required: true },
    profilePicture: { type: String, default: "" }
})

export const UserModel = mongoose.model("User", userSchema)