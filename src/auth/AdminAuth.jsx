import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AdminAuth = () => {
    const {isLoggedIn, typeOfUser} = useSelector((state) => state.carCare);
    const location = useLocation();
  
    useEffect(() => {
      // Store the current path in sessionStorage if the user is logged in
      if (isLoggedIn) {
        sessionStorage.setItem('lastVisitedPage', location.pathname);
      }
      if (redirectPath == "/app/admin") {
        sessionStorage.setItem('lastVisitedPage', "/login");
      }
    }, [isLoggedIn, location.pathname]);
    // console.log(typeOfUser, "ad")
    // Determine the redirect path
    const redirectPath = sessionStorage.getItem('lastVisitedPage') || '/';
  
    return isLoggedIn && typeOfUser === "Admin" ? <Outlet /> : <Navigate to={redirectPath} replace />;
}

export default AdminAuth

// 