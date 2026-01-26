import React, { useReducer } from "react";

// 1️⃣ Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // 2️⃣ useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>

      {/* 3️⃣ dispatch sends "actions" */}
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Counter;
