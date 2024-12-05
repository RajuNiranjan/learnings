import { ChangeEvent, FormEvent, useState } from "react";

interface TodoItem {
  id: number;
  task: string;
  isCompleted: boolean;
}

const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [editTaskId, setEditTaskId] = useState<null | number>(null);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleAddOrEditTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editTaskId !== null) {
      setTodos(
        todos.map((item) => (item.id === editTaskId ? { ...item, task } : item))
      );
      setEditTaskId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), task, isCompleted: false },
      ]);
    }

    setTask("");
  };

  const handleEdit = (id: number) => {
    const taskToEdit = todos.find((item) => item.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setEditTaskId(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Todo List
        </h2>
        <form onSubmit={handleAddOrEditTask} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              value={task}
              onChange={handleChangeText}
              placeholder="Enter task here..."
              className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {editTaskId !== null ? "Save" : "Add"}
            </button>
          </div>
        </form>

        <div>
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">No tasks added yet.</p>
          ) : (
            <ul className="space-y-4">
              {todos.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={() => handleCompleted(item.id)}
                      className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span
                      className={`text-lg ${
                        item.isCompleted
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {item.task}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
