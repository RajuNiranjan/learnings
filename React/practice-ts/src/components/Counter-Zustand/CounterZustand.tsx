import React from "react";
import { useCounterState } from "../../zustand/useCounterStore";

const CounterZustand = () => {
  const { count, increment, decrement } = useCounterState();

  return (
    <div className="flex items-center justify-between">
      <button
        className="bg-red-500 p-2 rounded-md text-white font-bold"
        onClick={decrement}>
        -
      </button>
      <h1 className="text-4xl">{count}</h1>
      <button
        className="bg-green-500 p-2 rounded-md text-white font-bold"
        onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterZustand;
