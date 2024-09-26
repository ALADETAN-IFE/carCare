import "./sideBar.css"
import logo from "../../assets/svg/Logo.svg"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { IoCloseSharp, IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { closeNavBarVisibility, logOut, openNavBarVisibility } from "../../Global/Redux-actions/carCare";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import ScrollToTop from "../../Components/ScrollToTop";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import Swal from "sweetalert2";

const SideBar = ({ pages, setpages, book }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const { navBarVisibility, UserDatas, UserDataWithToken, notifications } = useSelector((state) => state.carCare)
    const typeOfUser = useSelector((state) => state.carCare.typeOfUser)
    const [width, setwidth] = useState(window.innerWidth)
    const [User, setUser] = useState(typeOfUser)
    const [isHover, setisHover] = useState([])
    const [logOutEndPoint, setlogOutEndPoint] = useState("")
    // console.log(logOutEndPoint)
    setInterval(() => {
        setwidth(window.innerWidth)
    }, 500);
    // useEffect(() => {
    //     if (width >= "769") {
    //         dispatch(openNavBarVisibility(true))
    //     }
    // }, [width])
    useEffect(() => {
        if (width <= "769") {
            dispatch(closeNavBarVisibility())
        }
    }, [pathname])
    useEffect(() => {
        if (width <= "769") {
            dispatch(closeNavBarVisibility())
        }
    }, [])
    useEffect(() => {
        if (width >= "769" && !navBarVisibility) {
            dispatch(openNavBarVisibility(false))
        }
    }, [width])
    useEffect(() => {
        if (typeOfUser === "Mechanic") {
            setlogOutEndPoint("api/v1/mech/signout")
        }
        else if (typeOfUser === "Driver") {
            setlogOutEndPoint("api/v1/signout")
        }
        else {
            setlogOutEndPoint("")
        }
    }, [])


    const HomeIcon = ({ isActive }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
            fill="none">
            <path d="M9.32926 0.33964C9.12925 0.122169 8.85801 0 8.5752 0C8.29238 0 8.02114 0.122169 7.82113 0.33964L0.731589 8.04918C0.682006 8.1031 0.642675 8.16713 0.615841 8.23759C0.589007 8.30804 0.575195 8.38356 0.575195 8.45983C0.575195 8.53609 0.589007 8.61161 0.615841 8.68207C0.642675 8.75253 0.682006 8.81655 0.731589 8.87048C0.831727 8.97939 0.967542 9.04057 1.10916 9.04057C1.17928 9.04057 1.24871 9.02555 1.3135 8.99637C1.37828 8.96718 1.43714 8.9244 1.48673 8.87048L2.17573 8.11994V14.26C2.17573 14.7214 2.34429 15.164 2.64432 15.4904C2.94436 15.8167 3.35129 16 3.7756 16H13.3748C13.7991 16 14.206 15.8167 14.5061 15.4904C14.8061 15.164 14.9747 14.7214 14.9747 14.26V8.11994L15.6637 8.87048C15.7638 8.97939 15.8996 9.04057 16.0412 9.04057C16.1828 9.04057 16.3187 8.97939 16.4188 8.87048C16.5189 8.76157 16.5752 8.61385 16.5752 8.45983C16.5752 8.3058 16.5189 8.15809 16.4188 8.04918L13.9081 5.31963V1.49967C13.9081 1.34584 13.8519 1.19831 13.7519 1.08954C13.6519 0.980762 13.5162 0.919653 13.3748 0.919653H12.3082C12.1668 0.919653 12.0311 0.980762 11.9311 1.08954C11.8311 1.19831 11.7749 1.34584 11.7749 1.49967V2.99958L9.32926 0.33964ZM13.9081 6.95991V14.26C13.9081 14.4138 13.8519 14.5613 13.7519 14.6701C13.6519 14.7789 13.5162 14.84 13.3748 14.84H3.7756C3.63416 14.84 3.49852 14.7789 3.39851 14.6701C3.2985 14.5613 3.24231 14.4138 3.24231 14.26V6.95991L8.5752 1.15978L13.9081 6.95991Z"
                fill={
                    isActive || isHover[0] ? "white" : "#171717"
                } />
        </svg>
    );

    const BookingIcon = ({ isActive, index }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.15881 11.2119V8.39557H10.3037V10.5479L12.1659 11.6241L11.5935 12.6163L9.15881 11.2119ZM12.5934 1.14485L11.4485 0L10.3037 1.14485L9.15881 0L8.01396 1.14485L6.8691 0L5.72425 1.14485L4.5794 0L3.43455 1.14485L2.2897 0L1.14485 1.14485L0 0V15.2647L1.14485 14.1198L2.2897 15.2647L3.43455 14.1198L4.5794 15.2647L5.78531 14.0588C5.89217 14.2038 6.01428 14.3335 6.14403 14.4633C7.14534 15.4496 8.49494 16.0017 9.90046 16C11.306 15.9983 12.6542 15.4428 13.6531 14.454C14.6519 13.4652 15.221 12.1226 15.2369 10.7172C15.2528 9.31176 14.7144 7.95664 13.7382 6.94543V0L12.5934 1.14485ZM6.18219 6.8691C5.72425 7.30415 5.36553 7.82315 5.09077 8.39557H2.2897V6.8691H6.18219ZM4.63283 9.92204C4.5794 10.1739 4.5794 10.4258 4.5794 10.6853C4.5794 10.9448 4.5794 11.1966 4.63283 11.4485H2.2897V9.92204H4.63283ZM11.4485 5.34264H2.2897V3.81617H11.4485V5.34264ZM13.6237 10.6853C13.6237 11.1737 13.5321 11.6546 13.3566 12.1049C13.1582 12.5476 12.8834 12.975 12.5399 13.3032C12.2117 13.6466 11.7843 13.9214 11.3417 14.1198C10.8913 14.2954 10.4105 14.387 9.92204 14.387C7.87657 14.387 6.22036 12.7307 6.22036 10.6853C6.22036 9.7007 6.6096 8.77719 7.30415 8.06738C8.01396 7.37284 8.93747 6.98359 9.92204 6.98359C11.9599 6.98359 13.6237 8.63981 13.6237 10.6853Z"
                fill={
                    isActive || isHover[index] ? "white" : "#171717"
                } />
        </svg>
    );
    const EarningIcon = ({ isActive, index }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18"
            fill="none">
            <path d={isActive || isHover[index] ?
                "M8.575 9.89183C7.86775 9.89183 7.18948 10.1728 6.68938 10.6729C6.18928 11.173 5.90833 11.8513 5.90833 12.5585C5.90833 13.2657 6.18928 13.944 6.68938 14.4441C7.18948 14.9442 7.86775 15.2252 8.575 15.2252C9.28224 15.2252 9.96052 14.9442 10.4606 14.4441C10.9607 13.944 11.2417 13.2657 11.2417 12.5585C11.2417 11.8513 10.9607 11.173 10.4606 10.6729C9.96052 10.1728 9.28224 9.89183 8.575 9.89183ZM7.43214 12.5585C7.43214 12.2554 7.55255 11.9647 7.76687 11.7504C7.9812 11.536 8.27189 11.4156 8.575 11.4156C8.8781 11.4156 9.16879 11.536 9.38312 11.7504C9.59745 11.9647 9.71785 12.2554 9.71785 12.5585C9.71785 12.8616 9.59745 13.1523 9.38312 13.3666C9.16879 13.5809 8.8781 13.7014 8.575 13.7014C8.27189 13.7014 7.9812 13.5809 7.76687 13.3666C7.55255 13.1523 7.43214 12.8616 7.43214 12.5585Z"
                :
                "M8.57495 9.89183C7.86771 9.89183 7.18943 10.1728 6.68933 10.6729C6.18924 11.173 5.90828 11.8513 5.90828 12.5585C5.90828 13.2657 6.18924 13.944 6.68933 14.4441C7.18943 14.9442 7.86771 15.2252 8.57495 15.2252C9.2822 15.2252 9.96047 14.9442 10.4606 14.4441C10.9607 13.944 11.2416 13.2657 11.2416 12.5585C11.2416 11.8513 10.9607 11.173 10.4606 10.6729C9.96047 10.1728 9.2822 9.89183 8.57495 9.89183ZM7.43209 12.5585C7.43209 12.2554 7.5525 11.9647 7.76683 11.7504C7.98116 11.536 8.27185 11.4156 8.57495 11.4156C8.87806 11.4156 9.16875 11.536 9.38307 11.7504C9.5974 11.9647 9.71781 12.2554 9.71781 12.5585C9.71781 12.8616 9.5974 13.1523 9.38307 13.3666C9.16875 13.5809 8.87806 13.7014 8.57495 13.7014C8.27185 13.7014 7.98116 13.5809 7.76683 13.3666C7.5525 13.1523 7.43209 12.8616 7.43209 12.5585Z"
            }
                fill={
                    isActive || isHover[index] ? "white" : "#171717"
                } />
            <path d={isActive || isHover[index] ?
                "M12.7853 4.26593L10.3632 0.870117L1.45728 7.98478L0.963568 7.97945V7.98707H0.574997V17.1299H16.575V7.98707H15.842L14.3838 3.72116L12.7853 4.26593ZM14.2321 7.98707H6.59176L12.2824 6.04726L13.442 5.67621L14.2321 7.98707ZM11.2798 4.77945L5.40547 6.78174L10.0577 3.06516L11.2798 4.77945ZM2.09881 14.2111V10.9044C2.42046 10.7909 2.71264 10.6068 2.9539 10.3657C3.19516 10.1245 3.37939 9.83247 3.49309 9.51088H13.6569C13.7705 9.83261 13.9547 10.1248 14.196 10.3661C14.4372 10.6074 14.7295 10.7916 15.0512 10.9052V14.2118C14.7295 14.3254 14.4372 14.5096 14.196 14.7509C13.9547 14.9922 13.7705 15.2844 13.6569 15.6061H3.49462C3.38047 15.2843 3.19592 14.9921 2.95444 14.7508C2.71296 14.5094 2.42064 14.325 2.09881 14.2111Z"
                :
                "M12.7852 4.26593L10.3631 0.870117L1.45724 7.98478L0.963523 7.97945V7.98707H0.574951V17.1299H16.575V7.98707H15.842L14.3837 3.72116L12.7852 4.26593ZM14.2321 7.98707H6.59171L12.2824 6.04726L13.442 5.67621L14.2321 7.98707ZM11.2797 4.77945L5.40543 6.78174L10.0576 3.06516L11.2797 4.77945ZM2.09876 14.2111V10.9044C2.42042 10.7909 2.71259 10.6068 2.95385 10.3657C3.19511 10.1245 3.37935 9.83247 3.49305 9.51088H13.6569C13.7705 9.83261 13.9546 10.1248 14.1959 10.3661C14.4372 10.6074 14.7294 10.7916 15.0511 10.9052V14.2118C14.7294 14.3254 14.4372 14.5096 14.1959 14.7509C13.9546 14.9922 13.7705 15.2844 13.6569 15.6061H3.49457C3.38042 15.2843 3.19588 14.9921 2.95439 14.7508C2.71291 14.5094 2.42059 14.325 2.09876 14.2111Z"
            }
                fill={
                    isActive || isHover[index] ? "white" : "#171717"
                } />

        </svg>
    );
    const unread = notifications?.filter((e)=> e.read == "false")

    console.log(unread, "unread")
    console.log(notifications, "notifications")


    const userSideBarNav = [
        {
            text: "Home",
            to: "/app",
            icon: <HomeIcon isActive={pathname === "/app"} />,
        },
        {
            text: "Bookings",
            to: "/app/booking",
            icon: <BookingIcon isActive={pathname.includes("booking")} index={1} />,
        },
        {
            text: unread >= 1  ? `Notification (${unread?.length})` : "Notification",
            icon: <IoNotifications />,
            to: "/app/notification"
        },
        {
            text: "Profile Settings",
            icon: <IoMdSettings />,
            to: "/app/setting"
        },
    ]
    const mechanicSideBarNav = [
        {
            text: "Home",
            to: "/app/mech",
            icon: <HomeIcon isActive={pathname === "/app/mech"} />,
        },
        // {
        //     text: "Earnings",
        //     to: "/app/mech/earnings",
        //     icon: <EarningIcon isActive={pathname.includes("earnings")} index={1}/>,
        // },
        {
            text: "Bookings",
            to: "/app/mech/booking",
            icon: <BookingIcon isActive={pathname.includes("booking")} index={2}/>,
        },
        {
            text: unread >= 1  ? `Notification (${unread?.length})` : "Notification",
            icon: <IoNotifications />,
            to: "/app/mech/notification"
        },
        {
            text: "Profile Settings",
            icon: <IoMdSettings />,
            to: "/app/mech/setting"
        },
    ]
    const adminicSideBarNav = [
        {
            text: "Home",
            to: "/app/admin",
            icon: <HomeIcon isActive={pathname === "/app/admin"} />,
        },
        {
            text: "Earnings",
            to: "/app/admin/earnings",
            icon: <EarningIcon isActive={pathname.includes("earnings")} />,
        },
        {
            text: "Bookings",
            to: "/app/admin/booking",
            icon: <BookingIcon isActive={pathname.includes("booking")} />,
        },
        {
            text: unread >= 1  ? `Notification (${unread?.length})` : "Notification",
            icon: <IoNotifications />,
            to: "/app/admin/notification"
        },
        {
            text: "Profile Settings",
            icon: <IoMdSettings />,
            to: "/app/admin/setting"
        },
    ]

    const opensideBarVisibility = () => {
        dispatch(openNavBarVisibility())
    }
    const closesideBarVisibility = () => {
        dispatch(closeNavBarVisibility())
    }

    const logOutFunc = async () => {
        // const logOutFunc = () => {
        const url = import.meta.env.VITE_API_Url
        const token = UserDataWithToken.token
        // console.log(UserDataWithToken.token, "UserDataWithToken")
        // setloading(true)

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
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Attach the token for authentication
                        },
                    }
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
        <div className={navBarVisibility ? "sidebar sidebar_increase" : "sidebar"}
            style={navBarVisibility && width < 500 ? { display: "flex", paddingTop: 0 } :
                !navBarVisibility && width < 500 ? { display: "none" } : null}
        >
            <div className="sideBarTop">

                {
                    navBarVisibility && width < 500 ?
                        <div className="NotLoggedInHead">
                            <div className="NotLoggedInHeadWrapper">
                                <img src={logo} alt="" />
                                <IoCloseSharp
                                    style={{ cursor: "pointer" }}
                                    onClick={closesideBarVisibility}
                                />
                            </div>
                        </div>
                        :
                        <img src={logo} alt=""
                            onClick={() => navigate("/")}
                            className="sideBarLogo" style={navBarVisibility ? null : { width: "80px" }}

                        />
                }

                {/* <img src={close} alt="" className="sideBarTopClose" /> */}
                <div className="sideBarNavs">
                    {/* {
                        navBarVisibility ?
                            <IoCloseSharp size={26} className="sideBarTopClose" onClick={closesideBarVisibility} style={!navBarVisibility && width > 500 || width < 660 ? { display: "flex" } : { display: "none" }} />
                            :
                            <GiHamburgerMenu size={26} className="sideBarTopClose" onClick={opensideBarVisibility} style={!navBarVisibility && width > 500 || width < 660 ? { display: "flex" } : { display: "none" }} />
                    } */}
                    {
                        User === "Admin" ?
                            <>
                                {
                                    adminicSideBarNav?.map((e, i) => (
                                        <NavLink
                                            // end // Ensures exact matching
                                            end={e?.to === "/app/admin"} // Ensure exact matching for the "Home" route
                                            className={({ isActive }) => isActive ? "sideBarNavActive sideBarNav" : "sideBarNav"}
                                            // className={pages.includes(e?.to) ? "sideBarNavActive sideBarNav" : "sideBarNav"}
                                            style={navBarVisibility ? null : { fontSize: "20px", justifyContent: "center", padding: "0px 0px" }}
                                            key={i}
                                            to={e?.to}
                                            onMouseEnter={() =>
                                                setisHover(prev => {
                                                    const newHoverState = [...prev];
                                                    newHoverState[i] = true;
                                                    return newHoverState;
                                                })
                                            }

                                            onMouseLeave={() =>
                                                setisHover(prev => {
                                                    const newHoverState = [...prev];
                                                    newHoverState[i] = false;
                                                    return newHoverState;
                                                })
                                            }

                                        // onClick={() => { setpages(e?.to), width < 500 ? dispatch(closeNavBarVisibility()) : null }}
                                        >
                                            {e?.icon}
                                            <span style={navBarVisibility ? null : { display: "none" }}>
                                                {e?.text}
                                            </span>
                                        </NavLink>
                                    ))
                                }
                            </>
                            : User === "Mechanic" ?
                                <>

                                    {
                                        mechanicSideBarNav?.map((e, i) => (
                                            <NavLink
                                                // end // Ensures exact matching
                                                end={e?.to === "/app/mech"} // Ensure exact matching for the "Home" route
                                                className={({ isActive }) => isActive ? "sideBarNavActive sideBarNav" : "sideBarNav"}
                                                // className={pages.includes(e?.to) ? "sideBarNavActive sideBarNav" : "sideBarNav"}
                                                style={navBarVisibility ? null : { fontSize: "20px", justifyContent: "center", padding: "0px 0px" }}
                                                key={i}
                                                to={e?.to}
                                                onMouseEnter={() =>
                                                    setisHover(prev => {
                                                        const newHoverState = [...prev];
                                                        newHoverState[i] = true;
                                                        return newHoverState;
                                                    })
                                                }

                                                onMouseLeave={() =>
                                                    setisHover(prev => {
                                                        const newHoverState = [...prev];
                                                        newHoverState[i] = false;
                                                        return newHoverState;
                                                    })
                                                }

                                            // onClick={() => { setpages(e?.to), width < 500 ? dispatch(closeNavBarVisibility()) : null }}
                                            >
                                                {e?.icon}
                                                <span style={navBarVisibility ? null : { display: "none" }}>
                                                    {e?.text}
                                                </span>
                                            </NavLink>
                                        ))
                                    }
                                </>
                                :
                                <>
                                    {
                                        userSideBarNav?.map((e, i) => (

                                            <NavLink
                                                // end // Ensures exact matching
                                                end={e?.to === "/app"} // Ensure exact matching for the "Home" route
                                                className={({ isActive }) => isActive ? "sideBarNavActive sideBarNav" : "sideBarNav"}
                                                // className={pages.includes(e?.to) ? "sideBarNavActive sideBarNav" : "sideBarNav"}
                                                style={navBarVisibility ? null : { fontSize: "20px", justifyContent: "center", padding: "0px 0px" }}
                                                key={i}
                                                to={e?.to}
                                                onMouseEnter={() =>
                                                    setisHover(prev => {
                                                        const newHoverState = [...prev];
                                                        newHoverState[i] = true;
                                                        return newHoverState;
                                                    })
                                                }

                                                onMouseLeave={() =>
                                                    setisHover(prev => {
                                                        const newHoverState = [...prev];
                                                        newHoverState[i] = false;
                                                        return newHoverState;
                                                    })
                                                }

                                            // onClick={() => { setpages(e?.to), width < 500 ? dispatch(closeNavBarVisibility()) : null }}
                                            >
                                                {e?.icon}
                                                <span style={navBarVisibility ? null : { display: "none" }}>
                                                    {e?.text}
                                                </span>
                                            </NavLink>
                                        ))
                                    }
                                </>
                    }
                </div>

            </div>
            <div className="sideBarBottom"
                style={navBarVisibility ? null : { justifyContent: "center" }}
            >
                <div className="logOutDetails" style={navBarVisibility ? null : { display: "none" }}>
                    <div className="logutIcon">
                        <img src="" alt="" />
                    </div>
                    <p> {UserDatas?.fullName}</p>
                </div>
                <LuLogOut color="#A21C29" onClick={logOutFunc} />
            </div>
            <ScrollToTop pages={pages} book={book} />
        </div>
    )
}

export default SideBar