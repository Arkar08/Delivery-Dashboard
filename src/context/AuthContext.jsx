/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import Axios from "../apiConfig";

const AuthContext = createContext();



const AuthProvider = ({children})=>{


    const loginAuth = async(data)=>{
        try {
            await Axios.post("user/login",data).then((res)=>{
            if(res.data.status === 200 || res.data.success === true){
                localStorage.setItem("token",res.data.data.token)
            }
        }).catch((error)=>{
            console.log(error)
        })
        } catch (error) {
            console.error(error)
        }
    }


    const postData = {loginAuth}

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





