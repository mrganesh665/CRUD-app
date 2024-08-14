import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [loginUser, setLoginUser] = useState({
  email:"",
  password: "",
});

let [registerUser, setRegisterUser] = useState(null);
let navigate = useNavigate()

useEffect(() => {
   async function fetchUser() {
   let {data} = await axios.get("http://localhost:5000/users");
   console.log(data);
   setRegisterUser(data);
}
fetchUser();
},[]);

let handleChange = (e) =>{
  let {name,value} = e.target;
  setLoginUser({ ...loginUser, [name]: value});
};

 function handleSubmit(e){
  e.preventDefault();
  console.log(loginUser);
  console.log(registerUser)
  let authUser = registerUser.find((users)=>{
    return(
      users.email== loginUser.email && users.password==loginUser.password
    );
  });
  console.log(authUser);

  if (authUser) {
    navigate("/profile")
  }
  else{
    navigate("/register")
  }
 }


    return (
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginUser.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginUser.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  };
  
  export default Login;
