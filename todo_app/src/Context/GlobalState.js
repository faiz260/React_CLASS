import React, { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const initialState = {
  todos: [],
};
// const [todo, setTodo] = useState([])

export const TodoContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  function addTodo(todos) {
    dispatch({
      type: "ADD_TODO",
      payload: todos,
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
