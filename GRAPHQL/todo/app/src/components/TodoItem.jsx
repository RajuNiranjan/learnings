import { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  TodoItem.propTypes = {
    todo: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTask.trim()) {
      onUpdate(todo._id, newTask, todo.isChecked);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewTask(todo.task); // Reset the task in case user cancels
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.isChecked}
            onChange={() => onToggle(todo._id)}
          />
          <span
            style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
          >
            {todo.task}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(todo._id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
