import React from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'

const Products = () => {
  return (
    <div>
      <Header name='Product Lists' route='products'/>
      <DataTable />
    </div>
  )
}

export default Products
