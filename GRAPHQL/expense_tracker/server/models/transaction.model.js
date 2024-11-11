import mongoose from "mongoose";

export const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  paymentType: { type: String, required: true, enum: ["cash", "card"] },
  category: {
    type: String,
    required: true,
    enum: ["saving", "expense", "investment"],
  },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
});

export const TransactionModel = mongoose.model(
  "Transaction",
  transactionSchema
);
