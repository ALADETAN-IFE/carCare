import './mechanic.css'
import dasboardBlueIcon from "../../../assets/svg/dasboardBlueIcon.svg"
import { useEffect, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
// import { setAppbookingFormPage } from '../../../Global/Redux-actions/carCare'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../../Components/Table/Table'
import MechTable from '../../../Components/MechTable/MechTable'
import axios from 'axios'

const Mechanic = ({ setpages }) => {
  const { UserDataWithToken, UserDatas } = useSelector((state) => state.carCare)
  const [currentBookings1, setcurrentBookings] = useState([])
  const [bookingHistory, setbookingHistory] = useState(currentBookings1?.length)
  const getAllCurrentBookings = async () => {
    const token = UserDataWithToken.token
    const url = import.meta.env.VITE_API_Url
    // setloading(true)
    try {
      const res = await axios.get(`${url}/api/v1/mech/allbookings`,
      // const res = await axios.get(`${url}/api/v1/pending-Booking`,
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Add token for authentication
          },
        }
      )
      console.log(res, "setcurrentBookings")
      // console.log(res?.data?.data, "setcurrentBookings")
      setcurrentBookings(res?.data?.data)
      setbookingHistory(res?.data?.data.length)
      // if (res?.data) {
      //   setcurrentBookings([])
      // } else {
      //   setcurrentBookings(res?.data?.data)
      // }
      // console.log(currentBookings1, "currentBookings1")
      // setloading(false)
    } catch (error) {
      console.log(error, error)
      setcurrentBookings([])
    }
  }

  useEffect(() => {
    getAllCurrentBookings()
  }, [])
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 7; // Number of bookings per page
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = currentBookings1.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(currentBookings1.length / bookingsPerPage);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className='mechHomePage'>
      <div className="mechHomePageTop">
        <h3>Welcome,  {UserDatas?.fullName}</h3>
      </div>
      <div className="mechHomePageMiddle">
        <div className="mechHomePageMiddleWrapper">
          <div className="mechHomePageMiddleLeft">
            <p>Your dashboard is here to help you manage your appointments, track your earnings, and stay on top of your tasks. Let's get to work!</p>
          </div>
          <div className="mechHomePageMiddleRight">
            <img src={dasboardBlueIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="mechHomePageBottom">
        <div className="mechHomePageBottomUp">
          Appointment Booking ({bookingHistory})
        </div>
        <div className="mechHomePageBottomDown">
          <MechTable
            token={UserDataWithToken.token}
            setpages={setpages}
            currentBookings={currentBookings}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentBookings1={currentBookings1}
            indexOfFirstBooking={indexOfFirstBooking}
            indexOfLastBooking={indexOfLastBooking}
          />
          {/* <div className="mechHomePageBottomDownBox">
            <div>
              <h3>No Service Request</h3>
              <p>You haven’t requested any service yet. Your active request will show up here</p>
            </div>
            <button className='booking_btn' onClick={startBooking}>+ New Booking</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}



export default Mechanic