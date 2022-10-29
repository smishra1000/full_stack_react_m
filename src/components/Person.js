import React from "react";
import PersonList from "./PersonList";

class Person extends React.Component{
    constructor(props){
        console.log("hello first method")
        super(props)
        this.state = {
            users:[],
            person:{
                name:"sameer",
                age:20
            }
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("hello 2nd method")
        console.log(props,state)
    }

    componentDidMount(){
        console.log("calling api");
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((result)=>{
            this.setState({users:result})
        })
    }

    render(){
        console.log("",this.state.users.length)
        console.log("hello third method")
        return (
            <div>
                <PersonList users={this.state.users}/>
                {/* <ul>
                    {this.state.users.map((user)=><li key={user.id}>{user.name} {user.id}</li>)}
                </ul> */}
            </div>
        )
    }
}

export default Person