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


  const columns = [
    {
      field:"image",
      headerName:"Image",
      renderCell: (params)=>{
       return(
            <div className='h-[100px]'>
              <img src={params.row.image} alt='image' />
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
      field:"actions",
      headerName:"Actions",
      width:220,
      sortable: false
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
