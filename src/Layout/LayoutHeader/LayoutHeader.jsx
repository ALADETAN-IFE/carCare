import "./layoutHeader.css"
import logo from "../../assets/svg/Logo.svg"
import { BiHelpCircle } from "react-icons/bi"
import { FiHelpCircle } from "react-icons/fi"

const LayoutHeader = () => {
  return (
    <div className="layoutHeader">
      <div className="layoutHeaderLeft">
      <img src={logo} alt="" />
        {/* <BiHelpCircle size={24}/> */}
      </div>
      <div className="layoutHeaderRight">
        <FiHelpCircle size={24}/>
      </div>
    </div>
  )
}

export default LayoutHeader