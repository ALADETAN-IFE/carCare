import './driver.css'
import dasboardBlueIcon from "../../../assets/svg/dasboardBlueIcon.svg"
import { useEffect, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { setAppbookingFormPage } from '../../../Global/Redux-actions/carCare'
import { useDispatch } from 'react-redux'

const Driver = ({ setpages }) => {
  const [bookingHistory, setbookingHistory] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{},[])
  const startBooking = () => {
    dispatch(setAppbookingFormPage(0))
    setpages("addbooking")
  }
  return (
    <div className='driverPage'>
      <div className="driverPageTop">
        <h3>Welcome, Favour</h3>
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
          <div className="driverPageBottomDownBox">
            <div>
              <h3>No Service Request</h3>
              <p>You haven’t requested any service yet. Your active request will show up here</p>
            </div>
            <button className='booking_btn' onClick={startBooking}>+ New Booking</button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Driver