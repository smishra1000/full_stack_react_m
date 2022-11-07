import React,{useRef} from "react";


function RefHooks(){
    const elementRef = useRef("");
    const inputRef = useRef("");
    const checkRef = (e)=>{
        console.log("ref ==",elementRef.current)
        console.log(document.getElementById("head1"))
    }

    const save = (e)=>{
        console.log("value entered in textbox=",inputRef.current.value)
        console.log("using javascript=",document.getElementById("input1").value)
    }
    return (
        <div>
            <h1 id="head1">hello heading</h1>
            <h1 ref={elementRef}>hello ref hooks</h1>
            <input type="text" ref={inputRef} id="input1"/>
            <button onClick={checkRef}>checkRef</button>
            <button onClick={save}>save</button>

        </div>
    )
}

export default RefHooks