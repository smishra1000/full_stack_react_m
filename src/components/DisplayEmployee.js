import React from "react";

function DisplayEmployee(props){
    console.log(props)
    const {fname,lname,age,address} = props;
    return(
        <div>
        <h1>Employee information</h1>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th>
                    Fisrt name
                </th>
                <th>Last name</th>
                <th>Age</th>
                <th>Address</th>
                </tr>
             
            </thead>
            <tbody>
            <tr>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{age}</td>
                <td>{address}</td>
            </tr>
            </tbody>
           
        </table>

        </div>

    )
}

export default DisplayEmployee