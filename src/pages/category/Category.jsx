import React from 'react'
import Header from '../../components/Header'
import DataTable from '../../components/Table'

const Category = () => {
  return (
    <div>
      <Header name='Category Lists' route='category'/>
      <DataTable />
    </div>
  )
}

export default Category
