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
  Mutation: {},
};
