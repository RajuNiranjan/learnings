import passport from "passport";
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/user.model.js';
import { GraphQLLocalStrategy } from 'graphql-passport';

export const configurePassport = async () => {
    try {

        passport.serializeUser((user, done) => {
            console.log("Serializing the user");
            done(null, user.id);
        });


        passport.deserializeUser(async (id, done) => {
            console.log("Deserializing the user");
            try {
                const user = await UserModel.findById(id);
                if (user) {
                    done(null, user);
                } else {
                    done(new Error("User not found"), null);
                }
            } catch (error) {
                console.error("Error deserializing user:", error);
                done(error);
            }
        });


        passport.use(
            new GraphQLLocalStrategy(async (username, password, done) => {
                try {
                    const user = await UserModel.findOne({ username });
                    if (!user) return done(null, false, { message: "User does not exist" });

                    const isValidPassword = await bcrypt.compare(password, user.password);
                    if (!isValidPassword) return done(null, false, { message: "Invalid credentials" });

                    done(null, user);
                } catch (error) {
                    console.error("Error authenticating user:", error);
                    done(error);
                }
            })
        );
    } catch (error) {
        console.error("Error configuring passport:", error);
        throw new Error("Failed to configure passport");
    }
};
