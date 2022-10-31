import React, {createContext,useContext} from "react";
const NameContext = createContext();

const employee = {
    name:"sameer",
    age:20,
    address:'hyd',
}
function Home(){
    const employee = useContext(NameContext);
    return(
        <div>
            <h1>hello home {employee.name} {employee.age}</h1>
            <AboutUs/>
        </div>
        
    )
}

function AboutUs(){
    const employee = useContext(NameContext);
    return(
        <h1>hello aboutus {employee.name} {employee.age}</h1>
    )
}

function ContextHook(){
    return(
        <NameContext.Provider value={employee}>
            <div>
            <h1>Demo For Context Hook</h1>
            <Home/>
        </div>
        </NameContext.Provider>
        
    )
}

export default ContextHook