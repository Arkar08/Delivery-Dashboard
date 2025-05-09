import { useState } from 'react'
import Input from '../../components/Input'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [users,setUsers] = useState({
    email:"",
    password:""
  })

  const handleChange = (event)=>{
    setUsers((prev)=>(
      {
        ...prev,[event.target.name]:event.target.value
      }
    ))
  }

  const {loginAuth} = useAuth()

  const loginSubmit = async(event)=>{
    event.preventDefault();
    await loginAuth(users);
    const token = localStorage.getItem("token")
    if(token){
      navigate("/dashboard")
    }
  }

  return (
    <div className='login'>
        <form onSubmit={loginSubmit}>
          <h3 className="text-center text-2xl uppercase space-x-1">Login</h3>
          <div className='flex flex-col mt-5'>
            <label htmlFor="Email">Email</label>
            <Input placeholder="Enter Email" value={users.email} name="email" onChange={handleChange} autoComplete='off'/>
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="Password">Password</label>
            <Input placeholder="Enter Password" value={users.password} name="password"  onChange={handleChange} autoComplete='off'/>
          </div>
          <div className='my-8 flex items-center justify-center'>
            <Input type="submit" value="LOGIN" className="w-[75%] bg-blue-500 p-2 rounded-md text-white"/>
          </div>
        </form>
    </div>
  )
}

export default Login
