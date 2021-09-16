import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";
import AddTodo from "./Components/AddTodo";
function App() {
  return (
    <GlobalProvider>
      <h1> TODO List Application </h1>
      <AddTodo />
    </GlobalProvider>
  );
}

export default App;
