import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/allUsers"}>AllUsers</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar