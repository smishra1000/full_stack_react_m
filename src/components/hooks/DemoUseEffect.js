import React from "react";

import useEffectHooks from "./useEffectHooks";
const DemoUseEffect = ()=>{

const data = useEffectHooks("https://jsonplaceholder.typicode.com/users")
console.log(data)
const [users,error,loading] = [...data];

    return(
        <div>
            <h1>new demo for custom hooks</h1>
             {users.length && <h1>hello from demo of effect {users[0].name}</h1>}
        </div>
    )
}
export default DemoUseEffect