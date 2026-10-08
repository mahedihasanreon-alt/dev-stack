# Dev Stack Builder

A React + TypeScript web app that lets users browse development technologies and curate their own personalized stack. Explore frontend, backend, database, styling, and DevOps tools — compare them side by side and add the ones you want to your stack.

## 🛠 Technologies Used

- **React 19** — component-based UI library
- **TypeScript** — type-safe JavaScript
- **Vite** — fast build tool with HMR
- **Tailwind CSS v4** — utility-first styling
- **React Toastify** — toast notifications
- **React Icons** — Feather icon set
- **JSON** — external data source

## ✨ Features

1. **Browse 12 development technologies** — displayed in a responsive grid (1 column mobile, 2 tablet, 3 desktop) with icons, ratings, difficulty, category chips, and badges.
2. **Build your own stack** — add technologies to a "Your Stack" sidebar with live count, duplicate prevention, individual remove (✕) and Remove All functionality.
3. **Smooth user feedback** — toast notifications for every action (add, duplicate, remove, remove all) plus a loading spinner while JSON data loads, all wrapped in a shared orange → pink → violet gradient theme.

## 🎨 Live Demo

- 🌐 Live Site: https://mahedihasanreon-alt.github.io/dev-stack/
- 📦 Repository: https://github.com/mahedihasanreon-alt/dev-stack

## ❓ React Questions

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension that lets us write HTML-like code directly inside JavaScript. It is used in React because it makes UI code easier to read and write — we can describe what the component should render in a way that looks like HTML but still has JavaScript's full power. React compiles JSX into `React.createElement()` calls behind the scenes.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child. They are read-only — a child cannot change them. **State** is data managed inside a component that can change over time, usually via `useState`. When state changes, the component re-renders. Props flow down; state lives locally.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` lets a function component remember a value between renders. It returns the current value and a setter function. In this project I used it for three things:
- `technologies` — the list fetched from `data.json`
- `stack` — the technologies the user has added
- `loading` — a boolean to show the spinner while data loads

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side-effect code after the component renders. I used it to fetch `data.json` when the app first mounts. The empty dependency array `[]` at the end makes it run only once, so we don't re-fetch on every render. Without `useEffect`, the fetch would run outside React's control and could cause infinite loops.

### 5. Why does every item in a .map() list need a unique key prop?

React uses keys to identify which list items changed, were added, or removed. Without a unique key, React re-renders the entire list unnecessarily and can mix up state between items. In this project I used `key={tech.id}` because each technology has a unique `id`.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition — using `if`, `? :`, or `&&`. In this project I used it in the **Sidebar**: if `stack.length === 0`, we show "Your stack is empty"; otherwise we render the list of selected technologies. I also used it for the loading spinner and for the "✓ Added to Stack" button state.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Parent → Child:** via props. For example, `<TechCard tech={tech} isAdded={...} onAdd={...} />` passes data and functions down.

**Child → Parent:** the parent passes a callback function as a prop. When the child wants to notify the parent, it calls that function. For example, when the user clicks "Add to Stack" inside `TechCard`, it calls `onAdd(tech)`, which triggers the parent's `handleAddToStack` and updates the parent's state.
