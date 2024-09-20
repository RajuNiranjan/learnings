import { UserModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const userResolver = {
  Mutation: {
    signUp: async (_, { input }, context) => {
      try {
        const { username, password, gender, name } = input;
        if (!username || !password || !gender || !name)
          throw new Error("All fields are required");
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) throw new Error("User already existed");
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new UserModel({
          username,
          name,
          password: hashPassword,
          gender,
          profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    login: async (_, { username, password }, context) => {
      try {
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });
        await context.login(user);
        return user;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    logout: async (_, args, context) => {
      try {
        await context.logout();
        req.session.destroy((e) => {
          if (e) throw e;
        });
        res.clearCookie("connect.sid");
        return { message: "Logged out successfully" };
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },

  Query: {
    authUser: async (_, args, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    user: async (_, { userId }, context) => {
      try {
        const user = await UserModel.findById(userId);
        return user;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },
};
