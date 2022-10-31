import React, { useReducer } from "react";

function ReducerHookWithOnchange() {
  const initialEmployeeState = {
    fname: "",
    isSaved: false,
  };
  function employeeReducer(state = initialEmployeeState, action) {
    switch (action.type) {
      case "on_change":
        return { fname: action.value };
      case "on_submit":
        return { ...state, isSaved: true };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(
    employeeReducer,
    initialEmployeeState
  );

  return (
    <div>
      <h4>Another example with form change handler</h4>
      <div>
        <input
          type="text"
          value={state.fname}
          placeholder="enter name"
          onChange={(event) =>
            dispatch({ type: "on_change", value: event.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "on_submit" })}>
          save
        </button>
        <h2>employee details</h2>
        {state.isSaved && <p>{state.fname}</p>}
      </div>
    </div>
  );
}

export default ReducerHookWithOnchange;
