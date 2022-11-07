import React from "react";
import useEffectHooks from "./useEffectHooks"

function EffectHook(){
    const data = useEffectHooks("https://jsonplaceholder.typicode.com/users")
    console.log(data);
    const [users,error,loading] = [...data]

    return(
        <div>
             <h1>Effect Hook Demo</h1>
             {error && <div>{error}</div>}
             {loading && <div>Loading...</div>}
             {users.length && <div>{users[0].name} {users[0].id}</div>}

        </div>
       
    )
}

export default EffectHook