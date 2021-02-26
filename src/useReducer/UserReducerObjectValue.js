import React from "react";

import { useReducer } from "react";

const initialState = {
  first: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { first: state.first + action.value };
    case "decrement":
      return { first: state.first - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UserReducerObjectValue() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count.first}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UserReducerObjectValue;
