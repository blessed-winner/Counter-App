# 🎯 React Counter with Keyboard Controls

This is a simple React application that features a counter with buttons and keyboard event listeners for incrementing, decrementing, and resetting the value.

## 🧠 Features

- Increment, decrement, and reset the counter using buttons
- Control the counter using keyboard keys:
  - ⬆️ `ArrowUp` to increment
  - ⬇️ `ArrowDown` to decrement
  - 🔁 `r` key to reset

## 🔧 Technologies Used

- React (Functional Components)
- React Hooks (`useState`, `useEffect`)
- Vanilla JS event listeners

## 🚀 How It Works

- The counter is managed using `useState`
- A `useEffect` hook adds a `keydown` event listener on the `window`
- Keypresses are captured and trigger the appropriate counter function
- The event listener is cleaned up on component unmount

## 📦 Code Overview

```jsx
import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(val => val + 1);
  const decrement = () => setCount(val => val - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') increment();
      else if (e.key === 'ArrowDown') decrement();
      else if (e.key === 'r') reset();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  return (
    <div className="container">
      <h1>{count}</h1>
      <div>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Inc</button>
      </div>
    </div>
  );
};

export default App;
📂 How to Run
Clone or create the app:


npm create vite@latest
answer the prompts accordingly insinuating what to use
Replace src/App.js with the code above.

Run the app:


npm run dev
✅ Expected Behavior
Click buttons or press:

ArrowUp → increments count

ArrowDown → decrements count

r → resets to 0

🧠 Great for practicing useEffect, event listeners, and React logic!


