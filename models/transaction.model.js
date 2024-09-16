import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    paymentType: { type: String, required: true, enum: ["cash", "card"] },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    location: { type: String, default: "Unknown" },
    category: { type: String, required: true, enum: ["savings", "expense", "investment"] }
}, { timestamps: true });

export const TransactionModel = mongoose.model("Transaction", transactionSchema)