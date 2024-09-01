import { Link } from "react-router-dom"
// import "./header.css"
import "./dropdown.cs"

const Dropdown = () => {
  return (
    <section>
        <Link to="/login" className="header-btn sign-in">Sign In</Link>
        <Link to="/signup" className="header-btn">Sign Up</Link>
    </section>
  )
}

export default Dropdown
