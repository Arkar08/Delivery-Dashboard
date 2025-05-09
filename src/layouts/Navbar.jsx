import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 flex-row'>
      <div className='flex gap-8'>
        <h2 className='text-2xl font-bold text-blue-400'>Delivery App</h2>
        <img src="/bars-solid.svg" alt="" width={22} className='cursor-pointer'/>
      </div>
      <div className='relative'>
            <span className='absolute top-[-15px] right-[-10px] text-md text-red-600'>10</span>
            <img src="/bell-solid.svg" alt="" width={22} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar
