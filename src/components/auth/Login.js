import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
function Login(){
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("");
    let navigate = useNavigate();

  //  useEffect(()=>{
  //   let isLoggedIn  = localStorage.getItem("isLoggedIn")
  //   if(isLoggedIn==='true')
  //       navigate("/dashboard");
  //  })

   const onEmailChange=(event)=>{
    setEmail(event.target.value)
   }
   const onPasswordChange=(event)=>{
    setPassword(event.target.value)
   }

   const login = ()=>{
        if(email==="test@gmail.com" && password==="123") {
          localStorage.setItem("isLoggedIn",true)
          alert("login successfully")
          navigate("/dashboard");
        }else {
          alert("invalid credentials")
        }
    }
    return (
      <div>
        <div class="mb-3 row">
          <label for="email" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"

              class="form-control-plaintext"
              id="email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" 
             value={password}
             onChange={onPasswordChange}/>
          </div>
        </div>
        <button onClick={login}>Login</button>
      </div>
    );
}

export default Login