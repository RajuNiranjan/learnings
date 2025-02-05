import { createSlice } from "@reduxjs/toolkit";
import { counterState } from "../types/couter.type";

const initialState: counterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;
