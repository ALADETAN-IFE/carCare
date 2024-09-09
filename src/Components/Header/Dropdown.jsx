import { Link, NavLink } from "react-router-dom";
import "./header.css";
import "./dropdown.css";

const Dropdown = ({headerMiddle}) => {
  return (
    <section className="dropdown">
        {
            headerMiddle?.map((e, i) => (
              <NavLink className={ ({ isActive })  => isActive ? "headerActive headerRoute" : "headerNotActive headerRoute"} key={i} to={e?.to}>
                {e?.text}
              </NavLink>
            ))
          }
        <Link to="/login" className="header-btn sign-in">Sign In</Link>
        <Link to="/signup" className="header-btn">Sign Up</Link>
    </section>
  )
}

export default Dropdown
