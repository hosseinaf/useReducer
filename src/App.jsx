import { useReducer, useState } from "react";

import "./App.css";
const intialState = { count: 0, number: 1 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };

    case "increaesByAmount":
      return { ...state, count: state.count + action.paylaod };

    case "decrease":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: (state = 0) };

    case "addNumber":
      return {
        ...state,
        number: state.number + 1,
      };

    default:
      throw new Error("invaild input");
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const increaseHandler = () => {
    dispatch({ type: "increase" });
  };

  const increaseByAmountHandler = () => {
    dispatch({ type: "increaesByAmount", paylaod: 10 });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease" });
  };

  const resetHandler = () => {
    dispatch({ type: "reset" });
  };

  const addNumberHandler = () => {
    dispatch({ type: "addNumber" });
  };

  return (
    <>
      {state.count}
      <button onClick={increaseHandler}>+</button>
      <button onClick={increaseByAmountHandler}>+ by amount</button>
      <button onClick={decreaseHandler}>-</button>
      <button onClick={resetHandler}>reset</button>
      <hr />
      {state.number}
      <button onClick={addNumberHandler}>Add number</button>
    </>
  );
}

export default App;
