import { SiEclipsemosquitto } from 'react-icons/si'
import './booking.css'
import { useEffect, useState } from 'react'
import BookingPagePagination from './BookingPagePagination/BookingPagePagination'
import Table from '../../../../Components/Table/Table'
import { setAppbookingFormPage } from '../../../../Global/Redux-actions/carCare'
import { useDispatch } from 'react-redux'

const Booking = ({setpages}) => {
  const [currentBookings1, setcurrentBookings] = useState([
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },
    {
      mechanic: "Anjola Akindoju",
      serviceNumber: "156GhJ7879",
      serviceDetails: "Service details",
      status: "Pending",
      date: "10/09/24",
      totalCost: "₦ 93,000",
      mechanicImage: "https://via.placeholder.com/40" // Replace with actual image link
    },

  ])
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 7; // Number of bookings per page

  // Get the current bookings based on the pagination
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = currentBookings1.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(currentBookings1.length / bookingsPerPage);
  const dispatch = useDispatch()
  const startBooking = () => {
    dispatch(setAppbookingFormPage(0))
    setpages("addbooking")
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
          <Table
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