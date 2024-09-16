import "./mechanicBooking.css"
import { useEffect, useState } from 'react'
import { setAppbookingFormPage } from '../../../../Global/Redux-actions/carCare'
import { useDispatch } from 'react-redux'
const MechanicBooking = ({ setpages }) => {
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
    const cardDetails = [
        {
            top: {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#83CAFF" />
                    <path d="M13.9364 18.4199C15.8517 18.4199 17.4045 16.646 17.4045 14.4578C17.4045 12.2695 15.8517 10.4956 13.9364 10.4956C12.021 10.4956 10.4683 12.2695 10.4683 14.4578C10.4683 16.646 12.021 18.4199 13.9364 18.4199Z" fill="#003257" />
                    <path d="M20.8724 24.2798C20.8724 26.6868 17.3413 25.8646 13.9362 25.8646C10.5311 25.8646 7 26.6868 7 24.2798C7 21.8727 10.5311 19.9214 13.9362 19.9214C17.3413 19.9214 20.8724 21.8727 20.8724 24.2798Z" fill="#003257" />
                    <path d="M20.3444 10.4033C20.3444 11.4782 20.929 12.3468 21.8885 12.7199L21.8885 16.7365C21.1976 17.1239 20.5572 17.9125 20.5573 18.9173C20.5573 18.9252 20.5633 18.9332 20.5634 18.9412C20.5634 20.1474 21.2731 21.0391 22.4568 21.3266C22.6219 21.367 22.7895 21.2697 22.8311 21.1094C22.8392 21.0783 22.842 21.0461 22.8396 21.0141L22.7321 19.6687C23.0127 19.5216 23.3506 19.5214 23.6313 19.6682L23.5155 21.0214C23.5014 21.1856 23.627 21.3297 23.796 21.3434C23.8333 21.3464 23.8709 21.3428 23.9069 21.3326C24.9982 21.0255 25.6712 20.1136 25.6821 18.9501C25.6824 17.8754 25.1125 17.0068 24.1146 16.6337L24.1146 12.5988C24.959 12.1452 25.4786 11.2785 25.4786 10.3853C25.4786 9.1693 24.7686 8.28378 23.5697 8.0165C23.4754 7.99529 23.3763 8.01941 23.3034 8.08129C23.2297 8.14332 23.1909 8.23588 23.1992 8.33031L23.3077 9.6758C23.0273 9.82286 22.6896 9.82297 22.4091 9.67617L22.5254 8.32296C22.5394 8.15883 22.4139 8.01471 22.2449 8.00103C22.2075 7.99801 22.1699 8.00166 22.1339 8.0118C21.0374 8.32032 20.3444 9.23669 20.3444 10.4033Z" fill="#003257" />
                </svg>,
                text: "Service Requests"
            },
            bottom: ""
        },
        {
            top: {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#FFEAAC" />
                    <path d="M16.1672 13.25C13.2675 13.25 10.9172 15.6003 10.9172 18.5C10.9172 21.3997 13.2675 23.75 16.1672 23.75C19.0669 23.75 21.4172 21.3997 21.4172 18.5C21.4172 15.6003 19.0669 13.25 16.1672 13.25ZM16.1672 22.25C14.0959 22.25 12.4172 20.5713 12.4172 18.5C12.4172 16.4287 14.0959 14.75 16.1672 14.75C18.2385 14.75 19.9172 16.4287 19.9172 18.5C19.9172 20.5713 18.2385 22.25 16.1672 22.25Z" fill="#B78900" />
                    <path d="M22.0292 9.50001H19.9174V9.14226C19.9174 8.51128 19.4061 8 18.7751 8H13.5596C12.9287 8 12.4174 8.51128 12.4174 9.14226V9.50001H10.3052C9.40053 9.50001 8.66724 10.2333 8.66724 11.138V24.362C8.66724 25.2667 9.40053 26 10.3052 26H22.0292C22.934 26 23.6672 25.2667 23.6672 24.362V11.138C23.6672 10.2333 22.9339 9.50001 22.0292 9.50001ZM13.9174 9.50001H18.4172V11H13.9174V9.50001ZM22.1672 24.362C22.1672 24.4383 22.1055 24.5 22.0292 24.5H10.3052C10.2289 24.5 10.1672 24.4383 10.1672 24.362V11.138C10.1672 11.0617 10.2289 11 10.3052 11H12.4172V11.3578C12.4172 11.9887 12.9285 12.5 13.5595 12.5H18.7752C19.4061 12.5 19.9174 11.9888 19.9174 11.3578V11H22.0292C22.1055 11 22.1672 11.0617 22.1672 11.138V24.362Z" fill="#B78900" />
                    <path d="M18.0026 16.3292C17.6322 16.1439 17.1816 16.2941 16.9964 16.6646L15.9617 18.7339L15.1975 17.9697C14.9047 17.6768 14.4298 17.6768 14.1369 17.9697C13.844 18.2626 13.844 18.7375 14.1369 19.0304L15.6369 20.5304C15.6381 20.5316 15.6393 20.5325 15.6405 20.5336C15.6525 20.5455 15.6653 20.5567 15.6782 20.5678C15.6848 20.5735 15.6912 20.5795 15.6979 20.5849C15.7079 20.5929 15.7186 20.6002 15.729 20.6077C15.7395 20.6154 15.75 20.6232 15.7608 20.6302C15.768 20.6348 15.7756 20.6389 15.783 20.6433C15.7977 20.6521 15.8125 20.6608 15.8276 20.6685C15.8291 20.6693 15.8303 20.6701 15.8318 20.6709C15.8371 20.6735 15.8427 20.6755 15.8481 20.678C15.8638 20.6854 15.8795 20.6926 15.8956 20.6989C15.9048 20.7024 15.914 20.7053 15.9233 20.7085C15.9368 20.7132 15.9503 20.7178 15.9641 20.7217C15.976 20.7251 15.9881 20.7278 16.0001 20.7305C16.0113 20.733 16.0224 20.7357 16.0337 20.7377C16.0475 20.7403 16.0614 20.742 16.0753 20.7438C16.0851 20.745 16.0949 20.7463 16.1048 20.7471C16.1192 20.7483 16.1336 20.7488 16.148 20.7492C16.1578 20.7494 16.1675 20.7497 16.1773 20.7496C16.1911 20.7494 16.2047 20.7486 16.2184 20.7476C16.2292 20.7469 16.2399 20.7461 16.2506 20.745C16.2629 20.7436 16.275 20.7417 16.2872 20.7397C16.2993 20.7377 16.3115 20.7357 16.3235 20.7331C16.3341 20.7309 16.3445 20.7281 16.3549 20.7254C16.3682 20.722 16.3815 20.7184 16.3946 20.7143C16.4039 20.7113 16.413 20.708 16.4222 20.7046C16.4358 20.6997 16.4493 20.6947 16.4626 20.689C16.4717 20.6851 16.4805 20.6808 16.4894 20.6765C16.5021 20.6705 16.5147 20.6644 16.5271 20.6576C16.5371 20.6522 16.5468 20.6462 16.5566 20.6402C16.5672 20.6338 16.5777 20.6274 16.5881 20.6204C16.5999 20.6124 16.6112 20.6038 16.6225 20.5951C16.6303 20.5891 16.6382 20.5834 16.6458 20.5771C16.659 20.5661 16.6716 20.5544 16.6842 20.5424C16.6885 20.5383 16.6932 20.5347 16.6975 20.5304C16.6987 20.5292 16.6996 20.528 16.7008 20.5268C16.7126 20.5148 16.7238 20.5019 16.7349 20.489C16.7406 20.4824 16.7466 20.4761 16.752 20.4694C16.76 20.4593 16.7674 20.4487 16.7749 20.4382C16.7825 20.4277 16.7904 20.4173 16.7974 20.4065C16.802 20.3993 16.8061 20.3916 16.8105 20.3842C16.8193 20.3695 16.828 20.3548 16.8357 20.3397C16.8364 20.3382 16.8373 20.3369 16.838 20.3355L18.3381 17.3355C18.5233 16.9649 18.3731 16.5144 18.0026 16.3292Z" fill="#B78900" />
                </svg>,
                text: "Accepted Requests"
            },
            bottom: ""
        },
        {
            top: {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#83CAFF" />
                    <path d="M13.9364 18.4199C15.8517 18.4199 17.4045 16.646 17.4045 14.4578C17.4045 12.2695 15.8517 10.4956 13.9364 10.4956C12.021 10.4956 10.4683 12.2695 10.4683 14.4578C10.4683 16.646 12.021 18.4199 13.9364 18.4199Z" fill="#003257" />
                    <path d="M20.8724 24.2798C20.8724 26.6868 17.3413 25.8646 13.9362 25.8646C10.5311 25.8646 7 26.6868 7 24.2798C7 21.8727 10.5311 19.9214 13.9362 19.9214C17.3413 19.9214 20.8724 21.8727 20.8724 24.2798Z" fill="#003257" />
                    <path d="M20.3444 10.4033C20.3444 11.4782 20.929 12.3468 21.8885 12.7199L21.8885 16.7365C21.1976 17.1239 20.5572 17.9125 20.5573 18.9173C20.5573 18.9252 20.5633 18.9332 20.5634 18.9412C20.5634 20.1474 21.2731 21.0391 22.4568 21.3266C22.6219 21.367 22.7895 21.2697 22.8311 21.1094C22.8392 21.0783 22.842 21.0461 22.8396 21.0141L22.7321 19.6687C23.0127 19.5216 23.3506 19.5214 23.6313 19.6682L23.5155 21.0214C23.5014 21.1856 23.627 21.3297 23.796 21.3434C23.8333 21.3464 23.8709 21.3428 23.9069 21.3326C24.9982 21.0255 25.6712 20.1136 25.6821 18.9501C25.6824 17.8754 25.1125 17.0068 24.1146 16.6337L24.1146 12.5988C24.959 12.1452 25.4786 11.2785 25.4786 10.3853C25.4786 9.1693 24.7686 8.28378 23.5697 8.0165C23.4754 7.99529 23.3763 8.01941 23.3034 8.08129C23.2297 8.14332 23.1909 8.23588 23.1992 8.33031L23.3077 9.6758C23.0273 9.82286 22.6896 9.82297 22.4091 9.67617L22.5254 8.32296C22.5394 8.15883 22.4139 8.01471 22.2449 8.00103C22.2075 7.99801 22.1699 8.00166 22.1339 8.0118C21.0374 8.32032 20.3444 9.23669 20.3444 10.4033Z" fill="#003257" />
                </svg>,
                text: "a"
            },
            bottom: ""
        },
        {
            top: {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#83CAFF" />
                    <path d="M13.9364 18.4199C15.8517 18.4199 17.4045 16.646 17.4045 14.4578C17.4045 12.2695 15.8517 10.4956 13.9364 10.4956C12.021 10.4956 10.4683 12.2695 10.4683 14.4578C10.4683 16.646 12.021 18.4199 13.9364 18.4199Z" fill="#003257" />
                    <path d="M20.8724 24.2798C20.8724 26.6868 17.3413 25.8646 13.9362 25.8646C10.5311 25.8646 7 26.6868 7 24.2798C7 21.8727 10.5311 19.9214 13.9362 19.9214C17.3413 19.9214 20.8724 21.8727 20.8724 24.2798Z" fill="#003257" />
                    <path d="M20.3444 10.4033C20.3444 11.4782 20.929 12.3468 21.8885 12.7199L21.8885 16.7365C21.1976 17.1239 20.5572 17.9125 20.5573 18.9173C20.5573 18.9252 20.5633 18.9332 20.5634 18.9412C20.5634 20.1474 21.2731 21.0391 22.4568 21.3266C22.6219 21.367 22.7895 21.2697 22.8311 21.1094C22.8392 21.0783 22.842 21.0461 22.8396 21.0141L22.7321 19.6687C23.0127 19.5216 23.3506 19.5214 23.6313 19.6682L23.5155 21.0214C23.5014 21.1856 23.627 21.3297 23.796 21.3434C23.8333 21.3464 23.8709 21.3428 23.9069 21.3326C24.9982 21.0255 25.6712 20.1136 25.6821 18.9501C25.6824 17.8754 25.1125 17.0068 24.1146 16.6337L24.1146 12.5988C24.959 12.1452 25.4786 11.2785 25.4786 10.3853C25.4786 9.1693 24.7686 8.28378 23.5697 8.0165C23.4754 7.99529 23.3763 8.01941 23.3034 8.08129C23.2297 8.14332 23.1909 8.23588 23.1992 8.33031L23.3077 9.6758C23.0273 9.82286 22.6896 9.82297 22.4091 9.67617L22.5254 8.32296C22.5394 8.15883 22.4139 8.01471 22.2449 8.00103C22.2075 7.99801 22.1699 8.00166 22.1339 8.0118C21.0374 8.32032 20.3444 9.23669 20.3444 10.4033Z" fill="#003257" />
                </svg>,
                text: "a"
            },
            bottom: ""
        },
    ]
    return (
        <div className='mechanicBookingPage'>
            <div className="mechanicBookingPageWrapper">
                {/* <!-- Title and Button --> */}
                <div class="table_header">
                    <h1>Activity</h1>
                    <div className="cardsHolders">
                        {
                            cardDetails?.map((e, i) => (
                                <div className="cards" key={i}>
                                    <div className="cardsTop">
                                        {e?.top?.icon}
                                        <span> {e?.top?.text}</span>
                                    </div>
                                    <div className="cardsBottom"></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mechanicBookingPageTableHolder">

                    {/* <button className="new-booking-btn"
                onClick={startBooking}
              >+ New Booking</button> */}
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

                </div>
            </div>
        </div>
    )
}

export default MechanicBooking