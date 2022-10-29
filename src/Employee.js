import React from "react";

class Employee extends React.Component{
    constructor(){
        super();
        this.state={
            name:"test1",
            companyName:"Motivity",
            address:"Hyd",
            age:27,
            role:"Software eng",
            isDisplay:false
        }
        this.changeInfo = this.changeInfo.bind(this);
    }

    changeInfo(){
        console.log("hello i am inside function")
        console.log(this.state.name)
       
    }
    showAge(){
        console.log(this.state.age)
    }
    showAddress(){
        console.log(this.state.address)
    }
    showAllInfo(){
        this.state.address="blr"
        this.setState({isDisplay:true})
    }
    hideInfo(){
      this.setState({isDisplay:false})  
    }
    render(){
        console.log("hello render")
        return(
            <div>
                <h1>Employee Information</h1>
                <div>
                    <button onClick={this.changeInfo}>Show Name</button>
                    <button onClick={()=>this.showAge()}>Show Age</button>
                    <button onClick={this.showAddress.bind(this)}>Show Address</button>
                    <button onClick={this.showAllInfo.bind(this)}>Show AllInfo</button>
                    <button onClick={this.hideInfo.bind(this)}>Hide Information</button>
                    {/* <h1>{this.state.name}</h1>
                    <h1>{this.state.companyName}</h1>
                    <h1>{this.state.age}</h1>
                    <h1>{this.state.address}</h1>
                    <h1>{this.state.role}</h1> */}

                    <div><h4>Display information <p>{this.state.isDisplay}</p></h4>
                    {this.state.isDisplay && <h1>{this.state.name}</h1>}
                    {this.state.isDisplay && <h1>{this.state.companyName}</h1>}
                    {this.state.isDisplay && <h1>{this.state.age}</h1>}
                    {this.state.isDisplay && <h1>{this.state.address}</h1>}
                    {this.state.isDisplay && <h1>{this.state.role}</h1>}
                    </div>

                </div>
                
            </div>
        )
    }
}
export default Employee