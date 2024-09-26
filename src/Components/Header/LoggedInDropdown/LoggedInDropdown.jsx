import { useEffect, useState } from 'react'
import './loggedInDropdown.css'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { RiDashboardFill } from "react-icons/ri";
import { BiQuestionMark } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../Global/Redux-actions/carCare';
import Swal from 'sweetalert2';
import axios from 'axios';

const LoggedInDropdown = ({ setshowMenu2, showMenu2 }) => {
    const {typeOfUser, UserDatas, UserDataWithToken} = useSelector((state) => state.carCare);
    const [showMenu3, setshowMenu3] = useState(true)
    const [dashboardPath, setdashboardPath] = useState("/app")
    const [logOutEndPoint, setlogOutEndPoint] = useState("")
    useEffect(() => {
     if (typeOfUser == "Driver") {
         setdashboardPath("/app")   
         setlogOutEndPoint("api/v1/signout")
     } 
    if (typeOfUser == "Mechanic") {
         setdashboardPath("/app/mech")  
         setlogOutEndPoint("api/v1/mech/signout")
     }
    if (typeOfUser == "Admin") {
         setdashboardPath("/app/admin")
         setlogOutEndPoint("")  
     }
    }, [])
    
    const removeDropDown = () => {
        setshowMenu3(false)
        setTimeout(() => {
            setshowMenu2(false)
        }, 205);
        // document.getElementsByClassName("loggedInDropdownBox").classList.add("removeDropDown")
    }
    const dispatch = useDispatch()

    const loggedInDropdownBoxDown = [
        {
            text: "Dashboard",
            icon: <RiDashboardFill />,
            to: dashboardPath
        },
        {

            text: "FAQs",
            icon: <BiQuestionMark />,
            to: ""
        },
        {

            text: "Help center",
            icon: <BiQuestionMark />,
            to: ""
        },
        // {

        //     text: "Logout",
        //     icon: <RiLogoutCircleLine />,
        //     to: dispatch(logOut())
        // }

    ]

    const logOutFunc = async () => {
        // const logOutFunc = () => {
        const url = import.meta.env.VITE_API_Url
        const token = UserDataWithToken.token
        // console.log(UserDataWithToken.token, "UserDataWithToken")
        // setloading(true)
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }

        // Display confirmation dialog
        const result = await Swal.fire({
            title: "Are you sure you want to log out?",
            text: "You will need to log in again to access your account!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log me out",
            cancelButtonText: "No, cancel",
        });

        // If the user confirms, proceed with logging out
        if (result.isConfirmed) {
            try {
                // Show loading indicator
                Swal.fire({
                    title: "Logging out...",
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });

                // Call API to log out user
                const response = await axios.post(
                    `${url}/${logOutEndPoint}`,
                    {},
                    config
                );

                // Handle successful logout
                Swal.fire({
                    icon: "success",
                    title: "Logged out successfully",
                });
                console.log(response)
                // Dispatch logOut action to clear user data from the Redux store
                dispatch(logOut());
            } catch (error) {
                console.log(error)
                // Handle errors during logout
                Swal.fire({
                    icon: "error",
                    title: "Logout failed",
                    text: error.response?.data?.message || "An error occurred during logout",
                });
            }
        } else {
            // Handle case where the user cancels logout
            Swal.fire({
                icon: "info",
                title: "Logout cancelled",
            });
        }
    }
    return (
        <section className='loggedInDropdown' onClick={removeDropDown}>
            <div className="loggedInDropdownWrapper">
                <div className={showMenu3 ? "loggedInDropdownBox" : "removeDropDown"}>
                    <div className="loggedInDropdownBoxUp">
                        <div className="loggedInDropdownBoxUpWrap">
                            <IoPersonCircleSharp size={40} />
                            {/* <p>Aladetan Ife</p>  */}
                            <p>{UserDatas?.fullName}</p> 
                        </div>
                    </div>
                    <div className="loggedInDropdownBoxDown">
                        {
                            loggedInDropdownBoxDown?.map((e, i) => (
                                <Link className="loggedInDropdownBoxDownBox" to={e?.to}>
                                    {e?.icon} <p>{e?.text}</p>
                                </Link>
                            ))
                        }
                        <div className="loggedInDropdownBoxDownBox" onClick={logOutFunc}>
                            <RiLogoutCircleLine /><p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoggedInDropdown
