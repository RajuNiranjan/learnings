import { TransactionModel } from "../models/transaction.model.js";

export const transactionResolver = {
  Mutation: {
    crateTransaction: async (_, { input }, context) => {
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
    updateTransaction: async (_, { input }) => {
      try {
        const upadteTransaction = await TransactionModel.findByIdAndUpdate(
          input.transactionId,
          input,
          { new: true }
        );
        return upadteTransaction;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    deleteTransaction: async (_, { transactionId }) => {
      try {
        const transaction = await TransactionModel.findByIdAndDelete(
          transactionId
        );
        return transaction;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },
  Query: {
    transactions: async (_, args, context) => {
      try {
        if (!context.getUser) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;
        const transaction = await TransactionModel.find({ userId: userId });
        return transaction;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    transaction: async (_, { transactionId }) => {
      const transaction = await TransactionModel.findById(transactionId);
      return transaction;
    },
  },
};
