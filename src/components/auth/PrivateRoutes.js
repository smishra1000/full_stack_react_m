import { Navigate,Outlet } from "react-router-dom"
const PrivateRoutes = ({path,children})=>{
    // check for login 

    let isLoggedIn = localStorage.getItem("isLoggedIn")
    if(isLoggedIn && isLoggedIn==='false'){
        return <Navigate to={path} />
    }else if(isLoggedIn==='true'){
        return children;
    }else {
        return <Navigate to={path} />
    }
    
}

export default PrivateRoutes