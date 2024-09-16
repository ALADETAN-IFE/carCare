import { useDispatch } from "react-redux"
import BookingPagePagination from "../../Pages/App/Driver/Booking/BookingPagePagination/BookingPagePagination"
import "./mechTable.css"
import { CgMoreVertical } from "react-icons/cg"
import MechTableDatas from "./mechTableDatas"

const MechTable = ({ totalPages, currentPage, setCurrentPage,
    indexOfFirstBooking, indexOfLastBooking, currentBookings1, currentBookings,
    setpages }) => {
    const dispatch = useDispatch()
    // {
    //     customer: "Anjola Akindoju",
    //     vehcleDetails: "Toyota Camry 2019",
    //     serviceType: "Tire replacement",
    //     date: "10/09/24",
    //     Action1: "Accept",
    //     Action2: "Decline",
    //     customersLocation: "123 main street, Ikeja",
    //   },
    return (
        <div className="mechTable">
            <div className="tableHead">
                <span className="span1">Customer</span>
                <span className="span2">Vehicle Details</span>
                <span className="span3">Service Type</span>
                <span className="span4">Date & Time</span>
                <span className="span5">Location</span>
                <span className="span6">Action</span>
                {/* <span className="span7"><CgMoreVertical /></span> */}
            </div>
            <div className="tableMiddle">
                {
                    currentBookings?.length < 1 ?
                        <div className="no_bookings" style={{alignItems: "flex-start"}}>
                            <div className='no_bookings_wrapper'>
                                <div className="no_bookings_text">
                                    <h3>No Appointment found</h3>
                                    <p>You have no current bookings now.</p>
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            {currentBookings.map((booking, index) => (
                                <MechTableDatas booking={booking} key={index} i={index} />

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

export default MechTable
