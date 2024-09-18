import passport from "passport";
import bcrypt from 'bcryptjs'
import { UserModel } from '../models/user.model.js'
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
    try {
        passport.serializeUser((user, done) => {
            console.log('serializing user');
            done(null, user.id)
        });

        passport.deserializeUser(async (id, done) => {
            console.log('deserializing user');
            try {
                const user = await UserModel.findById(id);
                done(null, user);
            } catch (error) {
                console.error('Error deserializing user:', error);
                throw new Error(error.message);
            }
        });

        passport.use(new GraphQLLocalStrategy(async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ username });
                if (!user) throw new Error("Invalid username or password");
                const validPassword = await bcrypt.compare(password, user.password);
                if (!validPassword) throw new Error("Invalid username or password");
                return done(null, user);
            } catch (error) {
                console.error('Error during GraphQLLocalStrategy:', error);
                throw new Error(error.message);
            }
        }));
    } catch (error) {
        console.error('Error configuring passport:', error);
        throw new Error(error.message);
    }
}