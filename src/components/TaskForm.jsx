import { useState } from "react";

export default function TaskForm({ onAddTask }) {

  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (title.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }

    onAddTask({ id: Date.now(), title: title.trim(), completed: false });
    setTitle("");
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="primary-btn">Add Task</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}