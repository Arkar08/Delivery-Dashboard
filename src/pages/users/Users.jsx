/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Users = () => {


  const {users,getUser,loading} = useUser()
  const navigate = useNavigate();

  useEffect(()=>{
    getUser()
  },[])

    const handleEdit = (event) =>{
        navigate("/user/update",{
          state:event
        })
    }

    const handleDelete = () =>{
      console.log('delete')
    }

  


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
        headerName:"Actions",
        width:220,
        sortable: false,
        renderCell: (params) => (
          <div className='flex gap-5'>
            <button className='text-blue-500 hover:underline cursor-pointer' onClick={()=>handleEdit(params.id)}>Edit</button>
            <button className='text-red-500 hover:underline cursor-pointer' onClick={handleDelete}>Delete</button>
          </div>
        ),
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
