import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        setCount(count+1)
    }
    const decrementCount = () =>{
        setCount(count-1)
    }
    const resetCount = () =>{
        setCount(0)
    }

    return(
        <>
            <h1 style={{fontSize: "100px"}}>Count: {count}</h1>

            <button onClick={incrementCount}>Increase Count</button>
            <button onClick={decrementCount}>Decrease Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </>
    );
}

export default Counter;