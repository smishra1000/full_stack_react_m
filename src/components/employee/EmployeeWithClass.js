import React from "react";
import {connect} from "react-redux";

class EmployeeWithClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:""
        }
    }

    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        let employeeObj = {
            name:this.state.name,
            id:Math.random()
        }
        console.log(employeeObj);
        this.props.addEmployee(employeeObj);
        this.setState({name:""});
    }

    render(){
        const employees = this.props.employees
        return(
            <div>
                <h1>Redux demo using Class Based component</h1>
                <ul>
                    {employees && employees.employees.map((employee)=>(
                        <li>{employee.id} {employee.name}</li>
                    ))}
                </ul>

                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name} placeholder="enter name" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    addEmployee:employee=>dispatch({type:'ADD_EMPLOYEE',payload:employee})
})

const mapStateToProps = (state) =>{
    return {
        employees: state.employees
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeWithClass)