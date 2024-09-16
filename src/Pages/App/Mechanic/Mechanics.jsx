import './mechanic.css'
import dasboardBlueIcon from "../../../assets/svg/dasboardBlueIcon.svg"
import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
// import { setAppbookingFormPage } from '../../../Global/Redux-actions/carCare'
import { useDispatch } from 'react-redux'
import Table from '../../../Components/Table/Table'
import MechTable from '../../../Components/MechTable/MechTable'

const Mechanic = ({ setpages }) => {
  const [bookingHistory, setbookingHistory] = useState(0)
  
  const [currentBookings1, setcurrentBookings] = useState([
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
    {
      customer: "Anjola Akindoju",
      vehcleDetails: "Toyota Camry 2019",
      serviceType: "Tire replacement",
      date: "10/09/24",
      Action1: "Accept",
      Action2: "Decline",
      customersLocation: "123 main street, Ikeja",
    },
  ])
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
        <h3>Welcome, Favour</h3>
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