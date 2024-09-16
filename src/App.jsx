import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <RouterProvider router={Routes} fallbackElement={<div>Something is wrong</div>} />
    <ToastContainer position='top-right' autoClose="1000" />
   </>
  )
}

export default App
