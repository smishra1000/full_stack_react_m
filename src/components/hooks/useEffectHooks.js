import React, {useState,useEffect} from "react";

const useEffectHooks =(url)=>{
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    useEffect(()=>{
        setLoading(true);
            fetch(url).then((res)=>res.json()).then((result)=>{
                setUsers(result)
                console.log(loading);
             }).catch((err)=>{
                setError(err)
    
             }).finally(()=>{
                setLoading(false)
             })
       
    },[])
    return [users,error,loading]

}

export default useEffectHooks