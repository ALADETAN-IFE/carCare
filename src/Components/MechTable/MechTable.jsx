import { useDispatch } from "react-redux"
import BookingPagePagination from "../../Pages/App/Driver/Booking/BookingPagePagination/BookingPagePagination"
import "./mechTable.css"
import { CgMoreVertical } from "react-icons/cg"
import MechTableDatas from "./mechTableDatas"

const MechTable = ({ totalPages, currentPage, setCurrentPage,
    indexOfFirstBooking, indexOfLastBooking, currentBookings1, currentBookings,
    bookingPage }) => {
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
    // <div className="mechTable_for_mech_booking">
    //     <div className="tableHead tableHead_for_mech_booking">
    return (
        <>
            {
                bookingPage ?
                    <div className="mechTable_for_mech_booking">
                        <table>
                            <thead>
                                <tr style={{ minHeight: "50px" }}>
                                    <th>Customer</th>
                                    <th>Vehicle Details</th>
                                    <th>Service Type</th>
                                    <th>Date & Time</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentBookings?.length < 1 ?
                                        null
                                        :
                                        <>
                                            {
                                                currentBookings.map((booking, i) => (
                                                    <tr key={i}>
                                                        <td data-label="Customer"> {booking?.customer}</td>
                                                        <td data-label="Vehicle Details">{booking?.vehcleDetails}</td>
                                                        <td data-label="Service Type">{booking?.serviceType}</td>
                                                        <td data-label="Date & Time"> {booking?.date}</td>
                                                        <td data-label="Location">{booking?.customersLocation}</td>
                                                        <td data-label="Status" >
                                                            <p className="booking_table_staus">{booking?.status}</p></td>
                                                        <td data-label="Action" className="" style={{ display: "flex", justifyContent: "center" }}>
                                                            <p className="booking_table_active">{booking?.Action}</p> </td>
                                                    </tr>
                                                ))
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
                    :

                    <div className="mechTable">
                        <table>
                            <thead>
                                <tr style={{ minHeight: "50px" }}>
                                    <th>Customer</th>
                                    <th>Vehicle Details</th>
                                    <th>Service Type</th>
                                    <th>Date & Time</th>
                                    <th>Location</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentBookings?.length < 1 ?
                                        null
                                        :
                                        <>
                                            {
                                                currentBookings.map((booking, i) => (
                                                    <tr key={i}>
                                                        <td data-label="Customer"> {booking?.customer}</td>
                                                        <td data-label="Vehicle Details">{booking?.vehcleDetails}</td>
                                                        <td data-label="Service Type">{booking?.serviceType}</td>
                                                        <td data-label="Date & Time"> {booking?.date}</td>
                                                        <td data-label="Location">{booking?.customersLocation}</td>
                                                        <td data-label="Actions" className="" style={{ display: "flex", justifyContent: "center", gap: "10px"}}>
                                                            <button className="Action1">{booking?.Action1}</button>
                                                            <button className="Action2">{booking?.Action2}</button> </td>
                                                    </tr>
                                                ))
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
                // <div className="mechTable">
                //     <div className="tableHead">
                //         <span className="span1">Customer</span>
                //         <span className="span2">Vehicle Details</span>
                //         <span className="span3">Service Type</span>
                //         <span className="span4">Date & Time</span>
                //         <span className="span5">Location</span>
                //         <span className="span6">Action</span>
                //         {/* <span className="span7"><CgMoreVertical /></span> */}
                //     </div>
                //     <div className="tableMiddle">
                //         {
                //             currentBookings?.length < 1 ?
                //                 <div className="no_bookings" style={{ alignItems: "flex-start" }}>
                //                     <div className='no_bookings_wrapper'>
                //                         <div className="no_bookings_text">
                //                             <h3>No Appointment found</h3>
                //                             <p>You have no current bookings now.</p>
                //                         </div>
                //                     </div>
                //                 </div>
                //                 :
                //                 <>
                //                     {currentBookings.map((booking, index) => (
                //                         <MechTableDatas booking={booking} key={index} i={index} />

                //                     ))}
                //                 </>
                //         }
                //     </div>
                //     {
                //         currentBookings?.length < 1 ?
                //             null
                //             :
                //             <BookingPagePagination totalPages={totalPages}
                //                 currentPage={currentPage}
                //                 setCurrentPage={setCurrentPage}
                //                 currentBookings1={currentBookings1}
                //                 indexOfFirstBooking={indexOfFirstBooking}
                //                 indexOfLastBooking={indexOfLastBooking}
                //             />
                //     }
                // </div>
            }

        </>
    )
}

export default MechTable
