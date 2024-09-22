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
import { clearnotVerified, setAppPages } from "../Global/Redux-actions/carCare"
import Settings from "../Pages/App/Driver/settings/settings"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const DriverLayout = () => {
  // addBooking
  const { customerId, mechId } = useParams()
  const { appPages,
    UserDatas,
    UserDataWithToken,
    typeOfUser,
    isLoggedIn,
  } = useSelector((state) => state.carCare)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    setpages1(appPages)
  }, [appPages])

  const [pages, setpages1] = useState(appPages)
  const [book, setbook] = useState(false)
  const setpages = (pageName) => {
    dispatch(setAppPages(pageName))
  }
  const setcustomerId = () => {
    // if (!customerId) {
    navigate(`/app/${UserDatas._id}`)
    // }
  }
  const getUserDetails = async () => {
    const token = UserDataWithToken.token
    try {
      // const customerId = UserDatas._id
      const url = import.meta.env.VITE_API_Url
      const res = await axios.get(`${url}/api/v1/oneCustomers/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Add token for authentication
          },
        }
      )
      console.log(res)
    } catch (error) {
      console.log(error)
      // if (!navigator.onLine) {
      //   alert("You are currently offline")
      //   dispatch(clearnotVerified())
      // }
    }
  }
  useEffect(() => {
    if (mechId && pages == "addbooking") {

    } else {
      if (!customerId) {
        setcustomerId()
      } else {
        setcustomerId()
        getUserDetails()
      }
      
    }
  }, [appPages])
  // console.log(UserDatas, "UserDatas" )
  // console.log(UserDataWithToken, "UserDataWithToken" )
  console.log(typeOfUser, "typeOfUser")
  // console.log(isLoggedIn, "isLoggedIn" )
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
        {/* <Outlet /> */}
        {
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
        }
      </div>
    </div>
  )
}

export default DriverLayout