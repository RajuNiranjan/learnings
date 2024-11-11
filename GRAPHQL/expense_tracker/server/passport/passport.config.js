import passport from "passport";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
  passport.serializeUser((user, done) => {
    console.log("serializing the user");
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("de-serializing user");

    try {
      const user = await UserModel.findById(id);
      done(null, user);
      return user;
    } catch (error) {
      done(error);
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await UserModel.findOne({ username });

        if (!user) {
          throw new Error("Invalid User");
        }

        const validatePassword = await bcrypt.compare(passport, user.password);

        if (!validatePassword) {
          throw new Error("Invalid credentials");
        }

        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    })
  );
};
