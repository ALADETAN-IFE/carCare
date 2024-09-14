import React from 'react'
import './VerifyEmail.css'
import AuthHeader from '../AuthHeader/AuthHeader'
import  { Link, useNavigate } from 'react-router-dom';


const VerifyEmail = () => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
      e.preventDefault()
      navigate("/")
    }
  return (
    <div className='VerifyEmail__container'> 
        <header>
        <AuthHeader/>
        </header>
        <div className='VerifyEmail__content'>
        <div className="popup__content">
                    <h1>VERIFY YOUR EMAIL</h1>
                   <p>We’re excited to have you on board, Fave Joy! <br />
Click the button to verify your email and <br />
start enjoying effortless car care </p>
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

export default VerifyEmail