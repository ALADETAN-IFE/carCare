import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUp'
import Login from '../Pages/Login/Login'
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword'
import Auth from '../auth/Auth'
import AdminLayout from '../Layout/AdminLayout'
import MechanicLayout from '../Layout/MechanicLayout'
import DriverLayout from '../Layout/DriverLayout'


const Routes = createHashRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },    
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/forgotPassword",
        element: <ForgotPassword/>
    },
    {
        element: <Auth/>,
        children: [
            {
                path: "",
                element: <AdminLayout/>,
                children: []
            },
            {
                path: "",
                element: <MechanicLayout/>,
                children: []
            },
            {
                path: "",
                element: <DriverLayout/>,
                children: []
            },
        ]
    }
])

export default Routes