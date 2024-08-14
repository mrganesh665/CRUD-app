import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast';


const EditUser = () => {

    let navigate = useNavigate()

   let [editUser,setEditUser] = useState({
    username : "",
    email : "",
    password : "",
   })

   let {userID} =  useParams ();
   console.log(userID)

   useEffect(()=>{
    async function getUser(){
        let{ data} = await axios.get(`http://localhost:5000/users/${userID}`);
        console.log(data);
        setEditUser(data);
    }
    getUser();
   },[]);

   let handeEditUser = (e) => {
    let {name,value} = e.target ;
    setEditUser({...editUser,[name]:value});
   }

   let formSubmit = (e) =>{
    e.preventDefault();
    try{
        axios.put(`http://localhost:5000/users/${userID}`, editUser)
        .then(()=>{
            toast.success("user updated")
            navigate("/allUsers")
        }).catch(()=>{
          toast.fail("not updated")
        })
    } catch(error){
        console.log(error);
    }

   };
  return (
    <div>
        <form action='' onSubmit={formSubmit}>
            <h1>Edit User</h1>
            <label htmlFor="">Name</label>
            <input type="text" name='username' placeholder='enter name' value={editUser.username}  onChange={handeEditUser}/>
            <br />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder='enter password' value={editUser.email} onChange={handeEditUser}/>
            <br />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" name='password' placeholder='enter password' value={editUser.password} onChange={handeEditUser}/>
            <br />
            <br />
          <input type="submit" value="Update" />
        </form>
    </div>
  )
}

export default EditUser