import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Main = () => {
  return (
    <div className='h-[100vh]'>
      <div className='h-[10%]   flex flex-col justify-center border-b-black border-b-[0.3px]'>
        <Navbar />
      </div>
      <div className='flex h-[89.9%] w-[100vw]'>
        <div className='w-[16%] shadow-black shadow-sm rounded-md'>
          <Sidebar />
        </div>
        <div className='w-[84%] p-3 '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Main
