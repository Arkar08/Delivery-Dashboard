import React from 'react'
import { dummyData } from '../utils/dummyData'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        {
          dummyData.map((data)=>{
            return (
              <div className='flex flex-col' key={data.text}>
                  <NavLink to={data.route} className={({isActive})=> isActive ? 'p-3 bg-blue-500 text-white rounded-md':'p-3 '}>
                    <span>{data.text}</span>
                  </NavLink>
              </div>
            )
          })
        }
    </div>
  )
}

export default Sidebar
