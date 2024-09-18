import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentType: { type: String, required: true, enum: ["card", 'cash'] },
    description: { type: String, required: true },
    category: { type: String, enum: ["savings", 'expense', 'investment'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    location: { type: String, default: "Unknown" }
})

export const TransactionModel = mongoose.model("Transaction", transactionSchema)