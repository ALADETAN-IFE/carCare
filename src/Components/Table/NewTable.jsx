import React from 'react'
import { CgMoreVertical } from 'react-icons/cg'
import { useDispatch, useSelector } from "react-redux"
import BookingPagePagination from '../../Pages/App/Driver/Booking/BookingPagePagination/BookingPagePagination'
import "./NewTable.css";
import { setAppbookingFormPage } from '../../Global/Redux-actions/carCare';

const NewTable = ({ totalPages, currentPage, setCurrentPage,
    indexOfFirstBooking, indexOfLastBooking, currentBookings1, currentBookings,
    setpages, loading }) => {
    const dispatch = useDispatch()
    const startBooking = () => {
        dispatch(setAppbookingFormPage(0))
        setpages("addbooking")
    }
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Mechanic</th>
                        <th>Service number</th>
                        <th>Service details</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Total Cost</th>
                        <th><CgMoreVertical /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ?
                            <tr>
                                <td>Loading bookings</td>
                                <td>Loading bookings</td>
                                <td>Loading bookings</td>
                                <td>Loading bookings</td>
                                <td>Loading bookings</td>
                                <td>Loading bookings</td>
                            </tr>
                            :
                            <>
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
                                            {
                                                currentBookings.map((booking, i) => (
                                                    <tr key={i}>
                                                        <td data-label="Mechanic"
                                                            style={{
                                                                display: "flex", justifyContent: "center",
                                                                alignItems: "center", gap: "10px",
                                                                minHeight: "48px"
                                                            }}
                                                        >
                                                            <img
                                                                src={booking?.mechanicImage}
                                                                alt="Mechanic"
                                                                style={{ width: '25px', height: '25px', borderRadius: '50%', }}
                                                            />
                                                            {/* <td>
                                                        </td> */}
                                                            {booking?.mechanic}
                                                        </td>
                                                        <td data-label="Service number">{booking?.id}</td>
                                                        <td data-label="Service details">
                                                            {
                                                                booking?.service?.map((e, i) => (
                                                                    <span style={{ fontSize: "14px" }}>{e?.name}</span>
                                                                ))
                                                            }
                                                        </td>
                                                        <td data-label="Status"
                                                            style={{ color: booking?.status === 'Pending' ? 'orange' : 'green' }}
                                                        > {booking?.status}</td>
                                                        <td data-label="Date">{booking?.date}</td>
                                                        {/* <td data-label="Total Cost">{booking?.totalCost}</td> */}
                                                        <td data-label="Total Cost">₦ 93,000</td>
                                                        <td data-label=""><CgMoreVertical /> </td>
                                                    </tr>
                                                ))
                                            }
                                        </>
                                }

                            </>
                    }
                </tbody>
            </table>
            <div style={{ width: "100%" }} className='paginateTr'>
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
        </div>
    )
}

export default NewTable