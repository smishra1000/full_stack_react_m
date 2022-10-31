import React, { useReducer } from "react";

function ReducerHook() {
  const initialState = { count: 0 };
  function countReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return "no action";
    }
  }
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h1>Demo Reducer Hook</h1>
      <div>Count : {state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default ReducerHook;
