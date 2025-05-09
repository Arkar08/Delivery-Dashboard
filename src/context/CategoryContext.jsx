/* eslint-disable react-refresh/only-export-components */
import Axios from "../apiConfig";
import { createContext, useContext,useState } from "react"

const CategoryContext = createContext()



const CategoryProvider = ({children})=>{

    const [category,setCategory] = useState([])

    const getCategory = async()=>{
        try {
            await Axios.get("/category").then((res)=>{
                if(res.data.status === 200 || res.data.success === true){
                    setCategory(res.data.data);
                }
            }).catch((error)=>{
                console.log(error)
            })
        } catch (error) {
            console.error(error)
        }
    }


    const postData = {getCategory,category}

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