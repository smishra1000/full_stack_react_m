import React from "react";
function PersonList(props){
    return(
        <ul>
        {props.users.map((user)=><li key={user.id}>{user.name} {user.id}</li>)}
    </ul>
    )
}

export default PersonList