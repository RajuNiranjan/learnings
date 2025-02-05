import { useTodoStore } from "../../zustand/useTodoStore";

export const TodoZustandList = () => {
  const { deleteTask, toggleTask, todos } = useTodoStore();

  return (
    <ul className="space-y-2">
      {todos.map((item, idx) => (
        <li key={idx} className="flex items-center justify-between">
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => toggleTask(item.id)}
          />
          <h1 className={item.isDone ? "line-through" : ""}>{item.title}</h1>
          <button
            className="bg-red-500 text-white p-1 cursor-pointer font-medium rounded-md"
            onClick={() => deleteTask(item.id)}>
            del
          </button>
        </li>
      ))}{" "}
    </ul>
  );
};
