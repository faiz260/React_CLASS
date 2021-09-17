import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
function App() {
  return (
    <GlobalProvider>
      <h1> TODO List Application </h1>
      <AddTodo />
      <TodoList />
    </GlobalProvider>
  );
}

export default App;
