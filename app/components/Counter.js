// ChildComponent.js
import React from "react";
import { useCounterContext } from "../Context/Context";
const Counter = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <p>Value from Context: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
