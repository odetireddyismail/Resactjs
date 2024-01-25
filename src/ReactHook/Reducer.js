import React, { useReducer } from "react";
//The useReducer hook uses the same concept as the reducer in Redux.
//It is basically a pure function,with no side-effects
//the function always return the same output if the
//same arguments are passed

//the function does not produce the any side effects.

const Ad = () => {
  return {
    type: "IN",
  };
};

const De = () => {
  return {
    type: "DE",
  };
};
const initialState = 10;
const educer = (state, { type }) => {
  //De-Structuring

  if (type === "IN") {
    return state + 1;
  }

  if (type === "DE") {
    return state - 1;
  } else {
    return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch(Ad())}>+</button>
      <h1> {state}</h1>
      <button onClick={() => dispatch(De())}>-</button>
    </div>
  );
};

export default UseReducer;
