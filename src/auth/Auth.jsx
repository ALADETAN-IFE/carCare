import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const [isLoggedIn, setisLoggedIn] = useState(true)
  return (
    <div>
        {
            isLoggedIn ? 
            <Outlet/>
            : 
            <Navigate to={"/"} replace={true}/>
        }
    </div>
  )
}

export default Auth