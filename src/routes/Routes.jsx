import React from "react";
import { createHashRouter } from "react-router-dom";

// home routes
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";

// onbording routes
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ChangePassword from "../Pages/ChangePassword/ChangePassword";
import VerifyEmail from "../Pages/VerifyEmail/VerifyEmail";
import MechSignUp from "../Pages/MechAuth/SignUp/MechSignUp";
import MechEmailVerf from "../Pages/MechAuth/SignUp/MechEmailVerf";
import MechInfo from "../Pages/MechAuth/PersonalInfo/MechInfo";
import MechDoc from "../Pages/MechAuth/PersonalInfo/Documentation/MechDoc";

// layout routes
import AdminLayout from "../Layout/AdminLayout";
import MechanicLayout from "../Layout/MechanicLayout";
import DriverLayout from "../Layout/DriverLayout";

// auth routes
import Auth from "../auth/Auth";
import MechAuth from "../auth/MechAuth";
import DriverAuth from "../auth/DriverAuth";
import AdminAuth from "../auth/AdminAuth";

// driver routes
import ServiceList from "../Pages/App/Driver/ServiceList/ServiceList";
import AllMechanics from "../Pages/App/Driver/Booking/AllMechanics/AllMechanics";
import UserNotification from "../Pages/App/Driver/Notification/UserNotification";
import Driver from "../Pages/App/Driver/Driver";
import Booking from "../Pages/App/Driver/Booking/Booking";
import AddBooking from "../Pages/App/Driver/Booking/addBooking/addBooking";
import MechanicDetails from "../Pages/App/Driver/Booking/AllMechanics/MechanicDetails/MechanicDetails";

// mechanic routes
import MechNotification from "../Pages/App/Mechanic/Notification/MechNotification";
import Mechanic from "../Pages/App/Mechanic/Mechanics";

// driver && mechanic route
import Settings from "../Pages/App/Driver/settings/settings";

// error routes
import ErrorPage from "../err/ErrorPage";
import NotFound from "../err/NotFound";
// import LoggedInHome from '../Pages/LoggedInHome/LoggedInHome'

const Routes = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mechSignUp",
    element: <MechSignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mechEmailVerf",
    element: <MechEmailVerf />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mechEmailVerf/:token",
    element: <MechEmailVerf />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mechInfo",
    element: <MechInfo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mechDoc",
    element: <MechDoc />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verifyEmail/:token",
    element: <VerifyEmail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AdminAuth />,
        children: [
          {
            path: "/app/admin",
            element: <AdminLayout />,
            children: [],
          },
        ],
      },
      {
        element: <MechAuth />,
        children: [
          {
            path: "/app/mech",
            element: <MechanicLayout />,
            children: [
              {
                index: true,
                path: "/app/mech",
                exact: true,
                element: <Mechanic />,
              },
              {
                path: "booking",
                element: <Booking />,
              },
              {
                path: "setting",
                element: <Settings />,
              },
              {
                path: "notification",
                element: <MechNotification />,
              },
              {
                path: "notification/:id",
                element: <MechNotification />,
              },
            ],
          },
          {
            path: "/app/mech/:mechId",
            element: <MechanicLayout />,
            children: [],
          },
        ],
      },
      {
        element: <DriverAuth />,
        children: [
          {
            path: "/app",
            element: <DriverLayout />,
            // children: [
            //     {
            //         // index: true,
            //         path:"/app",
            //         element: <Driver/>,
            //     },
            //     // {
            //     //     path:"booking",
            //     //     element: <Booking/>,
            //     // }
            // ]
          },
          {
            // path: "/app/:customerId",
            path: "/app",
            element: <DriverLayout />,
            children: [
              // {
              //     // index: true,
              //     path:"/app",
              //     element: <Driver/>,
              // },
              {
                index: true,
                path: "/app",
                exact: true,
                // path: "home",
                element: <Driver />,
              },
              {
                path: "booking",
                element: <Booking />,
              },
              // {
              //     path:"booking/:id",
              //     element: <Booking/>,
              // },
              {
                path: "booking/add-booking",
                element: <AddBooking />,
              },
              {
                path: "booking/add-booking/:customerId/:mechId",
                element: <AddBooking />,
              },
              {
                path: "notification",
                element: <UserNotification />,
              },
              {
                path: "notification/:id",
                element: <UserNotification />,
              },
              {
                path: "setting",
                element: <Settings />,
              },
            ],
          },
          // {
          //     path: "/app/:customerId/:mechId",
          //     element: <DriverLayout />,
          //     // children: [
          //     //     {
          //     //         // index: true,
          //     //         path:"/app",
          //     //         element: <Driver/>,
          //     //     },
          //     //     // {
          //     //     //     path:"booking",
          //     //     //     element: <Booking/>,
          //     //     // }
          //     // ]
          // },
          {
            path: "/mechanics",
            element: <AllMechanics />,
          },
          {
            path: "/mechanics/:pageNum",
            element: <AllMechanics />,
          },
          {
            path: "/mechanic/:mechId",
            element: <MechanicDetails />,
          },
          {
            path: "/services",
            element: <ServiceList />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Catch-all route for unmatched paths
  },
]);

export default Routes;
