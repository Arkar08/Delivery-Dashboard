import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const paginationModel = { page: 0, pageSize: 5 };


const DataTable = ({columns,rows,loading}) => {
  return (
   <div className='relative h-[77vh]'>
    <div className='w-[95%] h-[70vh] overflow-auto mx-auto  p-5 rounded-md'>
       <Paper sx={{ height: '100%', width: '100%' }}>
          <DataGrid
            loading={loading}
            rows={rows}
            rowHeight={68}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10,25,50,100]}
            sx={{ border: 0 ,p:'8px',width:'100%'}}
            rowSelection={false}
          />
       </Paper>
    </div>
   </div>
  )
}

export default DataTable
