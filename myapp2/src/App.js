import React, { useState } from "react";
import "./App.css";
import Parent from "./components/parent.js";
import CounterContext from "./CounterContext";
// context API

function App() {
  const count = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <Parent />
    </CounterContext.Provider>
  );
}

export default App;
