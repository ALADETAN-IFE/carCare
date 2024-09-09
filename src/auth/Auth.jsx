import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  const isLoggedIn1 = localStorage.getItem("isLoggedIn")
  console.log(isLoggedIn1)
  const [isLoggedIn, setisLoggedIn] = useState(isLoggedIn1)
  useEffect(() => {
    setisLoggedIn(isLoggedIn1)
  }, )
  return (
    <div>
        {
            isLoggedIn ? 
            <Outlet/>
            : 
            <Navigate to="/" replace={true}/>
        }
    </div>
  )
}

export default Auth