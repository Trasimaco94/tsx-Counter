import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={decrement} 
      style = {{backgroundColor: "red"}}
      disabled = {count ===0 ? true : false}>-</button>

      <span>{count}</span>

      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
