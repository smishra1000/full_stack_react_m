import React, {useMemo,useState} from "react";
function MemoHooks(){

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    var s= 0;
    const increment = () =>{
        setCount(count+1)
    }
    const increment2 = () =>{
        setCount2(count2+1)
    }
    const longRunningFunction = ()=>{
        console.log("running")
        for(let i=0;i<100;i++){
            s = s+i;
        }
        console.log(s)
        return s;
        
    }
   //const withoutMemozied = longRunningFunction();
const memoizedRunningFunction = useMemo(()=>longRunningFunction(s),[count])    
    return(
        <div>
            <h1>Demo For Memo Hooks</h1>
            <button onClick={increment}>increment</button>
            <button onClick={increment2}>increment2</button>
            {memoizedRunningFunction}
        </div>
    )
}

export default MemoHooks
