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
    <ToastContainer position='top-right' autoClose="2800" />
   </>
  )
}

export default App

// import React from "react";
// import "./App.css";
// import { RouterProvider } from "react-router-dom";
// import Routes from "./routes/Routes";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import ErrorPage from "./err/ErrorPage";
// import ErrorBoundary from "./err/ErrorPage";

// const App = () => {
//   return (
//     <ErrorBoundary>
//       //{" "}
//       {/* <> */}
//         <RouterProvider
//           router={Routes}
//           // fallbackElement={<div>Something is wrong</div>}
//           // fallbackElement={<ErrorPage />}
//         />
//         <ToastContainer position="top-right" autoClose="2800" />
//         //{" "}
//       {/* </> */}
//     </ErrorBoundary>
//   );
// };

// export default App;

