import { UserModel } from "../models/user.model"
import bcrypt from 'bcryptjs'

export const userResolver = {
    Mutation: {
        signUp: async (_, { input }, context) => {
            try {
                const { username, password, name, gender } = input
                if (!username || !password || !name || !gender) throw new Error("All fields are required")
                const existingUser = await UserModel.findOne({ username })
                if (!existingUser) throw new Error("User already existed")
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
                const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

                const newUser = new UserModel({
                    username,
                    name,
                    gender,
                    password: hashPassword,
                    profilePicture: gender === 'male' ? boyProfilePic : girlProfilePic
                })

                await newUser.save()
                await context.login(newUser)
                return newUser


            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        },
        login: async (_, { input }, context) => {
            try {
                const { username, password } = input
                if (!username || !password) throw new Error("All fields are required")
                const { user } = await context.authenticate("graphql-local", { username, password })
                await context.login(user)
                return user
            } catch (error) {
                console.log(error)
                throw new Error(error.message)
            }
        },
        logout: async (_, _, context) => {
            try {
                await context.logout()
                context.req.session.destroy((e) => {
                    if (e) throw e
                })
                context.res.clearCookie("connect.sid")
            } catch (error) {
                console.log(error)
                throw new Error(error.message);
            }
        }
    },
    Query: {
        authUser: async (_, _, context) => {
            try {
                const user = context.getUser()
                return user
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        },
        user: async (_, { userId }) => {
            try {
                const user = await UserModel.findById(userId)
                return user
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        }
    },

}