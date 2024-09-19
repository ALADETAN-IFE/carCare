import { IoPersonCircleSharp } from "react-icons/io5"
import "./layoutHeader.css"
// import { BiHelpCircle } from "react-icons/bi"
import { FiHelpCircle } from "react-icons/fi"
import { useState } from "react"
import Logo from "../../assets/svg/Logo.svg"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi"
import { closeNavBarVisibility, openNavBarVisibility } from "../../Global/Redux-actions/carCare"
import ScrollToTop from "../../Components/ScrollToTop"

const LayoutHeader = ({ LayoutHeaderStyle }) => {
  const navBarVisibility = useSelector((state) => state.carCare.navBarVisibility)
  function getInitials(fullName) {
    // Split the full name into an array of words (assuming names are separated by spaces)
    let nameParts = fullName.trim().split(" ");
    // console.log(nameParts)

    if (nameParts.length < 2) {
      // Handle cases where there is only one name
      return fullName.charAt(0).toUpperCase();
    }

    // Get the first letter of the first name
    let firstInitial = nameParts[0].charAt(0).toUpperCase();

    // Get the last letter of the last name
    // let lastInitial1 = nameParts[nameParts.length - 1].slice(-1).toUpperCase();
    let lastInitial = nameParts[1].charAt(0).toUpperCase();

    // Return the initials
    return `${firstInitial} ${lastInitial}`;
  }

  // Example usage:
  let initials = getInitials("John Doe"); // Output: JD
  const dispatch = useDispatch()
  const opensideBarVisibility = () => {
    dispatch(openNavBarVisibility())
}
const closesideBarVisibility = () => {
    dispatch(closeNavBarVisibility())
}
  return (
    <>
    <ScrollToTop/>
      {
        LayoutHeaderStyle ?
          <div className="layoutHeader">
            <div className="layoutHeaderRight">
              <AiOutlineQuestionCircle size={24} />
              <IoPersonCircleSharp size={40} />
              <div className="layoutHeaderMenu">
                {
                  navBarVisibility ?
                    <BiMenuAltRight size={26} onClick={closesideBarVisibility} style={{ cursor: "pointer" }} />
                    :
                    <BiMenuAltLeft size={26} onClick={opensideBarVisibility} style={{ cursor: "pointer" }} />
                }
              </div>
            </div>
          </div>
          :
          <div className="layOutHeader_two">
            <div className="layOutHeader_twoWrapper">
              {/* width = {width}
       "  "height = {height} */}
              <div className="layoutHeaderLeft">
                <img src={Logo} alt="" />
              </div>
              <div className="layoutHeaderRight">
                <AiOutlineQuestionCircle size={24} />
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <div className="userIconLayout">
                    <span>
                      {initials}
                    </span>
                  </div>
                  <IoIosArrowDown
                    width="12" height="6"
                  />
                  {
                    navBarVisibility ?
                      <BiMenuAltRight size={26} className="sideBarTopClose" onClick={closesideBarVisibility} />
                      :
                      <BiMenuAltLeft size={26} className="sideBarTopClose" onClick={opensideBarVisibility} />
                  }
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default LayoutHeader