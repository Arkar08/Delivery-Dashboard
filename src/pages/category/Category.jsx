import React, { useEffect } from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'
import { useCategory } from '../../context/CategoryContext'
import { GridFilterListIcon } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'


const Category = () => {

  const {getCategory,category,loading} = useCategory();
  const navigate = useNavigate()

  useEffect(()=>{
    getCategory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    const handleEdit = (params) =>{
      navigate("/category/update",{state:{
        id:params
      }})
      
    }

    const handleDelete = () =>{
      console.log('delete')
    }


  const columns = [
    {
      field:"name",
      headerName:"CategoryName",
      width: 800 ,
      valueFormatter: (value) => (value !== '' ? value : '-')
    },
    {
      headerName:"Actions",
      width:220,
      sortable: false,
       renderCell: (params) =>(
        <div className='flex gap-5'>
          <button className='text-blue-500 hover:underline cursor-pointer' onClick={() => handleEdit(params.id)}>Edit</button>
          <button className='text-red-500 hover:underline cursor-pointer' onClick={handleDelete}>Delete</button>
        </div>
      ),
    }
  ]

  return (
    <div>
      <Header name='Category Lists' route='category'/>
      <DataTable rows={category} columns={columns} loading={loading}/>
    </div>
  )
}

export default Category
