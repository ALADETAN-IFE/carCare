import { IoPersonCircleSharp } from "react-icons/io5"
import "./layoutHeader.css"
// import { BiHelpCircle } from "react-icons/bi"
import { FiHelpCircle } from "react-icons/fi"
import { useState } from "react"

const LayoutHeader = () => {
  const height = window.innerHeight
  const [width, setwidth] = useState(window.innerWidth)  
  setInterval(() => {
    setwidth(window.innerWidth)
  }, 500);
  return (
    <div className="layoutHeader">
       width = {width}
       height = {height}
      <div className="layoutHeaderRight">
        <FiHelpCircle size={24}/>
        <IoPersonCircleSharp size={40}/>
      </div>
    </div>
  )
}

export default LayoutHeader