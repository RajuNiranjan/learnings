import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    gender: { type: String, required: true, enum: ["male", 'female'] }
}, { timestamps: true })

export const UserModel = mongoose.model("User", userSchema)