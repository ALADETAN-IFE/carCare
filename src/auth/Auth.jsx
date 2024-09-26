import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  // const isLoggedIn1 = localStorage.getItem("isLoggedIn")
  // console.log(isLoggedIn1)
  // const [isLoggedIn, setisLoggedIn] = useState(isLoggedIn1)
  const {isLoggedIn, typeOfUser} = useSelector((state) => state.carCare);
  // useEffect(() => {
  //   setisLoggedIn(isLoggedIn1)
  // }, )
  // console.log(typeOfUser)
  return isLoggedIn && typeOfUser.trim() !== ""? <Outlet/>  :  <Navigate to="/login" replace={true}/>
  // return !isLoggedIn && typeOfUser.trim() == ""? <Outlet/>  :  <Navigate to="/login" replace={true}/>
}

export default Auth