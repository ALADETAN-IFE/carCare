import { useState } from 'react'
import './loggedInDropdown.css'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { RiDashboardFill } from "react-icons/ri";
import { BiQuestionMark } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../Global/Redux-actions/carCare';

const LoggedInDropdown = ({ setshowMenu2, showMenu2 }) => {
    const [showMenu3, setshowMenu3] = useState(true)
    // const [dashboardPath, setdashboardPath] = useState("/app")
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
            to: "/app"
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
    return (
        <section className='loggedInDropdown' onClick={removeDropDown}>
            <div className="loggedInDropdownWrapper">
                <div className={showMenu3 ? "loggedInDropdownBox" : "removeDropDown"}>
                    <div className="loggedInDropdownBoxUp">
                        <div className="loggedInDropdownBoxUpWrap">
                            <IoPersonCircleSharp size={40} />
                            <p>Aladetan Ife</p>
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
                        <div className="loggedInDropdownBoxDownBox" onClick={() => dispatch(logOut())}>
                            <RiLogoutCircleLine /><p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoggedInDropdown
