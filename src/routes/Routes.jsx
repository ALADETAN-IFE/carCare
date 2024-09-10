import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUp'
import Login from '../Pages/Login/Login'
import Auth from '../auth/Auth'
import AdminLayout from '../Layout/AdminLayout'
import MechanicLayout from '../Layout/MechanicLayout'
import DriverLayout from '../Layout/DriverLayout'
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword'
import About from '../Pages/About/About'
import Blog from '../Pages/Blog/Blog'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Driver from '../Pages/App/Driver/Driver'
// import Driver from '../Pages/App/Driver/Driver'
import ChangePassword from '../Pages/ChangePassword/ChangePassword'
import VerifyEmail from '../Pages/VerifyEmail/VerifyEmail'
import Booking from '../Pages/App/Driver/Booking/Booking'
import ServiceList from '../Pages/App/Driver/ServiceList/ServiceList'
// import Booking from '../Pages/App/Driver/Booking/Booking'
// import LoggedInHome from '../Pages/LoggedInHome/LoggedInHome'


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
        element: <ForgotPassword/>,
    },
    { 
        path: "/changePassword",
        element: <ChangePassword/>,
    },
    {
        path: '/verifyEmail',
        element: <VerifyEmail/>,
    },
    {
        path: '/serviceList',
        element: <ServiceList/>,
    },
    {
        element: <Auth/>,
        children: [
            // {
            //     path: "/app/mechanics",
            //     element: 
            // },
            // {
            //     path: "/home",
            //     element: <LoggedInHome/>
            // },
            {
                path: "/app/admin",
                element: <AdminLayout/>,
                children: []
            },
            {
                path: "/app/mech",
                element: <MechanicLayout/>,
                children: []
            },
            {
                path: "/app",
                element: <DriverLayout/>,
                // children: [
                //     {
                //         // index: true,
                //         path:"/app",
                //         element: <Driver/>,
                //     },
                //     // {
                //     //     path:"booking",
                //     //     element: <Booking/>,
                //     // }
                // ]
            },
        ]
    }
])

export default Routes
