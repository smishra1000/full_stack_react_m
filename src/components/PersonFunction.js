import React,{useState,useEffect} from "react";
import PersonList from "./PersonList";

function PersonFunction(){
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((result)=>{
           setUsers(result)
        })
    })

    return(
        <div>
            <h1>using functional component</h1>
            {users.length}
            <PersonList users={users}/>
        </div>
    )
}

export default PersonFunction
