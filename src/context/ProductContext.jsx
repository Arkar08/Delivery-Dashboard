/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import Axios from "../apiConfig";

const ProductContext = createContext();



const ProductProvider = ({children}) =>{


    const [products,setProducts] = useState([])
        const [loading,setLoading] = useState(false)
    
        const getProduct = async()=>{
            setLoading(true)
            try {
                await Axios.get("/products").then((res)=>{
                    if(res.data.status === 200 || res.data.success === true){
                        setProducts(res.data.data);
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

    const postData = {getProduct,products,loading}

    return(
        <ProductContext.Provider value={postData}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductProvider;


export const useProduct = () =>{
    return useContext(ProductContext)
}