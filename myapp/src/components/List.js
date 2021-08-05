import React from "react";

function List() {
  const arr1 = [1, 2, 2, 4];

  const listItem = arr1.map((num, index) => <li key={index}>{num}</li>);

  console.log(arr1);

  return (
    <div>
      <h1> Hello World </h1>
      <ul>{listItem}</ul>
    </div>
  );
}

export default List;
