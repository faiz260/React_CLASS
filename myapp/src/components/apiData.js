import React, { useEffect, useState } from "react";

function ApiData() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://api.github.com/users/faiz260/repos");
      const response = await data.json();
      //   console.log(response);

      setRepos(response);
    };
    api();
  }, []);

  //   console.log(repos)

  return (
    <div>
      <h1> API Data </h1>
      <ul>
        {repos.map((data) => {
          return <li>{data.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ApiData;
