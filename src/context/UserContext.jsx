/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import Axios from "../apiConfig"


const UserContext = createContext()

const UserProvider = ({children})=>{

    const [users,setUsers] = useState([])
            const [loading,setLoading] = useState(false)
    
        const getUser = async()=>{
            setLoading(true)
            try {
                await Axios.get("/user").then((res)=>{
                    if(res.data.status === 200 || res.data.success === true){
                        setUsers(res.data.data);
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

    const postData = {getUser,users,loading}

    return (
        <UserContext.Provider value={postData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;


export const useUser = () =>{
    return useContext(UserContext)
}