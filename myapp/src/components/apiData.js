import React,{useEffect, useState} from 'react';

function ApiData() {

    // const [repos, setRepos] = useState([{}]);
    
    useEffect(()=>{

        const api = async () => {
            const data = await fetch('https://api.github.com/users/faiz260/repos')
            const response = await data.json();
            console.log(response)
        } 
        api();

    }, [])
    
    
     
    return (
        <div>
            <h1> API Data </h1>


        </div>
    )
}

export default ApiData
