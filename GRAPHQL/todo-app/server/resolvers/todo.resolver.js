import { TodoModel } from "../model/todo.model.js";

export const todoResolver = {
  Query: {
    getTodos: async () => {
      try {
        return await TodoModel.find();
      } catch (error) {
        throw new Error("Error fetching todos");
      }
    },
  },
  Mutation: {
    addTodo: async (_, { input }) => {
      try {
        const newTodo = new TodoModel(input);
        return await newTodo.save();
      } catch (error) {
        throw new Error("Error creating todo");
      }
    },
    deleteTodo: async (_, { taskId }) => {
      try {
        const deletedTodo = await TodoModel.findByIdAndDelete(taskId);
        if (!deletedTodo) throw new Error("Todo not found");
        return deletedTodo;
      } catch (error) {
        throw new Error("Error deleting todo");
      }
    },
    updateTodo: async (_, { input }) => {
      const { _id, task, isChecked } = input;
      try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(
          _id,
          { task, isChecked },
          { new: true }
        );
        if (!updatedTodo) throw new Error("Todo not found");
        return updatedTodo;
      } catch (error) {
        throw new Error("Error updating todo");
      }
    },
  },
};
