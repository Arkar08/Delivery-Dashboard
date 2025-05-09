import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Main = () => {
  return (
    <div className='h-[100vh]'>
      <div className='h-[10%] bg-[#141313] text-white flex flex-col justify-center border-b-white border-b-[0.3px]'>
        <Navbar />
      </div>
      <div className='flex h-[89.9%] w-[100vw] bg-[#141313ed]'>
        <div className='w-[16%] shadow-white shadow-lg'>
          <Sidebar />
        </div>
        <div className='w-[84%] p-3 text-white'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Main
