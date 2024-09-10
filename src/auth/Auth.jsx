import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  // const isLoggedIn1 = localStorage.getItem("isLoggedIn")
  // console.log(isLoggedIn1)
  // const [isLoggedIn, setisLoggedIn] = useState(isLoggedIn1)
  const isLoggedIn = useSelector((state)=> state.carCare.isLoggedIn)
  // useEffect(() => {
  //   setisLoggedIn(isLoggedIn1)
  // }, )
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