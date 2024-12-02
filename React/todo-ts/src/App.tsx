import { ChangeEvent, FormEvent, useState } from "react";
import Bin_SVG from "./assets/bin.svg";
import Edit_SVG from "./assets/edit.svg";

interface TodoTypes {
  id: number;
  task: string;
  isDone: boolean;
}

const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<TodoTypes[]>([]);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleIsDone = (id: number) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditTask = (id: number) => {
    const taskToEdit = todo.find((item) => item.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.task);
      handleDeleteTask(id);
    }
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        task,
        isDone: false,
      },
    ]);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleChangeText}
          placeholder="Enter a new task"
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {todo.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              width: "450px",
              marginBottom: "10px",
              padding: "5px",
              borderBottom: "1px solid #ddd",
            }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => handleIsDone(item.id)}
              />
              <h1
                style={{
                  fontSize: "18px",
                  textDecoration: item.isDone ? "line-through" : "none",
                  marginLeft: "10px",
                }}>
                {item.task}
              </h1>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <img
                src={Edit_SVG}
                alt="Edit"
                width={20}
                height={30}
                style={{ cursor: "pointer" }}
                onClick={() => handleEditTask(item.id)}
              />
              <img
                src={Bin_SVG}
                alt="Delete"
                width={20}
                height={30}
                style={{ cursor: "pointer" }}
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
