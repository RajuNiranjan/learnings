import React from "react";
import { TodoZustandInput } from "./TodoZustandInput";
import { TodoZustandList } from "./TodoZustandList";

export const TodoZustand = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-medium text-3xl">Todo Zustand</h1>
      <TodoZustandInput />
      <TodoZustandList />
    </div>
  );
};
