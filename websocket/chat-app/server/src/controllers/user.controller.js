import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model.js";
import { genToken } from "../lib/genToken.js";

export const Register = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    if (!email | !password | !fullName) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "user already existed with this email" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      email,
      fullName,
      password: hashPassword,
    });
    await newUser.save();
    const userResponse = newUser.toObject();
    delete userResponse.password;

    const token = genToken(newUser._id);

    return res
      .status(201)
      .json({ message: "user registered successfully", token, userResponse });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

export const LogOut = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};
