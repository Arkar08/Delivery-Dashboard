import React from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'

const Users = () => {
  return (
    <div>
       <Header name='User Master' route='users'/>
       <DataTable />
    </div>
  )
}

export default Users
