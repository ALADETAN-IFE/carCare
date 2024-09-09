import React from 'react'
import './ChangePassword.css'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import { Link } from 'react-router-dom';
import AuthHeader from '../AuthHeader/AuthHeader';

const ChangePassword = () => {
    const [seePassword, setSeePassword] = useState(true);
    const [showPopUp, setShowPopUp] = useState(false)
    const handlePopup = () => {
        setShowPopUp(!showPopUp);
      };  
  return (
    <div className='changePassword__container'>
      <div>
          <AuthHeader/>
        </div>
    <div className="changePassword__content">
          <h1> Reset Password</h1>
      <div className='forgot__input__wrapper' >
        
         <div className='login__input'>
         <label htmlFor="">Password</label>
         <div className='login__input__password'>
         <input type="password"/>
         {seePassword ? <IoEye onClick={() => setSeePassword(!seePassword )} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
         </div>
         </div>

         <div className='login__input'>
         <label htmlFor="">Confirm Password</label>
         <div className='login__input__password'>
         <input type="password"/>
         {seePassword ? <IoEye onClick={() => setSeePassword(!seePassword )} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
         </div>
         </div>
          <div className='forgotPassword__btn'>
              <button type="submit" className='resetPassword'onClick={handlePopup} >Reset Password</button>
              {showPopUp ? <Overlay/> : null }
          </div>
          {/* <div>
            <p>Remember your password? <Link to='/login' className='signup__link'>Login</Link></p>
          </div> */}
      </div>
    </div>
  </div>
  )
}

export default ChangePassword