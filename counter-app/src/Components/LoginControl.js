import React, { useState } from "react";
import ConditionalComponent from "./conditionalComponent";

function LoginButton({ login }) {
  return <button onClick={login}>Login</button>;
}

function LogoutButton({ logout }) {
  return <button onClick={logout}>Logout</button>;
}

function LoginControl() {
  const [isLogedIn, setIsLogedin] = useState(false);

  function handleLogin() {
    setIsLogedin(true);
  }

  function handleLogout() {
    setIsLogedin(false);
  }

  let button;
  if (isLogedIn) {
    button = <LogoutButton logout={handleLogout} />;
  } else {
    button = <LoginButton login={handleLogin} />;
  }

  return (
    <div>
      <ConditionalComponent isLogIn={isLogedIn} />
      {button}
    </div>
  );
}

export default LoginControl;
