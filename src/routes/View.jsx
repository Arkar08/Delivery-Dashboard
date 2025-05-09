import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { data } from "./Data"


const View = ()=>{
    const routes = createBrowserRouter(data)

    return (
        <RouterProvider router={routes}/>
    )
}

export default View;
