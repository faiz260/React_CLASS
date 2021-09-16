import React, { useContext } from "react";
import counterContext from "../CounterContext";

function Child() {
  const counterValue = useContext(counterContext);

  const arr = [1, 2, 3];
  console.log(arr[1]);

  console.log("CHILD CONSOLE", counterValue);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Counter Value: {counterValue[0]} </h2>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
          // setCount(++count)
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Child;
