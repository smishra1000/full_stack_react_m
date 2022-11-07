import React from "react";
import { useSelector,useDispatch } from "react-redux";

const EmployeeItem = (props)=>{

    const employees = useSelector(state=>state.employees.employees)
    const dispatch = useDispatch();
    return(
        <li>
            {props.item.id}{props.item.name}
        </li>
    )
}

export default EmployeeItem