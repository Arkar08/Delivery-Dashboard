import React, { useEffect } from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'
import { useCategory } from '../../context/CategoryContext'
import { GridFilterListIcon } from '@mui/x-data-grid'


const Category = () => {

  const {getCategory,category} = useCategory();




  useEffect(()=>{
    getCategory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const columns = [
    {
      field:"name",
      headerName:"CategoryName",
      width: 800 ,
      valueFormatter: (value) => (value !== '' ? value : '-')
    },
    {
      field:'actions',
      headerName:"Actions",
      width:300,
      sortable: false
    }
  ]

  return (
    <div>
      <Header name='Category Lists' route='category'/>
      <DataTable rows={category} columns={columns}/>
    </div>
  )
}

export default Category
