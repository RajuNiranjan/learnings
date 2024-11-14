import { UserModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const userResolver = {
  Query: {
    authUser: async (_, __, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    // SIGN_UP
    signUp: async (_, { input }, context) => {
      try {
        const { username, name, password, gender } = input;
        if (!username || !name || !password || !gender) {
          throw new Error("All fields are required");
        }
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
          throw new Error("User already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new UserModel({
          username,
          name,
          password: hashedPassword,
          gender,
          profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },

    // LOG_IN

    login: async (_, { input }, context) => {
      try {
        const { username, password } = input;
        if (!username || !password) throw new Error("All fields are required");
        const user = await UserModel.findOne({ username });
        if (!user) throw new Error("Invalid username or password");
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error("Invalid credentials");
        await context.login(user);
        return user;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },
  },
};
