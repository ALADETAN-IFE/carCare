import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/routes'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
    <RouterProvider router={Routes} fallbackElement={<div>Something is wrong</div>} />
    <ToastContainer position='top-right' autoClose="1000"/>
   </>
  )
}

export default App