/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import Axios from "../apiConfig"

const BookingContext = createContext()


const BookingProvider = ({children}) =>{

    const [bookings,setBookings] = useState([])
    const [loading,setLoading] = useState(false)
    
        const getBookings = async()=>{
            setLoading(true)
            try {
                await Axios.get("/order").then((res)=>{
                    if(res.data.status === 200 || res.data.success === true){
                        setBookings(res.data.data);
                        setLoading(false)
                    }
                }).catch((error)=>{
                    console.log(error)
                    setLoading(false)
                })
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }

    const postData = {getBookings,bookings,loading}

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