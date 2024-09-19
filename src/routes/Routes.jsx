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
import ChangePassword from '../Pages/ChangePassword/ChangePassword'
import VerifyEmail from '../Pages/VerifyEmail/VerifyEmail'
import Booking from '../Pages/App/Driver/Booking/Booking'
import ServiceList from '../Pages/App/Driver/ServiceList/ServiceList'
import AllMechanics from '../Pages/App/Driver/Booking/AllMechanics/AllMechanics'
import MechSignUp from '../Pages/MechAuth/SignUp/MechSignUp'
import MechEmailVerf from '../Pages/MechAuth/SignUp/MechEmailVerf'
import MechInfo from '../Pages/MechAuth/PersonalInfo/MechInfo'
import MechDoc from '../Pages/MechAuth/PersonalInfo/Documentation/MechDoc'
import MechAuth from '../auth/MechAuth'
import DriverAuth from '../auth/DriverAuth'
import MechanicDetails from '../Pages/App/Driver/Booking/AllMechanics/MechanicDetails/MechanicDetails'
import AdminAuth from '../auth/AdminAuth'
// >>>>>>> 2a7b5ae915e3460c4f20e71ee076f3d5449118ab
// import LoggedInHome from '../Pages/LoggedInHome/LoggedInHome'


const Routes = createHashRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/contact",
        element: <ContactUs />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/mechSignUp",
        element: <MechSignUp />
    },
    // {
    //     path: "/mechEmailVerf",
    //     element: <MechEmailVerf />,
    // },
    {
        path: "/mechInfo",
        element: <MechInfo />
    },
    {
        path: "/mechDoc",
        element: <MechDoc/>,
    },
    {
        path: "/forgotPassword",
        element: <ForgotPassword />,
    },
    {
        path: "/changePassword",
        element: <ChangePassword />,
    },
    {
        path: '/verifyEmail',
        element: <VerifyEmail />,
    },
    {
        path: '/verifyEmail/:token',
        element: <VerifyEmail />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        element: <Auth />,
        children: [
            {
                element: <AdminAuth />,
                children: [
                    {
                        path: "/app/admin",
                        element: <AdminLayout />,
                        children: []
                    },
                ]
            },
            {
                element: <MechAuth />,
                children: [
                    {
                        path: "/app/mech",
                        element: <MechanicLayout />,
                        children: []
                    },
                ]
            },
            {
                element: <DriverAuth />,
                children: [
                    {
                        path: "/app",
                        element: <DriverLayout />,
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
                    {
                        path: "/mechanics",
                        element: <AllMechanics />
                    },
                    {
                        path: "/mechanics/:pageNum",
                        element: <AllMechanics />
                    },
                    {
                        path: "/mechanic/:mechId",
                        element: <MechanicDetails />
                    },
                    {
                        path: "/services",
                        element: <ServiceList />
                    },
                ]
            },
        ]
    }
])



export default Routes
