import React from "react";

function UserGreeting() {
  return (
    <h1>
      Welcome back! <br /> You are logged in!
    </h1>
  );
}

function GuestGreeting() {
  return <h1> Please Log in</h1>;
}

function ConditionalComponent({ isLogIn }) {
  if (isLogIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export default ConditionalComponent;
