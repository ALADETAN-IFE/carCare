import { SiEclipsemosquitto } from "react-icons/si"
import "./table.css"
import { CgMoreVertical } from "react-icons/cg"
import TableDatas from "./TableDatas"
import BookingPagePagination from "../../Pages/App/Driver/Booking/BookingPagePagination/BookingPagePagination"
import { setAppbookingFormPage } from "../../Global/Redux-actions/carCare"
import { useDispatch, useSelector } from "react-redux"

const Table = ({ totalPages, currentPage, setCurrentPage,
  indexOfFirstBooking, indexOfLastBooking, currentBookings1, currentBookings,
  setpages }) => {
  const dispatch = useDispatch()
  const startBooking = () => {
    dispatch(setAppbookingFormPage(0))
    setpages("addbooking")
  }
  return (
    <div className='table'>
      <div className="tableHead">
        <span className="span1">Mechanic</span>
        <span className="span2">Service number</span>
        <span className="span3">Service details</span>
        <span className="span4">Status</span>
        <span className="span5">Date</span>
        <span className="span6">Total Cost</span>
        <span className="span7"><CgMoreVertical /></span>
      </div>
      <div className="tableMiddle">
        {
          currentBookings?.length < 1 ?
            <div className="no_bookings">
              <div className='no_bookings_wrapper'>
                <div className="no_bookings_text">
                  <h3>No Bookings found</h3>
                  <p>You haven't made any bookings yet. Your car deserves the best. Book your first service today.</p>
                </div>
                <div className="no-booking-btn-container">
                  <button className="new-booking-btn" onClick={startBooking}>+ New Booking</button>
                </div>
              </div>
            </div>
            :
            <>
              {currentBookings.map((booking, index) => (
                <TableDatas booking={booking} key={index} i={index} />

              ))}
            </>
        }
      </div>
      {
        currentBookings?.length < 1 ?
          null
          :
          <BookingPagePagination totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentBookings1={currentBookings1}
            indexOfFirstBooking={indexOfFirstBooking}
            indexOfLastBooking={indexOfLastBooking}
          />
      }


    </div>
  )
}

export default Table

{/* <table border="1">
            <thead>
              <tr>
               
              </tr>
            </thead>
            <tbody>

              {
                currentBookings?.length < 1 ?
                  <tr>
                    <td colspan="7">
                      <div className="no_bookings">
                        <div className='no_bookings_wrapper'>
                          <div className="no_bookings_text">
                            <h3>No Bookings found</h3>
                            <p>You haven't made any bookings yet. Your car deserves the best. Book your first service today.</p>
                          </div>
                          <div className="no-booking-btn-container">
                            <button className="new-booking-btn">+ New Booking</button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  :
                  <>
                 { currentBookings.map((booking, index) => (
                    <tr key={index} className='userBookingDetailsMap'
                    // style={{ maxHeight: "45px", minHeight: "45px", height: "45px" }}
                    >
                      <td>
                        <div style={{ width: "max-content", display: 'flex', alignItems: 'center' }}>
                          <img
                            src={booking.mechanicImage}
                            alt="Mechanic"
                            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                          />
                          {booking.mechanic}
                        </div>
                      </td>
                      <td>{booking.serviceNumber}</td>
                      <td>{booking.serviceDetails}</td>
                      <td style={{ color: booking.status === 'Pending' ? 'orange' : 'green' }}>
                        {booking.status}
                      </td>
                      <td>{booking.date}</td>
                      <td>{booking.totalCost}</td>
                      <td>...</td>
                    </tr>
                    ))}
                  </>

              }

            </tbody>
          </table>
          {
            currentBookings < 1 ?
              null
              :
              <BookingPagePagination totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentBookings1={currentBookings1}
                indexOfFirstBooking={indexOfFirstBooking}
                indexOfLastBooking={indexOfLastBooking}
              />
          } */}