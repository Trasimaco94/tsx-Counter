import React, { useState } from "react";
import "./index.css";



function App() {
  const [count, setCount] = useState<string | number>("START");

  function generateRandomNumber() {

    setCount(Math.random());
  }

  return (
    <div>
      <button onClick={generateRandomNumber}>{count}</button>
    </div>
  );
}

export default App;
