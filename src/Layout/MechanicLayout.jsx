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
import Mechanic from "../Pages/App/Mechanic/Mechanics"
import MechanicBooking from "../Pages/App/Mechanic/MechanicBooking/MechanicBooking"
import { useNavigate, useParams } from "react-router-dom"

const MechanicLayout = () => {
  // addBooking
  const {mechId} = useParams()
  const {appPages, UserDatas} = useSelector((state)=> state.carCare)
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
  // console.log(pages)
  const setmechId = () => {
    if (!mechId) {
      navigate(`/app/mech/${UserDatas._id}`)
    }
  }
  const getUserDetails = async () =>{
    try {
      // const mechId = UserDatas._id
      const url = "https://carcareconnectproject.onrender.com"
      const res = await axios.get(`${url}/api/v1/mech/${mechId}`)
      console.log(res)
    } catch (error) {
      console.log(error)
      if (!navigator.onLine) {
        alert("You are currently offline")
        dispatch(clearnotVerified())
      }
    }
  }
  useEffect(()=>{
    if (!mechId) {
      setmechId()
    } else {
      getUserDetails()
    }
  },[appPages])
  return (
    <div className="layout" 
    // style={book ? {overflow: "hidden", height: "100vh"} : {overflow: "auto"}}
    >
        {
                book ? 
                <Confirm setbook={setbook} />
                : null
            }
      <SideBar pages={pages} setpages={setpages}/>
      <div className="layoutDown">
      <LayoutHeader LayoutHeaderStyle/>
        {/* <Outlet /> */}
        {
          pages == "app" || pages == "" ?
          <Mechanic setpages={setpages} />
          : 
          pages == "booking" ?
          <MechanicBooking setpages={setpages} />
          : pages == "settings" ?
          <Settings/>
          : null
        }
      </div>
    </div>
  )
}

export default MechanicLayout