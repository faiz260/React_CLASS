import React, { useState } from "react";
import "./hello.css";

// props is short for properties

function Hello({ name, age, src }) {

  const [num, setNum] = useState(0);

  console.log("state >> ", num);

  return (
    <div>
      {/* <h1>Hello {props.name}</h1> */}
      <h1>Hello {name}</h1>
      <h1>I am {age} years old.</h1>
      <img src={src} alt="react icon" />

      <h1>{num}</h1>
      <br />
      <button
        onClick={() => {
          setNum(2);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Hello;
