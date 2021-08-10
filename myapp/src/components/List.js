import React from "react";

function List() {
  const arr1 = [
    { id: 1, value: "value1" },
    { id: 2, value: "value2" },
    { id: 3, value: "value3" },
    { id: 4, value: "value4" },
    { id: 5, value: "value5" },
    { id: 6, value: "value6" },
  ];

  const listItem = arr1.map(({ id, value }) =>(
   <li key={id}>{value}</li>)
  )

  arr1.map(({ id, value }) => {
    console.log(id, value);
  });

  return (
    <div>
      <h1> Hello World </h1>
      <ul>{listItem}</ul>
    </div>
  );
}

export default List;
