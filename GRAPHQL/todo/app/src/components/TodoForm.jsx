import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK, GET_TODO } from "../graphql/queries";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [createTask] = useMutation(CREATE_TASK);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    await createTask({
      variables: { input: { task, isChecked: false } },
      refetchQueries: [{ query: GET_TODO }],
    });

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
