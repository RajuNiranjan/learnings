import { users } from '../dummyData/data.js'

export const userResolver = {
    Query: {
        users: () => {
            return users
        },
        user: (_, { userId }) => {
            return users.find((item) => item._id === userId)
        }
    }
}