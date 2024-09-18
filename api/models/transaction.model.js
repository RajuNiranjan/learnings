import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    paymentType: { type: String, enum: ["card", 'cash'], required: true },
    amount: { type: Number, required: true, },
    description: { type: String, required: true },
    category: { type: String, enum: ["savings", 'expence', 'investment'], required: true },
    date: { type: Date, required: true },
    location: { type: String, default: "Unknown" }
})

export const TransactionModel = mongoose.model("Transaction", transactionSchema)