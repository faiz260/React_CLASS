import React, { useContext } from "react";
import { TodoContext } from "../Context/GlobalState";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
