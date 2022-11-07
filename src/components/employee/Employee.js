import React,{useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import EmployeeItem from "./EmployeeItem";
function Employee() {
    const [name,setName] = useState('')

    const employees = useSelector(state=>state.employees.employees);
    const dispatch = useDispatch();

    const handleInput = (e)=>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    const addNewEmpolyee = (e)=>{
        let employeeObj = {
            id:Math.random(),
            name:name
        }

        dispatch({type:'ADD_EMPLOYEE',payload:employeeObj})
        setName("")
    }
  return (
    <div>
      <h1>from employee</h1>

      <div>
        <h1>employee data</h1>
        {employees.length>0 ?(<ul>{employees.map(employee=>{
            return <EmployeeItem key={employee.id} item={employee}/>
        })}</ul>):(<p>no data</p>)}
      </div>
      <input type="text" onChange={handleInput} value={name}/>
      <button onClick={addNewEmpolyee}>Submit</button>
    </div>
  );
}

export default Employee;
