import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: { type: String, required: true },
    paymentType: { type: String, enum: ["cash", "card"], required: true },
    category: {
      type: String,
      enum: ["saving", "expense", "investment"],
      required: true,
    },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    location: { type: String, default: "Unknown" },
  },
  { timestamps: true }
);

export const TransactionModel = mongoose.model(
  "Transaction",
  transactionSchema
);
