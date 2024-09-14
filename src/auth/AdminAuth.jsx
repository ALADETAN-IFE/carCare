import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AdminAuth = () => {
    const isLoggedIn = useSelector((state) => state.carCare.isLoggedIn);
    const location = useLocation();
  
    useEffect(() => {
      // Store the current path in sessionStorage if the user is logged in
      if (isLoggedIn) {
        sessionStorage.setItem('lastVisitedPage', location.pathname);
      }
    }, [isLoggedIn, location.pathname]);
  
    // Determine the redirect path
    const redirectPath = sessionStorage.getItem('lastVisitedPage') || '/';
  
    return isLoggedIn ? <Outlet /> : <Navigate to={redirectPath} replace />;
}

export default AdminAuth

// 