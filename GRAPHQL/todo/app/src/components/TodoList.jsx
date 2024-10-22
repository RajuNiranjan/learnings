import { useQuery, useMutation } from "@apollo/client";
import {
  GET_TODO,
  DELETE_TASK,
  TOGGLE_CHECKED,
  UPDATE_TASK,
} from "../graphql/queries";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { loading, error, data, refetch } = useQuery(GET_TODO);
  const [deleteTask] = useMutation(DELETE_TASK);
  const [toggleChecked] = useMutation(TOGGLE_CHECKED);
  const [updateTask] = useMutation(UPDATE_TASK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching todos!</p>;

  const handleDelete = async (taskId) => {
    await deleteTask({ variables: { taskId } });
    refetch();
  };

  const handleToggle = async (taskId) => {
    try {
      await toggleChecked({ variables: { taskId } });
      refetch();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleUpdate = async (taskId, newTask, isChecked) => {
    await updateTask({
      variables: {
        input: { taskId, task: newTask, isChecked },
      },
    });
    refetch();
  };

  return (
    <div className="todo-list">
      {data.getTodo.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
