import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  const height =window.innerHeight
  const width =window.innerWidth
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerLeft"> 
        height = {height}
        width = {width}</div>
        <div className="headerMiddle"></div>
        <div className="headerRight">
        <Link to="/login" className="header-btn">Sign In</Link>
        <Link to="/signup" className="header-btn">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Header