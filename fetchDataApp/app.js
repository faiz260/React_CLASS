console.log("fetch API");

("API = Application Programming Interface");

// const apiData = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function apiData() {
  
    const Data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const response = await Data.json();
    
    console.log(response)

}
apiData();