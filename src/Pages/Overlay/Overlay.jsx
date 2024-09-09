import React from 'react'
import './Overlay.css'
import  { Link, useNavigate } from 'react-router-dom';


const Overlay = () => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
      e.preventDefault()
      navigate("/changePassword")
    }
  return (
    <div className='popup'>
        <div className="popup__content">
                    <h1>CHECK YOUR EMAIL</h1>
                   <p>Please check your inbox. We’ve emailed <br />
                    you a link to reset your password. </p>
                    <button className='resetPassword'  onClick={handleNavigate}
        style={{ transitionDuration: '0ms' }}>Verify Email</button>
            <div>
              <p>Didn’t Receive the Email? Check your spam <br />
              folder or <Link to='/login' className='signup__link'>try another email address</Link>
              </p>
            </div>
            
        </div>
    </div>
  )
}

export default Overlay