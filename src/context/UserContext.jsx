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
                    alert(error.response.data.message)
                    setLoading(false)
                })
            } catch (error) {
                console.log(error)
                alert(error.response.data.message)
                setLoading(false)
            }
        }

        const createUser = async(data) =>{
            setLoading(true)
            try {
                await Axios.post("/user",data).then((res)=>{
                    if(res.data.status === 201 || res.data.success === true){
                        setLoading(false)
                        alert("User Create Successfully.")
                    }
                    
                }).catch((error)=>{
                    alert(error.response.data.message)
                    setLoading(false)
                })
            } catch (error) {
                alert(error.response.data.message)
                setLoading(false)
            }
        }

    const postData = {getUser,users,loading,createUser}

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