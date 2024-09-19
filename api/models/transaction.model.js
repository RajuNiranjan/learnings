import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    paymentType: { type: String, enum: ["card", "cash"], required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    category: { type: String, enum: ["savings", "expenses", "income"], required: true },
    location: { type: String, default: "Unknown" }
})

export const TransactionModel = mongoose.model("Transaction", transactionSchema)