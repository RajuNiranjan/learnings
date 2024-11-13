import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true, enum: ["male", "female"] },
  profilePicture: { type: String, default: "" },
});

export const UserModel = mongoose.model("User", userSchema);
