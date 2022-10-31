import React, { useState } from "react";
function StateHook(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <h1>State Hook demo</h1>
            <div>Count : {count}</div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
       
    )
}

export default StateHook