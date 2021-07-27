import "./App.css";
import ConditionalComponent from "./Components/conditionalComponent";
import MyComponent from "./Components/MyComponent";
import LoginControl from "./Components/LoginControl";

function App() {
  return (
    <div className="App">
      {/* <MyComponent /> */}
      {/* <ConditionalComponent isLogIn={false}/> */}
      <LoginControl />
    </div>
  );
}

export default App;
