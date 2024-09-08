import { IoPersonCircleSharp } from "react-icons/io5"
import "./layoutHeader.css"
// import { BiHelpCircle } from "react-icons/bi"
import { FiHelpCircle } from "react-icons/fi"

const LayoutHeader = () => {
  return (
    <div className="layoutHeader">
      <div className="layoutHeaderRight">
        <FiHelpCircle size={24}/>
        <IoPersonCircleSharp size={40}/>
      </div>
    </div>
  )
}

export default LayoutHeader