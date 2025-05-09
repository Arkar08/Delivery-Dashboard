import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({name,route}) => {
  return (
    <div>
      <div className='flex justify-between p-4'>
        <h3 className='text-2xl'>{name}</h3>
        <div>
          {
            name !== 'Bookings' && (
              <Link to={`/${route}/create`}>
                    <img src="/add.png" alt="" width={35} className="object-center object-cover cursor-pointer"/>
              </Link>
            )
          }
          
        </div>
      </div>
    </div>
  )
}



export default Header
