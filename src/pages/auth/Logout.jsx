import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const Logout = () => {

  const navigate  = useNavigate()
  const {logoutAuth} = useAuth()


  const cancel = () =>{
    navigate('/dashboard')
  }

  const yesBtn = async() =>{
    await logoutAuth()
    navigate("/auth/login")
  }

  return (
    <div className='logout'>
        <form>
          <div>
            <h3 className='text-2xl text-center font-bold'>Are You Want To Logout?</h3>
          </div>
          <div className='flex gap-5 mt-10 justify-center items-center'>
            <Button color='error' variant='outlined' onClick={cancel}>No</Button>
            <Button color='primary' variant='contained' onClick={yesBtn}>Yes</Button>
          </div>
        </form>
    </div>
  )
}

export default Logout
