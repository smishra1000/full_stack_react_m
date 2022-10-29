import React, {useState} from "react"
import Counter from "./Counter";

function CounterFunction(props){
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1)
    }

    return(
        <div>
           <Counter name={"sameer"} age={20} count={count} increment={increment} decrement={decrement}/>
        </div>
    )
}

export default CounterFunction