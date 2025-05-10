/* eslint-disable react-refresh/only-export-components */
import Axios from "../apiConfig";
import { createContext, useContext,useState } from "react"

const CategoryContext = createContext()



const CategoryProvider = ({children})=>{

    const [category,setCategory] = useState([])
    const [loading,setLoading] = useState(false)

    const getCategory = async()=>{
        setLoading(true)
        try {
            await Axios.get("/category").then((res)=>{
                if(res.data.status === 200 || res.data.success === true){
                    setCategory(res.data.data);
                    setLoading(false)
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

    const createCategory = async(data) =>{
        setLoading(true)
        try {
            await Axios.post("/category",data).then((res)=>{
                if(res.data.status === 201 || res.data.success === true){
                    setLoading(false)
                    alert("Create Category Successfully.")
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


    const postData = {getCategory,category,loading,createCategory}

    return (
        <CategoryContext.Provider value={postData}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;

export const useCategory = () =>{
    return useContext(CategoryContext)
}