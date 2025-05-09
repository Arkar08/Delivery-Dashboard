/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import Axios from "../apiConfig"

const BookingContext = createContext()


const BookingProvider = ({children}) =>{

    const [bookings,setBookings] = useState([])
    
        const getBookings = async()=>{
            try {
                await Axios.get("/order").then((res)=>{
                    if(res.data.status === 200 || res.data.success === true){
                        setBookings(res.data.data);
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            } catch (error) {
                console.error(error)
            }
        }

    const postData = {getBookings,bookings}

    return (
        <BookingContext.Provider value={postData}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider;


export const useBooking = () =>{
    return useContext(BookingContext)
}