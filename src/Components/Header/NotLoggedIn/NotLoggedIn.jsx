import { Link, NavLink } from "react-router-dom"
import "./notLoggedIn.css"
import logo from "../../../assets/svg/Logo.svg"
import { IoCloseSharp } from "react-icons/io5"

const NotLoggedIn = ({ headerMiddle }) => {
    return (
        <div className="NotLoggedIn">
            <div className="NotLoggedInHead">
                <div className="NotLoggedInHeadWrapper">
                    <img src={logo} alt="" />
                    <IoCloseSharp 
                    style={{cursor: "pointer"}}
                    />
                </div>
            </div>
            <div className="NotLoggedInBottom">
                <div className="NotLoggedInBottomTop">
                    {
                        headerMiddle?.map((e, i) => (
                            <NavLink className={({ isActive }) => isActive ? "NotLoggedInBottomTopActive NotLoggedInBottomTopRoute" : "NotLoggedInBottomTopNotActive NotLoggedInBottomTopRoute"} key={i} to={e?.to}>
                                {e?.text}
                            </NavLink>
                        ))
                    }
                </div>
                <div className="NotLoggedInBottomBottom">
                    {/* <> */}
                        <Link to="/login">Sign In</Link>
                        <Link to="/signup">Sign Up</Link>
                    {/* </> */}
                </div>
            </div>
        </div>
    )
}

export default NotLoggedIn