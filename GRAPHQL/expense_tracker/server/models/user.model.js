import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
});

export const UserModel = mongoose.model("User", userSchema);
