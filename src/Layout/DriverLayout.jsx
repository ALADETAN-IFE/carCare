import React from 'react'
import { Outlet } from 'react-router-dom'

const DriverLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default DriverLayout