/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import Header from '../../components/Header'
import DataTable from '../../components/Table'
import { useBooking } from '../../context/BookingContext'

const Booking = () => {

  const {bookings,getBookings} = useBooking();


  useEffect(()=>{
    getBookings()
  },[])

  const columns = [
    {
      field:"customer",
      headerName:"Customer Name",
      width:180
    },
    {
      field:"deliveryMen",
      headerName:"Delivery Man",
      width:180
    },
    {
      field:'orderNo',
      headerName:"Order No.",
      width:180
    },
    {
      field:"productCount",
      headerName:"ProductCount",
      width:180
    },
    {
      field:"payment",
      headerName:"Payment",
      width:180
    },
    {
      field:'totalAmount',
      headerName:"Total Amount",
      width:180
    },
    {
      field:"status",
      headerName:"Status",
      width:180
    },
    {
      field:"actions",
      headerName:"Actions",
      width:180
    }
  ]


  return (
    <div>
      <Header name='Bookings'/>
      <DataTable rows={bookings} columns={columns} text='bookings'/>
    </div>
  )
}

export default Booking
