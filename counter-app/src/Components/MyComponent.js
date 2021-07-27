import React, { useState } from "react";

function MyComponent() {
  const [event, setEvent] = useState(false);

  function clickHandler(e) {
    e.preventDefault();
    console.log("Button Clicked!");
    console.log(e);

    setEvent(!event);
  }

  console.log("STATE >>> ", event);

  return (
    <div>
      {/* <form onSubmit={clickHandler}>
        <input type="submit" />
      </form> */}
      <button onClick={clickHandler}> 
          {event ? "ON!" : "OFF!"}
      </button>
    </div>
  );
}

export default MyComponent;
