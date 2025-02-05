import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../types/todo.type";

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
