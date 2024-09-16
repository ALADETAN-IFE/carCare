import { Link, NavLink } from "react-router-dom"
import "./header.css"
import { BsMenuAppFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import Dropdown from "./Dropdown"
import { FiHelpCircle } from "react-icons/fi"
import { IoPersonCircleSharp } from "react-icons/io5"
import LoggedInDropdown from "./LoggedInDropdown/LoggedInDropdown"
import { useSelector } from "react-redux"
import Logo from "../../assets/svg/Logo.svg"
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi"
import ScrollToTop from "../ScrollToTop"

const Header = () => {
  // const [isLoggedIn, setisLoggedIn] = useState(isLoggedIn1)
  const isLoggedIn = useSelector((state)=> state?.carCare?.isLoggedIn)

  
  const height = window.innerHeight
  const [width, setwidth] = useState(window.innerWidth)  
  // const widthL = window.innerWidth
  const [showMenu, setshowMenu] = useState(false)
  const [showMenu2, setshowMenu2] = useState(false)
  setInterval(() => {
    setwidth(window.innerWidth)
  }, 500);
  useEffect(() => {
    if (width >= "426") {
      setshowMenu(false)
      setshowMenu2(false)
    }
  }, [width])

  const headerMiddle = [
    {
      text: "Home",
      to: "/"
    },
    {
      text: "About",
      to: "/about"
    },
    // {
    //   text: "Mechanics",
    //   to: "/mechanics"
    // },
    {
      text: "Blog",
      to: "/blog"
    },
    {
      text: "Contact",
      to: "/contact"
    },
  ]


  return (
    <header>
      {
        showMenu2 ?
          <LoggedInDropdown setshowMenu2={setshowMenu2}
          showMenu2={showMenu2} />

          : null
      }
      <div className="headerWrapper">
        <div className="headerLeft">
          {/* height = {height}
          width = {width} */}
          <img src={Logo} alt={Logo} 
          // style={{maxWidth: "100%"}} 
          />
          </div>
        <div className="headerMiddle">
          {
            headerMiddle?.map((e, i) => (
              <NavLink className={({ isActive }) => isActive ? "headerActive headerRoute" : "headerNotActive headerRoute"} key={i} to={e?.to}>
                {e?.text}
              </NavLink>
            ))
          }
        </div>
        <>
          {
            isLoggedIn  ?
              <div className="headerRightLoggedIn">
                <div className="headerRightLoggedInIcons">
                  <FiHelpCircle size={24} />
                  <IoPersonCircleSharp size={40} onClick={() => setshowMenu2(!showMenu2)} />
                </div>
                {/* <div className="menu" onClick={() => setshowMenu(!showMenu)} > */}
                <div className="menu" onClick={() => setshowMenu(!showMenu)} >
                  {
                    showMenu ?
                      <>
                        <BiMenuAltRight size={26} />
                        <Dropdown
                         headerMiddle={headerMiddle} 
                         loggedIn
                         />
                      </>
                      : <BiMenuAltLeft  size={26}/>
                  }
                </div>

              </div> 
              :
              <div className="headerRight">
                <div className="menu" onClick={() => setshowMenu(!showMenu)} >
                  {
                    showMenu ?
                      <>
                        <BsMenuAppFill />
                        <Dropdown headerMiddle={headerMiddle} />
                      </>
                      : <BsMenuAppFill />
                  }
                </div>
                <div className="laptopMenu">
                  <Link to="/login" className="header-btn sign-in">Sign In</Link>
                  <Link to="/signup" className="header-btn">Sign Up</Link>
                </div>
              </div>

          }
        </>
      </div>
      <ScrollToTop/>
    </header>
  )
}

export default Header