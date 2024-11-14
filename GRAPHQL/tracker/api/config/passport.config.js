import bcrypt from "bcryptjs";
import passport from "passport";
import { GraphQLLocalStrategy } from "graphql-passport";
import { UserModel } from "../models/user.model.js";

export const passportConfig = async () => {
  // PASSPORT LOGIN
  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await UserModel.findOne({ username });
        if (!user) throw new Error("Unauthorized user");
        const verifyPassword = await bcrypt.compare(password, user.password);
        if (!verifyPassword) throw new Error("Invalid Credentials");
        return done(null, user);
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    })
  );

  // SERIALIZE USER TO SESSION
  passport.serializeUser((user, done) => {
    console.log("SERIALIZING_USER_TO_SESSION");
    done(null, user.id);
  });

  // DESERIALIZE USER FROM SESSION
  passport.deserializeUser(async (id, done) => {
    console.log("DESERIALIZING_USER_FROM_SESSION");
    try {
      const user = await UserModel.findById(id);
      done(null, user);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  });
};
