import React from 'react'
import './AuthHeader.css'
import headerLogo from '../../assets/images/headerLogo.png'

const AuthHeader = () => {
  return (
    <div className='authHeader__container'>
        <img src={headerLogo} alt="" />
    </div>
  )
}

export default AuthHeader