import passport from "passport";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
  passport.serializeUser((user, done) => {
    console.log("serializing user");
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("deserializing user");
    try {
      const user = await UserModel.findById(id);
      done(null, user);
    } catch (error) {
      console.log(error, "while deserializing the user");
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await UserModel.findOne({ username });
        if (!user) {
          throw new Error("Invalid username or password");
        }
        const validPassword = await bcrypt.compare(passport, user.password);
        if (!validPassword) {
          throw new Error("Invalid credentials");
        }
        return done(null, user);
      } catch (error) {
        console.log(error);
        return done(error);
      }
    })
  );
};