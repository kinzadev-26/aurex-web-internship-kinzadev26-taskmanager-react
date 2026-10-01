export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task done" : "task"}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <div className="task-info">
        <span className="task-title">{task.title}</span>
        <span className="task-meta">
          <i className={`dot ${task.priority.toLowerCase()}`} />
          {task.date} {task.time && `· ${task.time}`} · {task.priority}
        </span>
      </div>
      <button className="del-btn" onClick={() => onDelete(task.id)} aria-label="Delete task">
        ✕
      </button>
    </li>
  );
}