# AUREX Internship — Month 2, Week 1
## React Task Manager

**Intern:** Kinza Imtiaz | **Track:** Full-Stack Web Development

| | |
|---|---|
| **GitHub Repository** | `https://github.com/kinzadev-26/aurex-web-internship-kinzadev26-taskmanager-react` |
| **Live Demo (Vercel)** | `https://aurex-web-internship-kinzadev26-tas-ten.vercel.app/` |

---

## Project Summary

This project is a React rebuild of Vanilla JavaScript Task Manager. The goal of this week was to move from direct DOM manipulation to a component-driven approach using **React.js** and **Vite**, and to understand JSX, props, state, and event handling.

The app lets a user add tasks, view them in a list, mark them as complete, and delete them, with input validation to prevent empty tasks.

---

## Features

- **Add tasks** using a controlled form input
- **Display tasks dynamically** by mapping over an array in state
- **Toggle completion** (mark a task complete / incomplete)
- **Delete tasks** from the list
- **Input validation**: empty tasks cannot be added

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

| Component | Responsibility |
|---|---|
| `App` | Holds the main `tasks` state and the functions to add, toggle, and delete tasks |
| `Header` | Displays the app title |
| `TaskForm` | Controlled input, validation, and submitting a new task to `App` |
| `TaskList` | Receives the tasks array and renders a `TaskItem` for each one using `map()` and `key` |
| `TaskItem` | Shows one task with a complete checkbox and a delete button |

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



## Learning Outcomes

- Setting up a React project with Vite and understanding `package.json`, `src/`, and `App.jsx`
- Writing JSX and embedding JavaScript expressions
- Creating reusable functional components and a parent-child hierarchy

- Passing data down with props and sending data up using function props
- Managing UI state with `useState`
- Handling `onClick`, `onChange`, and `onSubmit` events
- Building controlled form inputs with basic validation
- Comparing the React approach with Vanilla JavaScript

---

## Challenges Faced

- Understanding how state should be lifted to the parent so multiple components can use it
- Moving from direct DOM manipulation to React's declarative rendering

---
