import './booking.css'
import { useEffect, useState } from 'react'
import BookingPagePagination from './BookingPagePagination/BookingPagePagination'
import Table from '../../../../Components/Table/Table'
import { setAppbookingFormPage } from '../../../../Global/Redux-actions/carCare'
import { useDispatch, useSelector } from 'react-redux'
// import MyBookingsTable from '../../../../Components/Table/DriverReactTable'
// import DriverReactTable from '../../../../Components/Table/DriverReactTable'
import { CgMoreVertical } from 'react-icons/cg'
import NewTable from '../../../../Components/Table/NewTable'
import axios from 'axios'
import { useParams } from 'react-router'
import { useNavigate, useLocation } from 'react-router-dom'

const Booking = ({ setpages, pages }) => {
  const {pathname} = useLocation();
  const navigate = useNavigate()
  const [currentBookings1, setcurrentBookings] = useState([
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },
    // {
    //   mechanic: "Anjola Akindoju",
    //   // icon: <CgMoreVertical />,
    //   serviceNumber: "156GhJ7879",
    //   serviceDetails: "Service details",
    //   status: "Pending",
    //   date: "10/09/24",
    //   totalCost: "₦ 93,000",
    //   mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    // },

  ])
  const UserDataWithToken = useSelector((state) => state.carCare.UserDataWithToken)
  const [width, setwidth] = useState(window.innerWidth)
  const [bookingsPerPage, setbookingsPerPage] = useState(7)
  const [loading, setloading] = useState(false)
  const { customerId } = useParams()

  useEffect(() => {
    const interval = setInterval(() => {
      setwidth(window.innerWidth)
    }, 500);
    if (width < 615) {
      setbookingsPerPage(5)
    } else {
      setbookingsPerPage(7)
    }
    return () => clearInterval(interval)
  }, [width])
  const [currentPage, setCurrentPage] = useState(1);
  // const bookingsPerPage = 7; // Number of bookings per page


  const getAllCurrentBookings = async () => {
    const token = UserDataWithToken.token
    const url = import.meta.env.VITE_API_Url
    setloading(true)
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
      // console.log(currentBookings1, "currentBookings1")
    } catch (error) {
      console.log(error)
      
    }finally{
      
      setloading(false)
    }
  }
  useEffect(() => {
    // icon: <CgMoreVertical />
    getAllCurrentBookings()
  }, [pages, pathname])
  // Get the current bookings based on the pagination
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = currentBookings1.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(currentBookings1.length / bookingsPerPage);
  const dispatch = useDispatch()
  const startBooking = () => {
    dispatch(setAppbookingFormPage(0))
    // setpages("addbooking")
    navigate("/app/booking/add-booking")

  }
  return (
    <div className='bookingPage'>
      <div className="bookingPageWrapper">
        {/* <!-- Title and Button --> */}
        <div class="table_header">
          <h1>Bookings</h1>
        </div>
        <div className="bookingPageTableHolder">

          <button className="new-booking-btn"
            onClick={startBooking}
          >+ New Booking</button>
          {/* <Table
            setpages={setpages}
            currentBookings={currentBookings}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentBookings1={currentBookings1}
            indexOfFirstBooking={indexOfFirstBooking}
            indexOfLastBooking={indexOfLastBooking}
          /> */}
          {/* <DriverReactTable
            setpages={setpages}
            currentBookings={currentBookings}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentBookings1={currentBookings1}
            indexOfFirstBooking={indexOfFirstBooking}
            indexOfLastBooking={indexOfLastBooking}
          /> */}
          <NewTable
            loading={loading}
            setpages={setpages}
            currentBookings={currentBookings}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentBookings1={currentBookings1}
            indexOfFirstBooking={indexOfFirstBooking}
            indexOfLastBooking={indexOfLastBooking}
          />

        </div>
      </div>
    </div>
  )
}

export default Booking