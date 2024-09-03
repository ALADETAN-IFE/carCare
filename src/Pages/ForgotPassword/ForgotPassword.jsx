import './ForgotPassword.css'

const ForgotPassword = () => {
  return (
    <div className='forgotPassword__container'>
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
            <div>
                <button type="submit" className='resetPassword'>Reset Password</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword