import { TransactionModel } from '../models/transaction.model.js'

export const transactionResolver = {
    Mutation: {
        createTransaction: async (_, { input }, context) => {
            try {
                const newTransaction = new TransactionModel({ ...input, userId: context.getUser()._id });
                await newTransaction.save();
                return newTransaction;
            } catch (error) {
                console.error("Error creating transaction:", error);
                throw new Error(error.message);
            }
        },
        updateTransaction: async (_, { input }) => {
            try {
                const transaction = await TransactionModel.findByIdAndUpdate(input.transactionId, input, { new: true })
                if (!transaction) throw new Error("Transaction not found");
                return transaction
            } catch (error) {
                console.error("Error updating transaction:", error);
                throw new Error(error.message)
            }
        },
        deleteTransaction: async (_, { transactionId }) => {
            try {
                const transaction = await TransactionModel.findByIdAndDelete(transactionId);
                if (!transaction) throw new Error("Transaction not found");
                return transaction;
            } catch (error) {
                console.error("Error deleting transaction:", error);
                throw new Error(error.message);
            }
        }
    },
    Query: {
        transactions: async (_, args, context) => {
            try {
                const transactions = await TransactionModel.find({ userId: context.getUser()._id });
                return transactions;
            } catch (error) {
                console.error("Error fetching transactions:", error);
                throw new Error(error.message);
            }
        },
        transaction: async (_, { transactionId }) => {
            try {
                const transaction = await TransactionModel.findById(transactionId)
                if (!transaction) throw new Error("Transaction not found");
                return transaction
            } catch (error) {
                console.error("Error fetching transaction:", error);
                throw new Error(error.message);
            }
        }
    }
}