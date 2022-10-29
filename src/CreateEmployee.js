import React from "react";
import List from "./List";
class CreateEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            age:"",
            adress:"",
            designation:"",
            employees:[]
        }
    }

    onIdChange(event){
        console.log(event)
        this.setState({id:event.target.value})
    }
    onNameChange(event){
        console.log(event)
        this.setState({name:event.target.value})
    }
    onAgeChange(event){
        console.log(event)
        this.setState({age:event.target.value})
    }
    onAddressChange(event){
        console.log(event)
        this.setState({address:event.target.value})
    }
    onDesigChange(event){
        console.log(event)
        this.setState({designation:event.target.value})
    }

    saveData(event){
        event.preventDefault();
        let employees = this.state.employees;
        let employee = {
            id:this.state.id,
            name:this.state.name,
            age:this.state.age,
            address:this.state.address,
            designation:this.state.designation
        }
        employees.push(employee)
        this.setState({employees:employees})
        this.reset();
    }

    reset(){
        this.setState({id:"",name:"",age:"",address:"",designation:""})
    }

    render(){
        return(
            <div><h1>Employee Create Form {this.props.componenetName}</h1>
                <form>
                    <label>Id : </label>
                    <input type="text" name="id" value={this.state.id} onChange={(e)=>this.onIdChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Name : </label>
                    <input type="text" name="name" value={this.state.name} onChange={(e)=>this.onNameChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Age : </label>
                    <input type="text" name="age" value={this.state.age} onChange={(e)=>this.onAgeChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Address : </label>
                    <input type="text" name="address" value={this.state.address} onChange={(e)=>this.onAddressChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Designation:</label>
                    <input type="text" name="desig" value={this.state.designation} onChange={(e)=>this.onDesigChange(e)}/>
                    <br></br>
                    <br></br>
                   <button onClick={(e)=>this.saveData(e)}>Save Data</button>
                    <List employees={this.state.employees}/>
                </form>
            </div>
        )
    }
}

export default CreateEmployee