import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  removeTask,
  isCompleted,
  updateTask,
} from "./redux/reducers/todo.reducer";
import { RootState } from "./redux/store";
import Edit_SVG from "./assets/edit.svg";
import Bin_SVG from "./assets/bin.svg";

const Todo = () => {
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState({ id: 0, newTask: "" });
  const { todo } = useSelector((state: RootState) => state.todo);

  console.log("todo", todo);

  const dispatch = useDispatch();

  const handleDeleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const handleChecked = (id: number) => {
    dispatch(isCompleted(id));
  };

  const handleEditTask = (id: number, newTask: string) => {
    setEditTask({ id, newTask });
    setTask(newTask);
  };

  const handleUpdateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTask({ id: editTask.id, newTask: task }));
    setEditTask({ id: 0, newTask: "" });
    setTask("");
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center">
      <form onSubmit={editTask.id ? handleUpdateTask : handleAddTask}>
        <div
          className="flex items-center justify-between px-4 w-[450px] h-10 rounded-lg gap-2
        "
        >
          <input
            type="text"
            name="task"
            value={editTask.id ? task : task}
            className="border p-2 rounded-lg w-full "
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="p-2 bg-lime-300 rounded-lg" type="submit">
            {editTask.id ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div>
        {todo &&
          todo.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 gap-4 w-[450px] h-10 rounded-lg border"
            >
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => handleChecked(item.id)}
                />
                <h1 className={`${item.isDone && "line-through"}`}>
                  {item.task}
                </h1>
              </div>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={Edit_SVG}
                  alt="edit_svg"
                  className="w-5 h-5"
                  onClick={() => handleEditTask(item.id, item.task)}
                />
                <img
                  src={Bin_SVG}
                  alt="bin_svg"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => handleDeleteTask(item.id)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
