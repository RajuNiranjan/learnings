import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isChecked: { type: Boolean, default: false },
});

export const TodoModel = mongoose.model("Graphql_Todo", todoSchema);
