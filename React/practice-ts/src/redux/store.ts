import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./actions/couter.slice";
import TodoReducer from "./actions/todo.slice";

const RootReducer = combineReducers({
  counter: CounterReducer,
  todo: TodoReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
