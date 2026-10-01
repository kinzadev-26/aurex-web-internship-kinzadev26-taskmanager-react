import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  // Controlled inputs: React state is the "single source of truth"
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload rokta hai

    // Validation: empty task allowed nahi
    if (title.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }
    if (!date) {
      setError("Please select a due date.");
      return;
    }

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      date,
      time,
      priority,
      completed: false,
    });

    // Form reset
    setTitle("");
    setDate("");
    setTime("");
    setPriority("Medium");
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="row">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="primary-btn">+ Add Task</button>
    </form>
  );
}