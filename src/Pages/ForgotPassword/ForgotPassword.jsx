import './ForgotPassword.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import AuthHeader from '../AuthHeader/AuthHeader';

const ForgotPassword = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  const handlePopup = () => {
    setShowPopUp(!showPopUp);
  };  

  return (
    <div className='forgotPassword__container'>
         <div>
          <AuthHeader/>
        </div>
      <div className='forgotPassword__content__wrapper'>
      <div className="forgotPassword__content">
        <div className='forgotPassword__text'>
            <h1> FORGOT PASSWORD</h1>
            <p>Enter your email address. We'll send an <br /> email with instructions to reset your password</p>
        </div>
        <div className='forgot__input__wrapper' >
           <div className='forgotPassword__email'>
           <label htmlFor="">Email Address</label>
           <input type="email" placeholder='Enter your email address'/>
           </div>
            <div className='forgotPassword__btn'>
                <button type="submit" className='resetPassword'onClick={handlePopup} >Request Password Reset</button>
                {showPopUp ? <Overlay/> : null }
            </div>
            <div>
              <p>Remember your password? <Link to='/login' className='signup__link'>Login</Link></p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword