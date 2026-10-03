# AUREX Internship — Month 2, Week 1
## React Task Manager

**Intern:** Kinza Imtiaz | **Track:** Full-Stack Web Development

| | |
|---|---|
| **GitHub Repository** | `https://github.com/kinzadev-26/aurex-web-internship-kinzadev26-taskmanager-react` |
| **Live Demo (Vercel)** | `https://aurex-web-internship-kinzadev26-tas-ten.vercel.app/` |

---

## Project Summary

This project is a React rebuild of my Month 1 Vanilla JavaScript Task Manager. The goal of this week was to move from direct DOM manipulation to a component-driven approach using **React.js** and **Vite**, and to understand JSX, props, state, and event handling.

Users can add tasks, view them in a list, edit them, mark them complete, delete them, and filter the list. Input validation prevents empty tasks from being added or saved.

---

## Features

- **Add tasks** using a controlled form input
- **Display tasks dynamically** by mapping over an array in state
- **Mark tasks complete / incomplete** (completed tasks are struck through)
- **Delete tasks** from the list
- **Edit tasks** (inline edit with Save / Cancel)
- **Input validation**: empty tasks cannot be added or saved after editing
- **Filter tasks**: All / Active / Completed
- **Responsive layout** for desktop and mobile

---

## Tech Stack

- React.js 
- Vite (build tool)
- CSS3
- Git & GitHub
- Vercel (deployment)

---

## Component Hierarchy

```
App
├── Header
├── TaskForm      (handles input state & submission)
└── TaskList      (maps through the tasks array)
    └── TaskItem  (individual task display & actions)
```

| Component | Responsibility | Props |
|---|---|---|
| `App` | Holds `tasks` and `filter` state; defines add, toggle, delete, and edit functions | — |
| `Header` | Displays the app title | — |
| `TaskForm` | Controlled input, validation, sends a new task to `App` | `onAddTask` |
| `TaskList` | Maps the tasks array and renders a `TaskItem` for each (with `key`) | `tasks, onToggle, onDelete, onEdit` |
| `TaskItem` | Shows one task; complete checkbox, edit mode, and delete button | `task, onToggle, onDelete, onEdit` |

---


## Project Structure

```
week-1-react-task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

---

## Setup & Installation

**Prerequisites:** Node.js (v18+) and npm

```bash
# 1. Clone the repository
git clone https://github.com/kinzadev-26/aurex-web-internship-kinzadev26-taskmanager-react

# 2. Go into the project folder
cd week-1-react-task-manager

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.


---


## Learning Outcomes

- Setting up a React project with Vite and understanding `package.json`, `src/`, and `App.jsx`
- Writing JSX and embedding JavaScript expressions
- Creating reusable functional components and a parent-child hierarchy
- Rendering lists with `map()` and unique `key` props
- Passing data down with props and sending data up using function props
- Managing UI state with `useState` (including local state for edit mode)
- Conditional rendering (edit mode vs normal view)
- Handling `onClick`, `onChange`, and `onSubmit` events
- Building controlled form inputs with validation
- Filtering arrays with `filter()` and updating them immutably with `map()`

---

## Challenges Faced

- Understanding how state should be lifted to the parent so multiple components can use it
- Moving from direct DOM manipulation to React's declarative rendering
- Handling edit mode with local state without breaking the parent's task list

---