import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  task: string;
  isDone: boolean;
}

interface TodoState {
  todo: Task[];
}

const initialState: TodoState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: Date.now(),
        task: action.payload,
        isDone: false,
      };
      state.todo.push(newTask);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    isCompleted: (state, action: PayloadAction<number>) => {
      const todo = state.todo.find((item) => item.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: number; newTask: string }>
    ) => {
      const { id, newTask } = action.payload;
      const todo = state.todo.find((item) => item.id === id);
      if (todo) {
        todo.task = newTask;
      }
    },
  },
});

export const { addTask, isCompleted, removeTask, updateTask } =
  todoSlice.actions;

export default todoSlice.reducer;
