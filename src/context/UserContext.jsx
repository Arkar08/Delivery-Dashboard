/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import Axios from "../apiConfig"


const UserContext = createContext()

const UserProvider = ({children})=>{

    const [users,setUsers] = useState([])
    
        const getUser = async()=>{
            try {
                await Axios.get("/user").then((res)=>{
                    if(res.data.status === 200 || res.data.success === true){
                        setUsers(res.data.data);
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            } catch (error) {
                console.error(error)
            }
        }

    const postData = {getUser,users}

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