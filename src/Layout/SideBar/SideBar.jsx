import "./sideBar.css"
import logo from "../../assets/svg/Logo.svg"
import { NavLink, useNavigate } from "react-router-dom"
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { logOut, setNavBarVisibility } from "../../Global/Redux-actions/carCare";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";

const SideBar = ({ pages, setpages }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navBarVisibility = useSelector((state) => state.carCare.navBarVisibility)
    const [width, setwidth] = useState(window.innerWidth)
    setInterval(() => {
        setwidth(window.innerWidth)
    }, 500);
    // useEffect(() => {
    //     if (width >= "769") {
    //         dispatch(setNavBarVisibility(true))
    //     }
    // }, [width])
    // useEffect(() => {
    //     if (width <= "769" && !navBarVisibility) {
    //         dispatch(setNavBarVisibility(false))
    //     }
    // }, [width])

    const sideBarNav = [
        {
            text: "Home",
            to: "app",
            icon: pages.includes("app") ? <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M9.32926 0.33964C9.12925 0.122169 8.85801 0 8.5752 0C8.29238 0 8.02114 0.122169 7.82113 0.33964L0.731589 8.04918C0.682006 8.1031 0.642675 8.16713 0.615841 8.23759C0.589007 8.30804 0.575195 8.38356 0.575195 8.45983C0.575195 8.53609 0.589007 8.61161 0.615841 8.68207C0.642675 8.75253 0.682006 8.81655 0.731589 8.87048C0.831727 8.97939 0.967542 9.04057 1.10916 9.04057C1.17928 9.04057 1.24871 9.02555 1.3135 8.99637C1.37828 8.96718 1.43714 8.9244 1.48673 8.87048L2.17573 8.11994V14.26C2.17573 14.7214 2.34429 15.164 2.64432 15.4904C2.94436 15.8167 3.35129 16 3.7756 16H13.3748C13.7991 16 14.206 15.8167 14.5061 15.4904C14.8061 15.164 14.9747 14.7214 14.9747 14.26V8.11994L15.6637 8.87048C15.7638 8.97939 15.8996 9.04057 16.0412 9.04057C16.1828 9.04057 16.3187 8.97939 16.4188 8.87048C16.5189 8.76157 16.5752 8.61385 16.5752 8.45983C16.5752 8.3058 16.5189 8.15809 16.4188 8.04918L13.9081 5.31963V1.49967C13.9081 1.34584 13.8519 1.19831 13.7519 1.08954C13.6519 0.980762 13.5162 0.919653 13.3748 0.919653H12.3082C12.1668 0.919653 12.0311 0.980762 11.9311 1.08954C11.8311 1.19831 11.7749 1.34584 11.7749 1.49967V2.99958L9.32926 0.33964ZM13.9081 6.95991V14.26C13.9081 14.4138 13.8519 14.5613 13.7519 14.6701C13.6519 14.7789 13.5162 14.84 13.3748 14.84H3.7756C3.63416 14.84 3.49852 14.7789 3.39851 14.6701C3.2985 14.5613 3.24231 14.4138 3.24231 14.26V6.95991L8.5752 1.15978L13.9081 6.95991Z" fill="white" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M9.32926 0.33964C9.12925 0.122169 8.85801 0 8.5752 0C8.29238 0 8.02114 0.122169 7.82113 0.33964L0.731589 8.04918C0.682006 8.1031 0.642675 8.16713 0.615841 8.23759C0.589007 8.30804 0.575195 8.38356 0.575195 8.45983C0.575195 8.53609 0.589007 8.61161 0.615841 8.68207C0.642675 8.75253 0.682006 8.81655 0.731589 8.87048C0.831727 8.97939 0.967542 9.04057 1.10916 9.04057C1.17928 9.04057 1.24871 9.02555 1.3135 8.99637C1.37828 8.96718 1.43714 8.9244 1.48673 8.87048L2.17573 8.11994V14.26C2.17573 14.7214 2.34429 15.164 2.64432 15.4904C2.94436 15.8167 3.35129 16 3.7756 16H13.3748C13.7991 16 14.206 15.8167 14.5061 15.4904C14.8061 15.164 14.9747 14.7214 14.9747 14.26V8.11994L15.6637 8.87048C15.7638 8.97939 15.8996 9.04057 16.0412 9.04057C16.1828 9.04057 16.3187 8.97939 16.4188 8.87048C16.5189 8.76157 16.5752 8.61385 16.5752 8.45983C16.5752 8.3058 16.5189 8.15809 16.4188 8.04918L13.9081 5.31963V1.49967C13.9081 1.34584 13.8519 1.19831 13.7519 1.08954C13.6519 0.980762 13.5162 0.919653 13.3748 0.919653H12.3082C12.1668 0.919653 12.0311 0.980762 11.9311 1.08954C11.8311 1.19831 11.7749 1.34584 11.7749 1.49967V2.99958L9.32926 0.33964ZM13.9081 6.95991V14.26C13.9081 14.4138 13.8519 14.5613 13.7519 14.6701C13.6519 14.7789 13.5162 14.84 13.3748 14.84H3.7756C3.63416 14.84 3.49852 14.7789 3.39851 14.6701C3.2985 14.5613 3.24231 14.4138 3.24231 14.26V6.95991L8.5752 1.15978L13.9081 6.95991Z" fill="#171717" />
            </svg>,
        },
        {
            text: "Bookings",
            to: "booking",
            icon: pages.includes("booking") ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9.15881 11.2119V8.39557H10.3037V10.5479L12.1659 11.6241L11.5935 12.6163L9.15881 11.2119ZM12.5934 1.14485L11.4485 0L10.3037 1.14485L9.15881 0L8.01396 1.14485L6.8691 0L5.72425 1.14485L4.5794 0L3.43455 1.14485L2.2897 0L1.14485 1.14485L0 0V15.2647L1.14485 14.1198L2.2897 15.2647L3.43455 14.1198L4.5794 15.2647L5.78531 14.0588C5.89217 14.2038 6.01428 14.3335 6.14403 14.4633C7.14534 15.4496 8.49494 16.0017 9.90046 16C11.306 15.9983 12.6542 15.4428 13.6531 14.454C14.6519 13.4652 15.221 12.1226 15.2369 10.7172C15.2528 9.31176 14.7144 7.95664 13.7382 6.94543V0L12.5934 1.14485ZM6.18219 6.8691C5.72425 7.30415 5.36553 7.82315 5.09077 8.39557H2.2897V6.8691H6.18219ZM4.63283 9.92204C4.5794 10.1739 4.5794 10.4258 4.5794 10.6853C4.5794 10.9448 4.5794 11.1966 4.63283 11.4485H2.2897V9.92204H4.63283ZM11.4485 5.34264H2.2897V3.81617H11.4485V5.34264ZM13.6237 10.6853C13.6237 11.1737 13.5321 11.6546 13.3566 12.1049C13.1582 12.5476 12.8834 12.975 12.5399 13.3032C12.2117 13.6466 11.7843 13.9214 11.3417 14.1198C10.8913 14.2954 10.4105 14.387 9.92204 14.387C7.87657 14.387 6.22036 12.7307 6.22036 10.6853C6.22036 9.7007 6.6096 8.77719 7.30415 8.06738C8.01396 7.37284 8.93747 6.98359 9.92204 6.98359C11.9599 6.98359 13.6237 8.63981 13.6237 10.6853Z" fill="white" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9.15881 11.2119V8.39557H10.3037V10.5479L12.1659 11.6241L11.5935 12.6163L9.15881 11.2119ZM12.5934 1.14485L11.4485 0L10.3037 1.14485L9.15881 0L8.01396 1.14485L6.8691 0L5.72425 1.14485L4.5794 0L3.43455 1.14485L2.2897 0L1.14485 1.14485L0 0V15.2647L1.14485 14.1198L2.2897 15.2647L3.43455 14.1198L4.5794 15.2647L5.78531 14.0588C5.89217 14.2038 6.01428 14.3335 6.14403 14.4633C7.14534 15.4496 8.49494 16.0017 9.90046 16C11.306 15.9983 12.6542 15.4428 13.6531 14.454C14.6519 13.4652 15.221 12.1226 15.2369 10.7172C15.2528 9.31176 14.7144 7.95664 13.7382 6.94543V0L12.5934 1.14485ZM6.18219 6.8691C5.72425 7.30415 5.36553 7.82315 5.09077 8.39557H2.2897V6.8691H6.18219ZM4.63283 9.92204C4.5794 10.1739 4.5794 10.4258 4.5794 10.6853C4.5794 10.9448 4.5794 11.1966 4.63283 11.4485H2.2897V9.92204H4.63283ZM11.4485 5.34264H2.2897V3.81617H11.4485V5.34264ZM13.6237 10.6853C13.6237 11.1737 13.5321 11.6546 13.3566 12.1049C13.1582 12.5476 12.8834 12.975 12.5399 13.3032C12.2117 13.6466 11.7843 13.9214 11.3417 14.1198C10.8913 14.2954 10.4105 14.387 9.92204 14.387C7.87657 14.387 6.22036 12.7307 6.22036 10.6853C6.22036 9.7007 6.6096 8.77719 7.30415 8.06738C8.01396 7.37284 8.93747 6.98359 9.92204 6.98359C11.9599 6.98359 13.6237 8.63981 13.6237 10.6853Z" fill="#171717" />
            </svg>,
        },
        {
            text: "Notification",
            icon: <IoNotifications />,
            to: "hs"
        },
        {
            text: "Profile Settings",
            icon: <IoMdSettings />,
            to: "sn"
        },
    ]

    const sideBarVisibility = () => {
        dispatch(setNavBarVisibility())
    }
    return (
        <div className={navBarVisibility ? "sidebar sidebar_increase" : "sidebar"}
            style={navBarVisibility && width < 500 ? { display: "flex" } :
                !navBarVisibility && width < 500 ? { display: "none" } : null}
        >
            <div className="sideBarTop">
                <img src={logo} alt=""
                    onClick={() => navigate("/")}
                    className="sideBarLogo" style={navBarVisibility ? null : { width: "80px" }}

                />
                {/* <img src={close} alt="" className="sideBarTopClose" /> */}
                <div className="sideBarNavs">
                    {
                        navBarVisibility ?
                            <BiMenuAltRight size={26} className="sideBarTopClose" onClick={sideBarVisibility} style={!navBarVisibility && width > 500 || width  < 660 ? { display: "flex" } :  { display: "none" } } />
                            :
                            <BiMenuAltLeft size={26} className="sideBarTopClose" onClick={sideBarVisibility} style={!navBarVisibility && width > 500 || width  < 660 ? { display: "flex" } :  { display: "none" } }  />
                    }
                    {
                        sideBarNav?.map((e, i) => (
                            <NavLink className={pages.includes(e?.to) ? "sideBarNavActive sideBarNav" : "sideBarNav"}
                                style={navBarVisibility ? null : { fontSize: "20px", justifyContent: "center", padding: "0px 0px" }}
                                key={i} onClick={() => setpages(e?.to)}>
                                {e?.icon}
                                <span style={navBarVisibility ? null : { display: "none" }}>
                                    {e?.text}
                                </span>
                            </NavLink>
                        ))
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
                    <p> Favour Joy</p>
                </div>
                <LuLogOut color="#A21C29" onClick={() => dispatch(logOut())} />
            </div>
        </div>
    )
}

export default SideBar