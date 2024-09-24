import './driver.css'
import dasboardBlueIcon from "../../../assets/svg/dasboardBlueIcon.svg"
import { useEffect, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { setAppbookingFormPage } from '../../../Global/Redux-actions/carCare'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

// const Driver = ({ setpages }) => {
const Driver = () => {
  const [currentBookings, setcurrentBookings] = useState([])
  const { UserDataWithToken, UserDatas } = useSelector((state) => state.carCare)
  const [bookingHistory, setbookingHistory] = useState(currentBookings?.length)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getAllCurrentBookings = async () => {
    const token = UserDataWithToken.token
    const url = import.meta.env.VITE_API_Url
    // setloading(true)
    try {
      const res = await axios.get(`${url}/api/v1/mech/allbookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Add token for authentication
          },
        }
      )
      // console.log(res?.data?.data, "setcurrentBookings")
      setcurrentBookings(res?.data?.data)
      setbookingHistory(res?.data?.data.length)
      // console.log(currentBookings1, "currentBookings1")
      // setloading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCurrentBookings()
  }, [])
  const startBooking = () => {
    dispatch(setAppbookingFormPage(0))
    // setpages("addbooking")
    navigate("/app/booking/add-booking")
  }
  const lookBooking = () => {
    dispatch(setAppbookingFormPage(0))
    // setpages("addbooking")
    navigate("/app/booking/add-booking")
  }
  return (
    <div className='driverPage'>
      <div className="driverPageTop">
        <h3>Welcome, {UserDatas?.fullName}</h3>
      </div>
      <div className="driverPageMiddle">
        <div className="driverPageMiddleWrapper">
          <div className="driverPageMiddleLeft">
            <h3>Car in distress?</h3>
            <p>Find the nearest Mechanic and get instant service!</p>
          </div>
          <div className="driverPageMiddleRight">
            <img src={dasboardBlueIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="driverPageBottom">
        <div className="driverPageBottomUp">
          Booking history ({bookingHistory})
        </div>
        <div className="driverPageBottomDown">
          {
            bookingHistory < 1 ?
              <div className="driverPageBottomDownBox">
                <div>
                  <h3>No Service Request</h3>
                  <p>You haven’t requested any service yet. Your active request will show up here</p>
                </div>
                <button className='booking_btn' onClick={startBooking}>+ New Booking</button>
              </div>
              :
              <div className="driverPageBottomDownBox">
                <div>
                  <h3>Active Bookings</h3>
                  <p>You have active or previous bookings. Manage or view your requests below.</p>
                </div>
                <button className='booking_btn' onClick={lookBooking}> View Bookings</button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}



export default Driver