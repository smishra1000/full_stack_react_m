import React, {useEffect, useState} from "react";

function EffectHook(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    useEffect(()=>{
        console.log("hello i am from effect")
        setLoading(true);
            fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((result)=>{
                setUsers(result)
                console.log(loading);
             }).catch((err)=>{
                setError(err)
    
             }).finally(()=>{
                setLoading(false)
             })
       
    },[])

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