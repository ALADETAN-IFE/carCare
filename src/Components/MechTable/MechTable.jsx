import { useDispatch } from "react-redux"
import BookingPagePagination from "../../Pages/App/Driver/Booking/BookingPagePagination/BookingPagePagination"
import "./mechTable.css"
import { CgMoreVertical } from "react-icons/cg"
import MechTableDatas from "./mechTableDatas"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import Swal from 'sweetalert2';
import { BeatLoader } from "react-spinners"


const MechTable = ({ totalPages, currentPage, setCurrentPage,
    indexOfFirstBooking, indexOfLastBooking, currentBookings1, currentBookings,
    bookingPage, token, setActionTaken, ActionTaken }) => {
    const dispatch = useDispatch()
    const [loading, setloading] = useState({})


   
    const acceptOrRejectBooking = async (action, bookingId) => {
        const url1 = import.meta.env.VITE_API_Url
        const url = `${url1}/api/v1/mech/acceptOrReject/${bookingId}`;
        // setloading(true)
        setloading((prev => ({ ...prev, [bookingId]: true })))
        try {
            const response = await axios.put(url, { action }, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Optional, if authentication is required
                    'Content-Type': 'application/json'
                }
            });

            // console.log('Success:', response);
            // console.log('Success:', response.data.message);
            // alert(`Success: ${response.data.message}`);
            toast.success(response?.data?.data?.title)
            // Display success alert
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response?.data?.data?.title,
            });
            // setloading(false)
            setActionTaken(null)
        } catch (error) {
            // setloading(false)
            // console.error('Error:', error);
            const errorMsg = error.response ? error.response.data.message : error.message;
            // console.error('Error:', errorMsg);
            toast.error(errorMsg)

            // Display error alert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMsg,
            });

            // alert(`Error: ${errorMsg}`);
        } finally {
            // Stop loading for the specific booking
            setloading(prev => ({ ...prev, [bookingId]: false }));
        }
    };

    const handleAction = (action, bookingId) => {
        acceptOrRejectBooking(action, bookingId);
        setActionTaken(action)
    };

    const completeBooking = async (bookingId) => {
        setloading(prev => ({ ...prev, [bookingId]: true }));
        const url1 = import.meta.env.VITE_API_Url
        const url = `${url1}/api/v1/complete/Booking/${bookingId}`;
        try {
            const response = await axios.post(url,{}, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Optional, if authentication is required
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
        } catch (error) {
            console.log(error)
            
        }finally {
            // Stop loading for the specific booking
            setloading(prev => ({ ...prev, [bookingId]: false }));
        }
    }


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
                                                        <td data-label="Vehicle Details">{booking?.brand} {booking?.model}  {booking?.year}</td>
                                                        <td data-label="Service Type">
                                                            {booking?.service?.map((e) => (
                                                                <>{e?.name}</>
                                                            ))
                                                            }</td>
                                                        <td data-label="Date & Time"> {booking?.date}</td>
                                                        <td data-label="Location">{booking?.city}</td>
                                                        <td data-label="Status" >
                                                            <p className="booking_table_staus">{booking?.status}</p></td>
                                                        <td data-label="Action" className="" style={{ display: "flex", justifyContent: "center" }}>
                                                            {
                                                                loading[booking.id] ?
                                                                <p className="booking_table_active" ><BeatLoader/></p>
                                                                : 
                                                                <p className="booking_table_active" onClick={()=>completeBooking(booking.id)}>Complete</p>
                                                            }
                                                        </td>
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
                                                        <td data-label="Vehicle Details">{booking?.brand} {booking?.model}  {booking?.year}</td>
                                                        <td data-label="Service Type">
                                                            {booking?.service?.map((e) => (
                                                                <>{e?.name}</>
                                                            ))
                                                            }</td>
                                                        <td data-label="Date & Time"> {booking?.date}</td>
                                                        <td data-label="Location">{booking?.city}</td>
                                                        <td data-label="Actions" className="" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                                                            {
                                                                loading[booking.id] ?
                                                                    <>
                                                                        <button className="Action1" style={{ background: "gray" }}>
                                                                            {
                                                                                ActionTaken == "Accept" ?
                                                                                    "Accepting..."
                                                                                    :
                                                                                    "Rejecting..."
                                                                            }
                                                                        </button>
                                                                        <button className="Action2" style={{ background: "gray" }}>
                                                                            {
                                                                                ActionTaken == "Accept" ?
                                                                                    "Accepting..."
                                                                                    :
                                                                                    "Rejecting..."
                                                                            }
                                                                        </button>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <button className="Action1" onClick={() => handleAction('Accept', booking.id)} >Accept</button>
                                                                        <button className="Action2" onClick={() => handleAction('Reject', booking.id)} >Reject</button>
                                                                    </>
                                                            }
                                                        </td>
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
