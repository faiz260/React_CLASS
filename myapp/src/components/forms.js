import React, { useState } from "react";
import "./forms.css";

function Forms() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text"
         onChange={handleName}
         value={name} />
        <br />
        <br />
        <label>Age: </label>
        <input type="number" 
        onChange={handleAge}
         value={age} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Forms;
