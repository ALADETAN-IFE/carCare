import "./mechanicBooking.css"
import { useEffect, useState } from 'react'
import { setAppbookingFormPage } from '../../../../Global/Redux-actions/carCare'
import { useDispatch, useSelector } from 'react-redux'
import MechTable from "../../../../Components/MechTable/MechTable"
import axios from "axios"
const MechanicBooking = ({ setpages }) => {
    const { UserDataWithToken, UserDatas } = useSelector((state) => state.carCare)
    const [currentBookings1, setcurrentBookings] = useState([])
    const [ServiceRequests, setServiceRequests] = useState("loading...")
    const [AcceptedRequests, setAcceptedRequests] = useState("loading...")
    const [DeclinedRequests, setDeclinedRequests] = useState("loading...")
    const [Completed, setCompleted] = useState("loading...")
    const [currentPage, setCurrentPage] = useState(1);
    const bookingsPerPage = 8; // Number of bookings per page
    const token = UserDataWithToken.token
    const getAllCurrentBookings = async () => {
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
            const mechDetasils = res?.data?.data.filter((e) => {
                return e.status == "Accept"
            })
            console.log(mechDetasils, "filter")
            setcurrentBookings(mechDetasils)
            setServiceRequests(mechDetasils?.length)
            setAcceptedRequests(mechDetasils?.length)
            setDeclinedRequests(mechDetasils?.length)
            //   setbookingHistory(mechDetasils.length)
            // setcurrentBookings(res?.data?.data)
            //   setbookingHistory(res?.data?.data.length)
            // if (res?.data) {
            //   setcurrentBookings([])
            // } else {
            //   setcurrentBookings(res?.data?.data)
            // }
            // console.log(currentBookings, "currentBookings1")
            // setloading(false)
        } catch (error) {
            console.log(error, error)
            setcurrentBookings([])
        }
    }

    useEffect(() => {
        getAllCurrentBookings()
    }, [])
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
            bottom: ServiceRequests
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
            bottom: AcceptedRequests
        },
        {
            top: {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#F3BCC1" />
                    <path d="M23.8667 10.3665H19.3667V9.4665C19.3667 8.98911 19.1771 8.53128 18.8395 8.19371C18.502 7.85615 18.0441 7.6665 17.5667 7.6665H9.46675C8.98936 7.6665 8.53152 7.85615 8.19396 8.19371C7.85639 8.53128 7.66675 8.98911 7.66675 9.4665V21.1665C7.66675 21.6439 7.85639 22.1017 8.19396 22.4393C8.53152 22.7769 8.98936 22.9665 9.46675 22.9665H13.9667V23.8665C13.9667 24.3439 14.1564 24.8017 14.494 25.1393C14.8315 25.4769 15.2894 25.6665 15.7667 25.6665H23.8667C24.3441 25.6665 24.802 25.4769 25.1395 25.1393C25.4771 24.8017 25.6667 24.3439 25.6667 23.8665V12.1665C25.6667 11.6891 25.4771 11.2313 25.1395 10.8937C24.802 10.5561 24.3441 10.3665 23.8667 10.3665ZM9.46675 21.1665V9.4665H17.5667V10.3665H15.7667C15.2894 10.3665 14.8315 10.5561 14.494 10.8937C14.1564 11.2313 13.9667 11.6891 13.9667 12.1665H11.2667C11.0281 12.1665 10.7991 12.2613 10.6304 12.4301C10.4616 12.5989 10.3667 12.8278 10.3667 13.0665C10.3667 13.3052 10.4616 13.5341 10.6304 13.7029C10.7991 13.8717 11.0281 13.9665 11.2667 13.9665H13.9667V14.8665H11.2667C11.0281 14.8665 10.7991 14.9613 10.6304 15.1301C10.4616 15.2989 10.3667 15.5278 10.3667 15.7665C10.3667 16.0052 10.4616 16.2341 10.6304 16.4029C10.7991 16.5717 11.0281 16.6665 11.2667 16.6665H13.9667V17.5665H11.2667C11.0281 17.5665 10.7991 17.6613 10.6304 17.8301C10.4616 17.9989 10.3667 18.2278 10.3667 18.4665C10.3667 18.7052 10.4616 18.9341 10.6304 19.1029C10.7991 19.2717 11.0281 19.3665 11.2667 19.3665H13.9667V21.1665H9.46675ZM15.7667 23.8665V12.1665H23.8667V23.8665H15.7667Z" fill="#A21C29" />
                    <path d="M22.5887 13.2375C22.3951 13.0999 22.1549 13.0445 21.9206 13.0833C21.6863 13.1221 21.4768 13.2519 21.3377 13.4445L19.8167 15.5685L18.2957 13.4445C18.2322 13.3372 18.147 13.2442 18.0456 13.1715C17.9441 13.0989 17.8287 13.0481 17.7066 13.0224C17.5846 12.9967 17.4585 12.9967 17.3364 13.0224C17.2143 13.048 17.0988 13.0987 16.9974 13.1714C16.896 13.244 16.8107 13.3369 16.7471 13.4443C16.6835 13.5516 16.6429 13.671 16.6279 13.7948C16.6129 13.9187 16.6238 14.0443 16.6599 14.1637C16.696 14.2831 16.7566 14.3937 16.8377 14.4885L18.7097 17.1165L16.8377 19.7445C16.7002 19.9381 16.6448 20.1783 16.6835 20.4126C16.7223 20.647 16.8521 20.8565 17.0447 20.9955C17.1967 21.1055 17.3792 21.1653 17.5667 21.1665C17.7095 21.1658 17.8501 21.1312 17.9769 21.0655C18.1036 20.9998 18.2129 20.9048 18.2957 20.7885L19.8167 18.6645L21.3377 20.7885C21.4206 20.9048 21.5299 20.9998 21.6566 21.0655C21.7834 21.1312 21.924 21.1658 22.0667 21.1665C22.2543 21.1653 22.4368 21.1055 22.5887 20.9955C22.7813 20.8565 22.9112 20.647 22.95 20.4126C22.9887 20.1783 22.9333 19.9381 22.7957 19.7445L20.9237 17.1165L22.7957 14.4885C22.9333 14.2949 22.9887 14.0547 22.95 13.8204C22.9112 13.586 22.7813 13.3765 22.5887 13.2375Z" fill="#A21C29" />
                </svg>,
                text: "Declined Request"
            },
            bottom: DeclinedRequests
        },
        {
            top: {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="4" fill="#AEEBBC" />
                    <path d="M21.8875 25.625H10.5075C10.2732 25.625 10.0389 25.5811 9.81916 25.4932C9.61412 25.4053 9.42372 25.2735 9.26261 25.1124C9.10151 24.9513 8.96969 24.7609 8.88181 24.5558C8.79394 24.3361 8.75 24.1165 8.75 23.8675V12.0188C8.75 11.7845 8.79394 11.5501 8.88181 11.3305C8.96969 11.1254 9.10151 10.935 9.26261 10.7739C9.42372 10.6128 9.61412 10.481 9.81916 10.3931C10.0389 10.3052 10.2585 10.2613 10.5075 10.2613H12.2358V11.1401H10.5075C10.0242 11.1401 9.62876 11.5355 9.62876 12.0188V23.8675C9.62876 24.3508 10.0242 24.7462 10.5075 24.7462H21.8875C22.3708 24.7462 22.7663 24.3508 22.7663 23.8675V12.0188C22.7663 11.5355 22.3708 11.1401 21.8875 11.1401H20.1593V10.2613H21.8729C22.1072 10.2613 22.3415 10.3052 22.5612 10.3931C22.7663 10.481 22.9567 10.6128 23.1178 10.7739C23.2789 10.935 23.4107 11.1254 23.4986 11.3305C23.5865 11.5501 23.6304 11.7698 23.6304 12.0188V23.8675C23.6304 24.1018 23.5865 24.3361 23.4986 24.5558C23.4107 24.7609 23.2789 24.9513 23.1178 25.1124C22.9567 25.2735 22.7663 25.4053 22.5612 25.4932C22.3562 25.5811 22.1218 25.625 21.8875 25.625Z" fill="#1C7631" />
                    <path d="M20.5694 12.8976H11.811V10.0562C11.811 9.45576 12.2943 8.95779 12.9095 8.95779H14.0372C14.4473 8.15226 15.2675 7.625 16.1902 7.625C17.1129 7.625 17.9331 8.15226 18.3432 8.95779H19.4709C20.0714 8.95779 20.5694 9.44111 20.5694 10.0562V12.8976ZM12.6898 12.0188H19.6906V10.0562C19.6906 9.93908 19.5881 9.83655 19.4709 9.83655H17.7427L17.6402 9.54363C17.4205 8.9285 16.8493 8.51841 16.1902 8.51841C15.5311 8.51841 14.9599 8.9285 14.7402 9.54363L14.6377 9.83655H12.9095C12.7923 9.83655 12.6898 9.93908 12.6898 10.0562V12.0188ZM14.7109 21.7584C14.5938 21.7584 14.4913 21.7145 14.4034 21.6266L11.4156 18.6388C11.3277 18.551 11.2838 18.4484 11.2838 18.3313C11.2838 18.2141 11.3277 18.1116 11.4156 18.0237C11.5035 17.9358 11.606 17.8919 11.7231 17.8919C11.8403 17.8919 11.9428 17.9358 12.0307 18.0237L14.4473 20.4403C14.5205 20.5135 14.6084 20.5428 14.6963 20.5428C14.7842 20.5428 14.8867 20.5135 14.9453 20.4403L20.3497 15.0359C20.4376 14.948 20.5401 14.9041 20.6572 14.9041C20.7744 14.9041 20.8769 14.948 20.9648 15.0359C21.1406 15.2117 21.1406 15.4753 20.9648 15.651L15.0185 21.6266C14.9306 21.6999 14.8135 21.7584 14.7109 21.7584Z" fill="#1C7631" />
                </svg>,
                text: "Completed"
            },
            bottom: Completed
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
                                    <div className="cardsBottom">
                                        {e?.bottom}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mechanicBookingPageTableHolder">

                    <h3 className="mech_booking_head">Booking ({currentBookings1?.length})</h3>
                    <MechTable
                        token={token}
                        setpages={setpages}
                        currentBookings={currentBookings}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        currentBookings1={currentBookings1}
                        indexOfFirstBooking={indexOfFirstBooking}
                        indexOfLastBooking={indexOfLastBooking}
                        bookingPage
                    />

                </div>
            </div>
        </div>
    )
}

export default MechanicBooking