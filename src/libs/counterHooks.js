import React, { Component, useState } from "react";

// class component
export const CounterHooks = props => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Declease</button>
    </div>
  );
};
