import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-15 flex-row'>
      <div className='flex gap-5'>
        <h2 className='text-2xl font-bold'>Delivery App</h2>
        <img src="/menu-bar (1).png" alt="" width={35} className='cursor-pointer'/>
      </div>
      <div className='relative'>
            <span className='absolute top-[-15px] right-[-10px] text-md text-red-600'>10</span>
            <img src="/bell.png" alt="" width={28} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar
