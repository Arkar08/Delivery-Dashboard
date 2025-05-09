/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'
import { useUser } from '../../context/UserContext'

const Users = () => {


  const {users,getUser,loading} = useUser()

  useEffect(()=>{
    getUser()
  },[])
  


  const columns = [
      {
        field:"name",
        headerName:"Full Name",
        width:220
      },
      {
        field:"email",
        headerName:"Email",
        width:220
      },
      {
        field:"phone",
        headerName:"Phone",
        width:150
      },
      {
        field:"address",
        headerName:"Address",
        width:180
      },
      {
        field:"role",
        headerName:"Role",
        width:150
      },
      {
        field:"actions",
        headerName:"Actions",
        width:180
      }
  ]


  return (
    <div>
       <Header name='User Master' route='users'/>
       <DataTable rows={users} columns={columns} loading={loading}/>
    </div>
  )
}

export default Users
