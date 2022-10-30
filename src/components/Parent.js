import React, { Suspense} from "react";
import Child from "./Child";
class Parent extends React.Component{
    constructor(props){
        super(props);
       this.state = {
        name:"parent sameer"
       }
    }
    changeName=()=>{
        this.setState({name:"parent updated name"})
    }
   
    render(){
        return(
            <div>
                <h1>hello from parent {this.state.name}</h1>
                <button onClick={this.changeName}>Change Name</button>
                <Child  name={this.state.name}/>
            </div>
            
        )
    }
}

export default Parent