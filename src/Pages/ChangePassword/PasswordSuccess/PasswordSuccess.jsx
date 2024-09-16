import React from 'react'
import '../../Overlay/Overlay.css'
import  { Link, useNavigate } from 'react-router-dom';

const PasswordSuccess = () => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
      e.preventDefault()
      navigate("/login")
    }
  return (
    <div className='popup'>
        <div className="popup__content">
                    <h1>PASSWORD CHANGED SUCCESSFULLY</h1>
                   <p>Your password has been updated. You can<br />
                    now log in with your new password. </p>
                    <button className='resetPassword'  onClick={handleNavigate}
       >Back to Login</button>
            
            
        </div>
    </div>
    
  )
}

export default PasswordSuccess