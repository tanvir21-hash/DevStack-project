# Dev Stack

**Dev Stack** is a stack-builder web app for developers. Browse a curated list of
frontend, backend, database, language, styling, DevOps and tooling technologies,
compare them side by side, and assemble the stack that fits your next project.

## Live Site

- Live: _add your deployed link here_
- Repository: _add your GitHub repo link here_

## Technologies Used

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Toastify (notifications)
- React Icons
- JSON (technology data loaded from `public/technologies.json`)

## Features

1. **Build your stack** - click "Add to Stack" on any technology card and it
   appears in the "Your Stack" sidebar with a live selected count. Each
   technology can only be added once; a duplicate attempt shows a warning toast.
2. **Manage your stack** - remove a single technology with the ✕ button or clear
   everything at once with "Remove All". Every action gives feedback through a
   toast notification.
3. **Fully responsive with a single brand theme** - a 3 / 2 / 1 column grid, a
   hamburger navbar on small screens, and one shared gradient
   (`--brand-gradient` in `src/index.css`) that themes the logo, hero heading
   and primary buttons from one place.

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  App.tsx                       # fetches technologies.json, holds loading state
  components/
    Nav.tsx                     # sticky navbar + mobile hamburger menu
    Banner.tsx                  # hero section
    Footer.tsx
    Logo.tsx
    technologies/
      Technologies.tsx          # owns the stack state and add / remove logic
      AvailableTechs.tsx        # responsive card grid
      TechCard.tsx              # single technology card
      YourStack.tsx             # sidebar panel with count and empty state
      StackItemCard.tsx         # single item inside the stack panel
  types/tech.ts                 # ITech interface
public/technologies.json        # technology data
```

---

## React Questions
### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup directly inside JavaScript.
React uses it because it makes the UI easy to read and lets us mix markup with
JavaScript logic (variables, loops, conditions) in one place. Under the hood it
is compiled into normal `React.createElement` calls.

### 2. What is the difference between props and state?

Props are data passed **into** a component from its parent; the component
cannot change them. State is data a component **owns** and can change itself
using `useState`. When either one changes, React re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` gives a component a piece of memory that survives re-renders and a
function to update it. I used it in `App.tsx` for the `technologies` list and
the `loading` flag, in `Technologies.tsx` for the `stack` array of selected
technologies, and in `Nav.tsx` for the mobile menu open/closed state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects (things outside of rendering, like fetching data)
after the component renders. Fetching `technologies.json` is asynchronous, so it
cannot happen during render. With an empty dependency array `[]` the effect runs
once after the first render, fetches the file, and then saves the result into
state so the UI updates.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` tells React which list item is which between renders. With a stable
unique key React can update, reorder or remove only the item that changed
instead of re-creating the whole list, and it avoids bugs where state ends up on
the wrong item. In this project I use `tech.id` as the key.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In
`YourStack.tsx`, when `stack.length === 0` it renders the "Your stack is empty"
message, otherwise it renders the list of stack items and the "Remove All"
button. Another example is the loading spinner in `Technologies.tsx` that shows
while the JSON is being fetched.

### 7. How do you pass data from a parent to a child, and how does a child send something back?

The parent passes data down as props, e.g. `Technologies` passes `stack` and
`technologies` to `AvailableTechs`. To send something back, the parent passes a
function as a prop and the child calls it. For example `Technologies` passes
`onAdd={handleAdd}` down to each `TechCard`; when the button is clicked the card
calls `onAdd(tech)`, and the parent updates its own state.
