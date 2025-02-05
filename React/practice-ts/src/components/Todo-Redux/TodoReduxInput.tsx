import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/todo.slice";

export const TodoReduxInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(task));
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
