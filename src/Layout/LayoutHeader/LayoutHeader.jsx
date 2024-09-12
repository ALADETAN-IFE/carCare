import { IoPersonCircleSharp } from "react-icons/io5"
import "./layoutHeader.css"
// import { BiHelpCircle } from "react-icons/bi"
import { FiHelpCircle } from "react-icons/fi"
import { useState } from "react"
import Logo from "../../assets/svg/Logo.svg"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineQuestionCircle } from "react-icons/ai"

const LayoutHeader = ({ LayoutHeaderStyle }) => {
  // const height = window.innerHeight
  const [width, setwidth] = useState(window.innerWidth)
  const [height, setheight] = useState(window.innerHeight)
  setInterval(() => {
    setwidth(window.innerWidth)
    setheight(window.innerHeight)
  }, 500);

  function getInitials(fullName) {
    // Split the full name into an array of words (assuming names are separated by spaces)
    let nameParts = fullName.trim().split(" ");
    console.log(nameParts)

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
  return (
    <>
      {
        LayoutHeaderStyle ?
          <div className="layoutHeader">
            width = {width}
            "  "height = {height}
            <div className="layoutHeaderRight">
              <AiOutlineQuestionCircle size={24} />
              <IoPersonCircleSharp size={40} />
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
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default LayoutHeader