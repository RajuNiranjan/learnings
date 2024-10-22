import { TodoModel } from "../models/todo.model.js";

export const todoResolver = {
  Query: {
    getTodo: async () => {
      return TodoModel.find();
    },
  },

  Mutation: {
    // CREATE TASK
    createTask: async (_, { input }) => {
      try {
        const { task, isChecked } = input;
        const newTask = new TodoModel({ task, isChecked });
        await newTask.save();
        return newTask;
      } catch (error) {
        console.log(error);
      }
    },

    // DELETE TASK
    deleteTask: async (_, { taskId }) => {
      return await TodoModel.findByIdAndDelete(taskId);
    },

    // UPDATE TASK

    updateTask: async (_, { input }) => {
      const { taskId, task, isChecked } = input;
      try {
        const updateTask = await TodoModel.findByIdAndUpdate(
          taskId,
          { task, isChecked },
          { new: true }
        );
        return updateTask;
      } catch (error) {
        console.log(error);
      }
    },

    // IS CHECKED

    isChecked: async (_, { input }) => {
      const { taskId } = input;
      try {
        const task = await TodoModel.findById(taskId);
        task.isChecked = !task.isChecked;
        await task.save();
        return task;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
