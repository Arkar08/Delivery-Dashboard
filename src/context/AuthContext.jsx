/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import Axios from "../apiConfig";

const AuthContext = createContext();



const AuthProvider = ({children})=>{

    const [loading,setLoading] = useState(false)


    const loginAuth = async(data)=>{
        setLoading(true)
        try {
            await Axios.post("user/login",data).then((res)=>{
            if(res.data.status === 200 || res.data.success === true){
                localStorage.setItem("token",res.data.data.token)
                setLoading(false)
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
        })
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }

    const logoutAuth = async() =>{
        try {
            await Axios.post("user/logout").then((res)=>{
                if(res.status === 200 || res.success === true){
                    localStorage.removeItem("token")
                }
            })
        } catch (error) {
             console.error(error)
        }
    }


    const postData = {loginAuth,logoutAuth,loading}

    return (
        <AuthContext.Provider value={postData}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;


export const useAuth = () =>{
    return useContext(AuthContext)
}





