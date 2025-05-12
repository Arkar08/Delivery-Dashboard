import React, { useState } from 'react'
import Input from '../../components/Input'
import { Button } from '@mui/material'
import Select from '../../components/Select'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

const UpdateUser = () =>{


    const [state]  = useLocation()

    console.log(state)

      const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        address:"",
        role:""
      })
    
      const navigate = useNavigate();
      const {createUser} = useUser();
    
      const cancelBtn = () =>{
        setUser({
          name:"",
          email:"",
          password:"",
          phone:"",
          address:"",
          role:""
        })
        navigate("/users")
      }
    
      const userChange = (event) =>{
        setUser((prev)=>(
          {
            ...prev,[event.target.name]:event.target.value
          }
        ))
      }
    
      const createBtn = async() =>{
        await createUser(user)
         setUser({
          name:"",
          email:"",
          password:"",
          phone:"",
          address:"",
          role:""
        })
        navigate("/users")
      }

    return (
        <div>
        <h3 className='text-2xl  p-4'>Update User</h3>
       <div className='shadow-lg relative h-[72vh] mt-5 w-[90%] mx-auto rounded-md p-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Name">Name</label>
              <Input placeholder="Enter Name" value={user.name} name="name" onChange={userChange}/>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Email">Email</label>
              <Input placeholder="example@gmail.com" value={user.email} name="email" onChange={userChange}/>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Password">Password</label>
              <Input placeholder="Enter Password" value={user.password} name="password" onChange={userChange}/>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Phone Number">Phone Number</label>
              <Input placeholder="9123456789" type='number' value={user.phone} name="phone" onChange={userChange}/>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Address">Address</label>
              <Input placeholder="Enter Address" value={user.address} name="address" onChange={userChange}/>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Role">Role</label>
              <Select value={user.role} name="role" onChange={userChange}>
                <option value="">Select</option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Delivery">Delivery</option>
              </Select>
            </div>
          </div>
          <div className='absolute bottom-4 right-[42%] flex gap-5'>
            <Button variant='outlined' color='error' onClick={cancelBtn}>Cancel</Button>
            <Button variant='contained' color='primary' onClick={createBtn}>Update</Button>
          </div>
       </div>
    </div>
    )
}

export default UpdateUser;