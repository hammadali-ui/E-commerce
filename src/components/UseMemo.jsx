import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 🧮 A slow function (just for example)
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // fake heavy loop
    return num * 2;
  };

  // ✅ useMemo remembers the result unless 'count' changes
  const doubleCount = useMemo(() => expensiveCalculation(count), [count]); 

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Double: {doubleCount}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
}

export default UseMemoExample;
