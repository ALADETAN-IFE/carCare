import AddBooking from "../Pages/App/Driver/Booking/addBooking/addBooking"
import Booking from "../Pages/App/Driver/Booking/Booking"
import Confirm from "../Pages/App/Driver/Booking/Confirm/Confirm"
import Driver from "../Pages/App/Driver/Driver"
import "./layout.css"
// import { Outlet } from 'react-router-dom'
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import SideBar from "./SideBar/SideBar"
import { useState } from "react"

const DriverLayout = () => {
  // addBooking
  const [pages, setpages] = useState("app")
  const [book, setbook] = useState(false)
  console.log(pages)
  return (
    <div className="layout" 
    style={book ? {overflow: "hidden", height: "100vh"} : {overflow: "auto"}}
    >
        {
                book ? 
                <Confirm setbook={setbook} book={book} />
                : null
            }
      <SideBar pages={pages}setpages={setpages}/>
      <div className="layoutDown">
      <LayoutHeader />
        {/* <Outlet /> */}
        {
          pages == "app" ?
          <Driver setpages={setpages}/>
          : 
          pages == "booking" ?
          <Booking />
          : pages == "addbooking" ?
          <AddBooking setbook={setbook} book={book}/>
          : null
        }
      </div>
    </div>
  )
}

export default DriverLayout