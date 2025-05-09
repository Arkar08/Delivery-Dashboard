/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'
import { useProduct } from '../../context/ProductContext'

const Products = () => {

  const {getProduct,products} = useProduct()


  useEffect(()=>{
    getProduct()
  },[])


  const columns = [
    {
      field:"image",
      headerName:"Image",
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
      <DataTable columns={columns} rows={products}/>
    </div>
  )
}

export default Products
