import passport from "passport";
import bcrypt from 'bcryptjs'
import { UserModel } from '../models/user.model.js'

export const configurePassport = async () => {
    try {

        passport.serializeUser((user, done) => {
            console.log("serializing the user");
            done(null, user.id)
        })

        passport.deserializeUser(async (id, done) => {
            console.log("de_serializing the user");
            try {
                const user = await UserModel.findById(id)
                done(null, user)
            } catch (error) {
                console.error("Error deserializing user:", error);
                throw new Error("Failed to deserialize user")
            }
        })

        passport.use(new passport.LocalStrategy(async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ username })
                if (!user) return done(null, false, { message: "User not existed" })
                const isValidPassword = await bcrypt.compare(password, user.password)
                if (!isValidPassword) return done(null, false, { message: "Invalid Credentials" })
                done(null, user)
            } catch (error) {
                console.error("Error authenticating user:", error);
                throw new Error("Authentication failed")
            }
        }))
    } catch (error) {
        console.error("Error configuring passport:", error);
        throw new Error("Failed to configure passport")
    }
}