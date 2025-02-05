import { FormEvent, useState } from "react";
import { useTodoStore } from "../../zustand/useTodoStore";

export const TodoZustandInput = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTodoStore();

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleAddTask} className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button
        type="submit"
        className="p-2 bg-amber-400 rounded-md  border-amber-700 text-white font-medium">
        Add
      </button>
    </form>
  );
};
