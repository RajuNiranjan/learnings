import { UserModel } from "../models/user.model.js";

export const userResolver = {
  Mutation: {},
  Query: {
    users: async () => {
      return UserModel.find();
    },
  },
};
