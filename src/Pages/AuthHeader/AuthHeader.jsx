import React from 'react'
import './AuthHeader.css'
// import headerLogo from '../../assets/images/headerLogo.png'
import Logo from "../../assets/svg/Logo.svg"
import { useNavigate } from 'react-router-dom'

const AuthHeader = () => {
  const navigate = useNavigate()
  return (
    <div className='authHeader__container'>
      <div className="authHeader__container_wrapper">
        <img src={Logo} alt="" onClick={()=> navigate("/")}/>
      </div>
    </div>
  )
}

export default AuthHeader