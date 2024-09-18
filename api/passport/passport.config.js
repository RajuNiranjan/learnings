import { UserModel } from "../models/user.model";
import bcrypt from 'bcryptjs'
import { GraphQLLocalStrategy } from "graphql-passport";
import passport from "passport";

const configurePassport = async () => {
    try {
        passport.serializeUser((user, done) => {
            console.log('serializing the user');
            done(null, user)
        });

        passport.deserializeUser(async (id, done) => {
            try {
                const user = await UserModel.findById(id);
                done(null, user);
            } catch (error) {
                console.error(error);
                throw new Error(error.message);
            }
        });

        passport.use(
            new GraphQLLocalStrategy(async (username, password, done) => {
                try {
                    const user = await UserModel.findOne({ username });
                    if (!user) throw new Error("User not found");
                    const validPassword = await bcrypt.compare(password, user.password);
                    if (!validPassword) throw new Error("Invalid Credentials");
                    return done(null, user);
                } catch (error) {
                    console.error(error);
                    throw new Error(error.message);
                }
            })
        );
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};
