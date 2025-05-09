/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import Axios from "../apiConfig";

const ProductContext = createContext();



const ProductProvider = ({children}) =>{


    const [products,setProducts] = useState([])
    
        const getProduct = async()=>{
            try {
                await Axios.get("/products").then((res)=>{
                    if(res.data.status === 200 || res.data.success === true){
                        setProducts(res.data.data);
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            } catch (error) {
                console.error(error)
            }
        }

    const postData = {getProduct,products}

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