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
                console.log(error)
                setLoading(false)
            })
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }


    const postData = {getCategory,category,loading}

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