import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUp'
import Login from '../Pages/Login/Login'
import Auth from '../auth/Auth'
import AdminLayout from '../Layout/AdminLayout'
import MechanicLayout from '../Layout/MechanicLayout'
import DriverLayout from '../Layout/DriverLayout'
import ForgotPassword from '../Pages/ForgotPassword/forgotPassword'
import About from '../Pages/About/About'
import Blog from '../Pages/Blog/Blog'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Driver from '../Pages/App/Driver/Driver'


const Routes = createHashRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/blog",
        element: <Blog/>
    },
    {
        path: "/contact",
        element: <ContactUs/>
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
                path: "/admin",
                element: <AdminLayout/>,
                children: []
            },
            {
                path: "/mech",
                element: <MechanicLayout/>,
                children: []
            },
            {
                path: "/app",
                element: <DriverLayout/>,
                children: [
                    {
                        index: true,
                        element: <Driver/>,
                    }
                ]
            },
        ]
    }
])

export default Routes