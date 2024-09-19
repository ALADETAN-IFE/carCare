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
import { setAppPages } from "../Global/Redux-actions/carCare"
import Settings from "../Pages/App/Driver/settings/settings"

const DriverLayout = () => {
  // addBooking
  const AppPages = useSelector((state)=> state.carCare.appPages)
  const dispatch = useDispatch()
  useEffect(() => {
    setpages1(AppPages)
  }, [AppPages])
  
  const [pages, setpages1] = useState(AppPages)
  const [book, setbook] = useState(false)
  const setpages = (pageName) => {
    dispatch(setAppPages(pageName))
  }
  // console.log(pages)
  return (
    <div className="layout" 
    // style={book ? {overflow: "hidden", height: "100vh"} : {overflow: "auto"}}
    >
        {
                book ? 
                <Confirm setbook={setbook} />
                : null
            }
      <SideBar pages={pages} setpages={setpages} book={book}/>
      <div className="layoutDown">
      <LayoutHeader LayoutHeaderStyle/>
        {/* <Outlet /> */}
        {
          pages == "app" || pages == "" ?
          <Driver setpages={setpages} />
          : 
          pages == "booking" ?
          <Booking setpages={setpages} />
          : pages == "addbooking" ?
          <AddBooking setbook={setbook} />
          : pages == "settings" ?
          <Settings/>
          : null
        }
      </div>
    </div>
  )
}

export default DriverLayout