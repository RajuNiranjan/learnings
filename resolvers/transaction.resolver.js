import { TransactionModel } from '../models/transaction.model.js'

export const transactionResolver = {
    Query: {
        transactions: async (_, _, context) => {
            try {
                if (!context.getUser()) throw new Error("Unauthorized")
                const userId = await context.getUser()._id
                const transactions = await TransactionModel.find({ userID: userId })
                return transactions
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        },
        transaction: async (_, { transactionId }) => {
            try {
                const transaction = await TransactionModel.findById(transactionId)
                return transaction
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        }
    },
    Mutation: {
        createTransaction: async (_, { input }, context) => {
            try {
                const newTransaction = new TransactionModel({ ...input, userId: context.getUser()._id })
                await newTransaction.save()
                return newTransaction
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        },
        updateTransaction: async (_, { input }) => {
            try {
                const updateTransaction = await TransactionModel.findByIdAndUpdate(input.transactionId, input, { new: true })
                return updateTransaction
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        },
        deleteTransaction: async (_, { transactionId }, context) => {
            try {
                const deleteTransaction = await TransactionModel.findByIdAndDelete(transactionId)
                return deleteTransaction
            } catch (error) {
                console.log(error);
                throw new Error(error.message)
            }
        }
    }
}