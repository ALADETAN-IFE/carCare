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
import NotificationDesc from "../Components/Notification/NotificationDesc/NotificationDesc";
// import LoggedInHome from '../Pages/LoggedInHome/LoggedInHome'

// const [notes, setnotes] = useState(
//   [
//     {
//       _id: "64e7fa4a0f1b2a0012345678",
//       isRead: false,
//       notesHead: "Welcome to CarCare. We are glad to have you here with us 1",
//       notesDesc: `Welcome to CarCare. We are glad to have you here with us! Your journey to smooth 
//           car maintenance starts now. Let’s keep your vehicle running smoothly with trusted 
//           mechanics at your fingertips. You can reach us through our support email, phone, 
//           or chat for assistance. We’re here to help!`
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345679",
//       isRead: false,
//       notesHead: "Car Care Mechanic A",
//       notesDesc: "Car Care Mechanic A has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345680",
//       isRead: false,
//       notesHead: "Car Care Reminder 1",
//       notesDesc: "It's time for your scheduled maintenance! Please book an appointment with your preferred mechanic."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345681",
//       isRead: false,
//       notesHead: "Car Care Mechanic B",
//       notesDesc: "Car Care Mechanic B has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345682",
//       isRead: false,
//       notesHead: "Welcome to CarCare. We are glad to have you here with us 2",
//       notesDesc: `Your journey to smooth car maintenance starts now! Our trusted mechanics are here to help.`
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345683",
//       isRead: false,
//       notesHead: "Car Care Mechanic C",
//       notesDesc: "Car Care Mechanic C has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345684",
//       isRead: false,
//       notesHead: "Car Care Service Reminder",
//       notesDesc: "Reminder: Your car is due for an oil change. Please schedule a service soon."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345685",
//       isRead: false,
//       notesHead: "Car Care Promotion",
//       notesDesc: "Exclusive offer! Get 10% off on your next car service. Valid until the end of the month."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345686",
//       isRead: false,
//       notesHead: "Car Care Mechanic D",
//       notesDesc: "Car Care Mechanic D has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345687",
//       isRead: false,
//       notesHead: "Car Care Appointment",
//       notesDesc: "Your appointment with Mechanic A has been confirmed. Check the details in your dashboard."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345688",
//       isRead: false,
//       notesHead: "Car Care Mechanic E",
//       notesDesc: "Car Care Mechanic E has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345689",
//       isRead: false,
//       notesHead: "Car Care Reminder 2",
//       notesDesc: "Your tire rotation is due soon. Schedule an appointment with your mechanic."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345690",
//       isRead: false,
//       notesHead: "Car Care Mechanic F",
//       notesDesc: "Car Care Mechanic F has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345691",
//       isRead: false,
//       notesHead: "Car Care Notification",
//       notesDesc: "Your car inspection is coming up. Don't forget to book an inspection."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345692",
//       isRead: false,
//       notesHead: "Welcome to CarCare. We are glad to have you here with us 3",
//       notesDesc: `CarCare makes it easy to find the right mechanic for your car. Start browsing today!`
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345693",
//       isRead: false,
//       notesHead: "Car Care Mechanic G",
//       notesDesc: "Car Care Mechanic G has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345694",
//       isRead: false,
//       notesHead: "Car Care Offer",
//       notesDesc: "Get 5% off on your next booking with Mechanic B. Valid until this week!"
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345695",
//       isRead: false,
//       notesHead: "Car Care Mechanic H",
//       notesDesc: "Car Care Mechanic H has sent you a message! Please check your inbox."
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345696",
//       isRead: false,
//       notesHead: "Car Care Tip",
//       notesDesc: "Tip of the day: Regular oil changes keep your engine running smoothly. Schedule one today!"
//     },
//     {
//       _id: "64e7fa4a0f1b2a0012345697",
//       isRead: false,
//       notesHead: "Car Care Mechanic I",
//       notesDesc: "Car Care Mechanic I has sent you a message! Please check your inbox."
//     }
//   ]

// )

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
              // {
              //   path: "earnings",
              //   element: <Booking />,
              // },
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
                element: <NotificationDesc />,
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
                element: <UserNotification
                  // setnotes={setnotes}
                  // notes={notes}

                />,
              },
              {
                path: "notification/:id",
                element: <NotificationDesc
                  // setnotes={setnotes}
                  // notes={notes}
                />,
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
