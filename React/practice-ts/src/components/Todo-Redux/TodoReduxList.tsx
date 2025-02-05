import { deleteTask, toggleTask } from "../../redux/actions/todo.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const TodoReduxList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleDoneTask = (id: number) => {
    dispatch(toggleTask(id));
  };
  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="space-y-2">
      {todos.map((item, idx) => (
        <li key={idx} className="flex items-center justify-between">
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => handleDoneTask(item.id)}
          />
          <h1 className={item.isDone ? "line-through" : ""}>{item.title}</h1>
          <button
            className="bg-red-500 text-white p-1 cursor-pointer font-medium rounded-md"
            onClick={() => handleDeleteTask(item.id)}>
            del
          </button>
        </li>
      ))}{" "}
    </ul>
  );
};
