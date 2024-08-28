import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUp'
import Login from '../Pages/Login/Login'

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
])

export default Routes