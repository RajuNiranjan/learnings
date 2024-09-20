import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  paymentType: { type: String, enum: ["cash", "card"], required: true },
  amount: { type: Number, required: true },
  category: {
    type: String,
    enum: ["savings", "expence", "investment"],
    required: true,
  },
  date: { type: Date, required: true },
  location: { type: String, default: "unknown" },
});

export const TransactionModel = mongoose.model(
  "Transaction",
  transactionSchema
);
