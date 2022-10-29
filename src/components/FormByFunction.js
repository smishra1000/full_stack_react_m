import React, { useState } from"react";
import DisplayEmployee from "./DisplayEmployee";

function FormByFunction(){
    const [employee,setEmployee] = useState({fname:"",lname:"",age:"",address:""})
    const [display,setDisplay]  = useState(false);
    // const [fname,setFname] =useState("");
    // const [lname,setLname] = useState("");
    // const [age,setAge] = useState("");
    // const [address,setAddress] = useState("");

    // function handleFnameChange(event){
    //     setFname(event.target.value);
    // }

    // function handleLnameChnage(event){
    //     setLname(event.target.value);
    // }

    // function handleAgeChange(event){
    //     setAge(event.target.value);
    // }
    // function handleAddressChnage(event){
    //     setAddress(event.target.value);
    // }

    function handleChange(event){
        //const value = event.target.value;
        setEmployee({
            ...employee,
            [event.target.name]:event.target.value
        })
    }

    function saveData(event){
        event.preventDefault();
        // console.log("fname==",employee.fname);
        // console.log("lname==",employee.lname);
        // console.log("age==",employee.age);
        // console.log("address==",employee.address);
       setDisplay(true);

    }
    return(
        <div>
             <form onSubmit={saveData}>
            <label>First Name:</label>
            <input type="text" value={employee.fname} name="fname" onChange={handleChange}/>
            <br></br>
            <label>Last Name</label>
            <input type="text" value={employee.lname} name="lname" onChange={handleChange}/>
            <br></br>
            <label>Age:</label>
            <input type="text" value={employee.age} name="age" onChange={handleChange}/>
            <br></br>
            <label>Address: </label>
            <input type="text" value={employee.address} name="address" onChange={handleChange}/>
            <br></br>
            <input type="submit" value="save"/>
        </form>
       {display && <DisplayEmployee {...employee}/> } 
        </div>
       
    )
}

export default FormByFunction