
import Main from "../layouts/Main"
import AuthLayout from "../pages/auth/AuthLayout"
import Login from "../pages/auth/Login"
import Logout from "../pages/auth/Logout"
import Booking from "../pages/booking/Booking"
import BookingLayout from "../pages/booking/BookingLayout"
import Category from "../pages/category/Category"
import CategoryLayout from "../pages/category/CategoryLayout"
import CreateCategory from "../pages/category/CreateCategory"
import Dashboard from "../pages/dashboard/Dashboard"
import DashboardLayout from "../pages/dashboard/DashboardLayout"
import NotFound from "../pages/error/NotFound"
import CreateProduct from "../pages/products/CreateProduct"
import ProductLayout from "../pages/products/ProductLayout"
import Products from "../pages/products/Products"
import CreateUser from "../pages/users/CreateUser"
import UserLayout from "../pages/users/UserLayout"
import Users from "../pages/users/Users"

export const data = [
    {
                path:'/auth',
                Component:AuthLayout,
                children:[
                    {
                        path:"login",
                        Component:Login
                    },
                    {
                        path:"logout",
                        Component:Logout
                    }
                ]
            },
   {
        path:"/",
        Component:Main,
        children:[
            {
                path:"dashboard",
                Component:DashboardLayout,
                children:[
                    {
                        index:true,
                        Component:Dashboard
                    }
                ]
            },
            {
                path:"users",
                Component:UserLayout,
                children:[
                    {
                        index:true,
                        Component:Users
                    },
                    {
                        path:'create',
                        Component:CreateUser
                    }
                ]
            },
            {
                path:"category",
                Component:CategoryLayout,
                children:[
                    {
                        index:true,
                        Component:Category
                    },
                    {
                        path:"create",
                        Component:CreateCategory
                    }
                ]
            },
            {
                path:"booking",
                Component:BookingLayout,
                children:[
                    {
                        index:true,
                        Component:Booking
                    }
                ]
            },
            {
                path:"products",
                Component:ProductLayout,
                children:[
                    {
                        index:true,
                        Component:Products
                    },
                    {
                        path:"create",
                        Component:CreateProduct
                    }
                ]
            }
        ]
   },
   {
    path:"*",
    Component:NotFound
   }
]