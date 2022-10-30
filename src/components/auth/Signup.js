import React, {useState} from "react";
function Signup() {
   const [email,setEmail] = useState("") 
  return (
    <div>
      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="email"
            value=""
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" />
        </div>
      </div>
      <button>Signup</button>
    </div>
  );
}

export default Signup;
