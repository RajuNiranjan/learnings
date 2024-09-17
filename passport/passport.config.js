import { UserModel } from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import { GraphQLLocalStrategy } from 'graphql-passport'


export const configurePassport = async () => {
    passport.serializeUser((user, done) => {
        console.log("sealizing user");
        done(null, user.id)

    })

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await UserModel.findById(id)
            done(null, user)
        } catch (error) {
            console.log(error);
            throw new Error(error.message)
        }
    })

    passport.use(
        new GraphQLLocalStrategy(async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ username })
                if (!user) throw new Error("Invalid username or password")
                const validPassword = await bcrypt.compare(password, user.password)
                if (!validPassword) throw new Error("Invalid Credentials")

                return done(null, user)
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        })
    )
}