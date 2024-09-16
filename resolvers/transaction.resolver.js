import { transactions } from '../dummyData/data.js'

export const transactionResolver = {
    Query: {
        transactions: () => {
            return transactions
        },
        transaction: (_, { transactionId }) => {
            return transactions.find((item) => item._id === transactionId)
        }
    }
}