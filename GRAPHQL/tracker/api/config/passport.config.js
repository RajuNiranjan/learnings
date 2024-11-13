import bcrypt from "bcryptjs";
import passport from "passport";
import { GraphQLLocalStrategy } from "graphql-passport";
import { UserModel } from "../models/user.model.js";

export const passportConfig = () => {
  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await UserModel.findOne({ username });
        if (!user) {
          return done(null, false, { message: "Invalid User" });
        }
        const verifyPassword = await bcrypt.compare(password, user.password);
        if (!verifyPassword) {
          return done(null, false, { message: "Invalid credentials" });
        }
        return done(null, user);
      } catch (error) {
        console.error(error);
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    console.log("serializing user");
    if (user) {
      done(null, user._id);
    } else {
      done(new Error("User object is null or undefined"));
    }
  });

  passport.deserializeUser(async (id, done) => {
    console.log("deserializing user");
    try {
      const user = await UserModel.findById(id);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
};
