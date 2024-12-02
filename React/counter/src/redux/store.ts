import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/counter.slice";

export const store = configureStore({
  reducer: {
    count: CounterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
