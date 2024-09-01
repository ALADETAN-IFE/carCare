import { Link } from "react-router-dom"
import "./header.css"
import { BsMenuAppFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import Dropdown from "./Dropdown"

const Header = () => {
  const height = window.innerHeight
  // const widthL = window.innerWidth
  const [showMenu, setshowMenu] = useState(false)
  const [width, setwidth] = useState(window.innerWidth)
  setInterval(() => {
    setwidth(window.innerWidth)
  }, 500);
  useEffect(() => {
    if (width >= "426") {
      setshowMenu(false)
    }
  }, [width])


  return (
    <header>
      <div className="headerWrapper">
        <div className="headerLeft">
          height = {height}
          width = {width}</div>
        <div className="headerMiddle"></div>
        <div className="headerRight">

          <div className="menu" onClick={() => setshowMenu(!showMenu)} >
            {
              showMenu ?
                <>
                  <BsMenuAppFill />
                  <Dropdown/>
                </>
                : <BsMenuAppFill />
            }
          </div>
          <div className="laptopMenu">
            <Link to="/login" className="header-btn sign-in">Sign In</Link>
            <Link to="/signup" className="header-btn">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header