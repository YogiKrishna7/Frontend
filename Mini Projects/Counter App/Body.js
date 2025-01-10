import { useState } from "react";

function Body(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false);

    function updateName(){
        setName("Yogi");
    }

    function updateAge(){
        setAge(age + 1);
    }

    function updateEmployeStatus(){
        setIsEmployed(!isEmployed);
    }

    return(
        <>
            <h1>Name: {name}</h1>            
            <h1>Age: {age}</h1>     
            <button onClick={updateAge}>Increase Age</button> 
            <h1>Is Employed? : {isEmployed ? "Yes" : "No"}</h1>      
            <button onClick={updateEmployeStatus}>Change Status</button> 
        </>
    );
}

export default Body;