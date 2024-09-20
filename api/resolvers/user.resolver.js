import { UserModel } from "../models/user.model.js"
import bcrypt from 'bcryptjs'

export const userResolver = {
    Mutation: {
        signup: async (_, { input }, context) => {
            try {
                const { username, name, gender, password } = input
                if (!username || !name || !gender || !password) throw new Error("All fields are required")

                const existingUser = await UserModel.findOne({ username })
                if (existingUser) throw new Error("User already existed")
                const salt = await bcrypt.getSalt(10)
                const hashPassowrd = await bcrypt.hash(password, salt)

                const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
                const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

                const newUser = new UserModel({
                    username,
                    name,
                    gender,
                    password: hashPassowrd,
                    profilePicture: gender === 'male' ? boyProfilePic : girlProfilePic
                })

                await newUser.save()
                await context.login(newUser)
                return newUser
            } catch (error) {
                console.error("Error during signup:", error);
                throw new Error(error.message);
            }
        },
        login: async (_, { input }, context) => {
            try {
                const { username, password } = input
                if (!username || !password) throw new Error("All fields are required")

                const user = await context.authenticate("graphql-local", { username, password })

                await context.login(user)
                return user

            } catch (error) {
                console.error("Login error:", error);
                throw new Error(error.message)
            }
        },
        logout: async (_, args, context) => {
            try {
                await context.logout()
                context.req.session.destroy((e) => {
                    if (e) throw e
                })
                context.res.clearCookie("connect.sid")
                return { message: "Logged out successfully" }
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        }
    },
    Query: {
        authUser: async (_, args, context) => {
            try {
                const user = await context.getUser()
                return user
            } catch (error) {
                console.error("Error fetching authenticated user:", error);
                throw new Error(error.message)
            }
        },
        user: async (_, { userId }) => {
            try {
                const user = await UserModel.findById(userId)
                if (!user) throw new Error("User not found");
                return user
            } catch (error) {
                console.error("Error fetching user:", error);
                throw new Error(error.message)
            }
        }
    }
}