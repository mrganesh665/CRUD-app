import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link ,useNavigate} from 'react-router-dom';

const AllUsers = () => {
    let [users,setUsers] = useState(null);
    
    let navigate = useNavigate()

    useEffect(()=>{
    async function fetchUsers() {
        try{
            let {data} = await axios.get("http://localhost:5000/users");
            setUsers(data);
        } catch(error){
            console.log(error);
        }
    }
    fetchUsers();
    },[]);

    function deleteUser(id){
        console.log(id);
        try{
            axios.delete(`http://localhost:5000/users/${id}`).then(()=>{
             toast.success("user deleted");
             window.location.reload();
            });
        }catch(error){
        console.log(error);
    }}
  return (
    <div>
    <h1 className='center'>AllUsers</h1>
        <section className='flex justify-center items-center flex-wrap'>
        {users?.map((users) =>{
           
            let {id,username,email} =users;
            return(
                <article
                key = {id}
                className='border-[2px] p-3 m-4 bg-slate-100 rounded'
                >
                   <h1>Id : {id}</h1>
                   <h1>Name : {username}</h1>
                   <p>Email : {email}</p>
                   <div>
                   <Link to={`/editUser/${id}`}>
                     <button className='border-[2px] border-green-400 px-2 mx-2 bg-green-300 my-2 rounded'>
                        edit
                     </button></Link>
                     <button className='border-[2px] border-red-400 px-2  bg-red-200 my-2 rounded'
                     onClick={()=>{deleteUser(id)}}>
                        delete
                     </button>
                   </div>
                </article>
            )
        })}
         </section>
    </div>
  )
}

export default AllUsers