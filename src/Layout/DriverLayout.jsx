import { useDispatch, useSelector } from "react-redux"
import AddBooking from "../Pages/App/Driver/Booking/addBooking/addBooking"
import Booking from "../Pages/App/Driver/Booking/Booking"
import Confirm from "../Pages/App/Driver/Booking/Confirm/Confirm"
import Driver from "../Pages/App/Driver/Driver"
import "./layout.css"
// import { Outlet } from 'react-router-dom'
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import SideBar from "./SideBar/SideBar"
import { useEffect, useState } from "react"
import { clearnotVerified, setAppPages, setNotifications } from "../Global/Redux-actions/carCare"
import Settings from "../Pages/App/Driver/settings/settings"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const DriverLayout = () => {
  // addBooking
  
  // const { customerId, mechId } = useParams()
  const {pathname} = useLocation()
  // console.log(pathname, "pathname")
  // console.log(useLocation(), "useLocation()")
  const { appPages,
    UserDatas,
    UserDataWithToken,
    typeOfUser,
    isLoggedIn,
    booked
  } = useSelector((state) => state.carCare)
  const  customerId  = UserDatas._id
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    setpages1(appPages)
  }, [appPages])

  const [pages, setpages1] = useState(appPages)
  const [book, setbook] = useState(booked)
  // console.log(book, "book")
 
  const setpages = (pageName) => {
    dispatch(setAppPages(pageName))
  }
  const setcustomerId = () => {
    // if (!customerId) {
    // navigate(`/app/${UserDatas._id}`)
    navigate(`${pathname}/111`)
    // }
  }
  // const getUserDetails = async () => {
  //   const token = UserDataWithToken.token
  //   try {
  //     // const customerId = UserDatas._id
  //     const url = import.meta.env.VITE_API_Url
  //     const res = await axios.get(`${url}/api/v1/oneCustomer/${customerId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,  // Add token for authentication
  //         },
  //       }
  //     )
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //     // if (!navigator.onLine) {
  //     //   alert("You are currently offline")
  //     //   dispatch(clearnotVerified())
  //     // }
  //   }
  // }
  useEffect(() => {
    // getUserDetails()
    // if (mechId && pages == "addbooking") {

    // } else {
    //   if (!customerId) {
    //     setcustomerId()
    //   } else {
    //     setcustomerId()
    //   }
      
    // }
    setbook(booked)
  }, [appPages, booked])
  // console.log(UserDatas, "UserDatas" )
  // console.log(UserDataWithToken, "UserDataWithToken" )
  // console.log(typeOfUser, "typeOfUser")
  // console.log(isLoggedIn, "isLoggedIn" )
  const getAllNotifications = async () =>{
    const url = import.meta.env.VITE_API_Url
    const token = UserDataWithToken.token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const notifications = await axios.get(`${url}/api/v1/customers/notifications`, config)
      // console.log(notifications, "withAPI")
      // toast.success("Notifications fetched successfully")
      dispatch(setNotifications(notifications?.data?.data))
    } catch (error) {
      // console.log(error)
      const errMsg = error?.response?.data?.message 
      // if (errMsg == "No notifications found for this customer.") {
      //   toast.info("No notifications found")
      // }
      
    }
  }
  useEffect(() => {
   getAllNotifications()
  }, [])
  return (
    <div className="layout"
    // style={book ? {overflow: "hidden", height: "100vh"} : {overflow: "auto"}}
    >
      {
        book ?
          <Confirm setbook={setbook} setpages={setpages}/>
          : null
      }
      <SideBar pages={pages} setpages={setpages} book={book} />
      <div className="layoutDown">
        <LayoutHeader LayoutHeaderStyle />
        <Outlet />
        {/* {
          pages == "app" || pages == "" ?
            <Driver setpages={setpages} />
            :
            pages == "booking" ?
              <Booking setpages={setpages} pages={pages} />
              : pages == "addbooking" ?
                <AddBooking setbook={setbook} />
                : pages == "settings" ?
                  <Settings />
                  : null
        } */}
      </div>
    </div>
  )
  // return (
  //   <div className="layout"
  //   // style={book ? {overflow: "hidden", height: "100vh"} : {overflow: "auto"}}
  //   >
  //     {
  //       book ?
  //         <Confirm setbook={setbook} setpages={setpages}/>
  //         : null
  //     }
  //     <SideBar pages={pages} setpages={setpages} book={book} />
  //     <div className="layoutDown">
  //       <LayoutHeader LayoutHeaderStyle />
  //       {/* <Outlet /> */}
  //       {
  //         pages == "app" || pages == "" ?
  //           <Driver setpages={setpages} />
  //           :
  //           pages == "booking" ?
  //             <Booking setpages={setpages} pages={pages} />
  //             : pages == "addbooking" ?
  //               <AddBooking setbook={setbook} />
  //               : pages == "settings" ?
  //                 <Settings />
  //                 : null
  //       }
  //     </div>
  //   </div>
  // )
}

export default DriverLayout