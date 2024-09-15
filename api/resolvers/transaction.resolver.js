import { transactions } from "../dummyData/data.js";

export const transactionResolver = {
  Query: {
    transactions: () => {
      return transactions;
    },
  },
  Mutation: {},
};
