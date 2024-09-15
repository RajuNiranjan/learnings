import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: ["cash", "card"],
    required: true,
  },
  category: {
    type: String,
    enum: ["saving", "expense", "investment"],
    required: true,
  },
  amounnt: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    default: "Unknow",
  },
  date: {
    type: Date,
    required: true,
  },
});

export const TransactionModel = mongoose.model(
  "Transaction",
  transactionSchema
);
