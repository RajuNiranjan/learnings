import React from "react";
import { decrement, increment } from "./redux/reducers/counter.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default CounterApp;
