import React, { useState } from "react";

function AddTodo() {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label>Todo</label>
        <input type="text" />
        <br />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
