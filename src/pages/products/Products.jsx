/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'
import { useProduct } from '../../context/ProductContext'

const Products = () => {

  const {getProduct,products,loading} = useProduct()

  useEffect(()=>{
    getProduct()
  },[])

  const handleEdit = () =>{
    console.log('edit')
  }

  const handleDelete = () =>{
    console.log('delete')
  }


  const columns = [
    {
      field:"image",
      headerName:"Image",
      renderCell: (params)=>{
       return(
            <div className='flex items-center justify-center'>
              <img src={`https://delivery-app-backend-lbba.onrender.com/uploads/${params.row.image}`} alt='image'/>
            </div>
       )
    }
    },
    {
      field:"title",
      headerName:"Title",
      width:220
    },
    {
      field:"category",
      headerName:"Category",
      width:220
    },
    {
      field:"price",
      headerName:"Price",
      width:150
    },
    {
      field:"description",
      headerName:"Description",
      width:220
    },
    {
      headerName:"Actions",
      width:220,
      sortable: false,
       renderCell: (params) => (
        <div className='flex gap-5'>
          <button className='text-blue-500 hover:underline cursor-pointer' onClick={handleEdit}>Edit</button>
          <button className='text-red-500 hover:underline cursor-pointer' onClick={handleDelete}>Delete</button>
        </div>
      ),
    }
  ]



  return (
    <div>
      <Header name='Product Lists' route='products'/>
      <DataTable columns={columns} rows={products} loading={loading}/>
    </div>
  )
}

export default Products
