import React from 'react'
import '../../VerifyEmail/VerifyEmail.css'

import  { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '../../AuthHeader/AuthHeader';


const MechEmailVerf = () => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
      e.preventDefault()
      navigate("/mechInfo")
    }
  return (
    <div className='VerifyEmail__container'> 
        <header>
        <AuthHeader/>
        </header>
        <div className='VerifyEmail__content'>
        <div className="popup__content">
                    <h1>WELCOME TO CARCARE</h1>
                   <p>We’re excited to have you on board! To finish setting <br />
up your account, simply click the verify your email to <br />
unlock all the benefits of your new account</p>
                    <button className='resetPassword'  onClick={handleNavigate}
        style={{ transitionDuration: '0ms' }}>Verify Email</button>
            <div>
              <p>Didn’t Receive the Email? Check your spam <br />
              folder or <Link to='/signup' className='signup__link'>Click here to resend</Link>
              </p>
            </div>
            
        </div>
    </div>
     
    </div>
  )
}

export default MechEmailVerf