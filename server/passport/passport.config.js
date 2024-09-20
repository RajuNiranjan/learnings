import { UserModel } from "../models/user.model.js";
import passport from "passport";
import bcrypt from "bcryptjs";
import { GraphQLLocalStrategy } from "graphql-passport";

const ConfigPassport = async () => {
  passport.serializeUser((user, done) => {
    console.log("serializing user");
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("deserializing user");
    try {
      const user = await UserModel.findById(id);
      done(null, user);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await UserModel.findOne({ username });
        if (!user) throw new Error("User Not Found");
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error("Invalid Credentials");
        return done(null, user);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    })
  );
};

ConfigPassport();
