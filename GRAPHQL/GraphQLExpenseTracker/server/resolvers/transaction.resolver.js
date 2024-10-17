import { transactions } from "../dummyData.js";

export const transactionResolver = {
  Query: {
    transactions: () => {
      return transactions;
    },
  },
};
