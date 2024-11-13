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
    //   SIGN_UP
    signUp: async (_, { input }, context) => {
      const { username, password, gender, name } = input;
      if (!username || !name || !password || !gender) {
        throw new Error("All fields are required");
      }
      try {
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) throw new Error("User already existed");

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new UserModel({
          username,
          name,
          gender,
          password: hashPassword,
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
      const { username, password } = input;
      if (!username || !password) throw new Error("All fields are required");
      try {
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });

        await context.login(user);
        return user;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },

    // LOG_OUT

    logout: async (_, __, context) => {
      try {
        await context.logout();
        context.req.session.destroy((error) => {
          if (error) throw error;
        });
        context.res.clearCookie("connect.sid");
        return { message: "Logged out successfully" };
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },
  },
};
