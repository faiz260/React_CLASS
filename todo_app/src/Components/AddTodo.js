import React, { useState, useContext } from "react";
import { TodoContext } from "../Context/GlobalState";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);

  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();

    addTodo(text);

    setText("");
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label>Todo</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
