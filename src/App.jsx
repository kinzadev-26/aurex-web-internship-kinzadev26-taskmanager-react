import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const FILTERS = ["All", "Today", "Upcoming", "Completed"];
const STORAGE_KEY = "aurex-react-tasks";
const todayStr = () => new Date().toLocaleDateString("en-CA"); 

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export default function App() {

  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const clearCompleted = () =>
    setTasks((prev) => prev.filter((t) => !t.completed));

  const today = todayStr();
  const visibleTasks = tasks
    .filter((t) => {
      if (filter === "Today") return !t.completed && t.date === today;
      if (filter === "Upcoming") return !t.completed && t.date > today;
      if (filter === "Completed") return t.completed;
      return true;
    })
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  return (
    <div className="app">
      <Header total={tasks.length} done={tasks.filter((t) => t.completed).length} />

      <section className="card">
        <h2>Add Task</h2>
        <TaskForm onAddTask={addTask} />
      </section>

      <section className="card">
        <div className="card-head">
          <h2>My Tasks</h2>
          <button className="link-btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>

        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={filter === f ? "chip active" : "chip"}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </section>
    </div>
  );
}