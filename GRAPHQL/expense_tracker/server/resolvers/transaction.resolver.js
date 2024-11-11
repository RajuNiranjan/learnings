import { TransactionModel } from "../models/transaction.model.js";

export const transactionResolver = {
  Query: {
    // ALL TRANSACTIONS
    transactions: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const transactions = await TransactionModel.find({ userId });
        return transactions;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    // SINGLE TRANSCTION

    transaction: async (_, { transactionId }) => {
      try {
        return await TransactionModel.findById(transactionId);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },
  Mutation: {
    // CREATE TRANSACTION
    createTransaction: async (_, { input }, context) => {
      try {
        const newTransaction = new TransactionModel({
          ...input,
          userId: context.getUser()._id,
        });

        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    // UPDATE TRANSACTION

    updateTransaction: async (_, { input }) => {
      try {
        const updateTransaction = await TransactionModel.findByIdAndUpdate(
          input.transactionId,
          input,
          { new: true }
        );
        return updateTransaction;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    // DELETE TRANSACTION

    deleteTransaction: async (_, { transactionId }) => {
      try {
        return await TransactionModel.findByIdAndDelete(transactionId);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },
};
