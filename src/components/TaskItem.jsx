import { useState } from "react";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);
  const [error, setError] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (editText.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }
    onEdit(task.id, editText.trim());
    setError("");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.title);
    setError("");
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="task editing">
        <form className="edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit" className="small-btn save">Save</button>
          <button type="button" className="small-btn" onClick={handleCancel}>Cancel</button>
        </form>
        {error && <p className="error">{error}</p>}
      </li>
    );
  }

  return (
    <li className={task.completed ? "task done" : "task"}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-title">{task.title}</span>
      <button className="small-btn" onClick={() => setIsEditing(true)}>Edit</button>
      <button className="small-btn danger" onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}