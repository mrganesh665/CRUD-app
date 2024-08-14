import React, { useState } from "react";
import axios from "axios"; 
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    const register = {
      username: username,
      email: email,
      password: password,
    };
    console.log(register);

    if (register.email !== "" && register.password !== "") {
      try {
        axios
          .post("http://localhost:5000/users", register)
          .then(() => {
            console.log("data sent successfully");
            toast.success("register successfully");
            setUsername("");
            setEmail("");
            setPassword("");
            navigate("/login")
          })
          .catch(() => {
            console.log("something went wrong");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("empty input fields");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={formSubmit}>
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={handleEmail} />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
