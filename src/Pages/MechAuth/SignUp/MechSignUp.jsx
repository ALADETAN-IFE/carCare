import React from 'react'
import '../../SignUp/SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import AuthHeader from '../../AuthHeader/AuthHeader';


const MechSignUp = () => {
  const [seePassword, setSeePassword] = useState(true)
  const navigate = useNavigate()
  const handlesignUp = (e) => {
    e.preventDefault()
    navigate("/mechEmailVerf")
  }
  return (
    <div>
      <div className='signUp__container'>
        <header className='authHeader'>
        <AuthHeader/>
        </header>
        <div className='signUp__content'>
          <div className='mechanicLink'>
           <p> <Link to='/signup'>Sign up as a Car Owner</Link></p>
          </div>
        <div className='signUp__details'>
       <div className='signUp__details__text'>
       <h1>SIGN UP</h1>
        <p>Connect with more customers, showcase your 
        skills, and get the support you need to succeed.</p>
       </div>
       
        <form onSubmit={handlesignUp} className='login__form'>
        <div className='signUp__input'>
         <label htmlFor="">Full Name</label>
         <input type="text" placeholder='John Doe'/>
         </div>
         <div className='signUp__input'>
         <label htmlFor="">Email Address</label>
         <input type="text" placeholder='Enter your email address'/>
         </div>

         <div className='signUp__input'>
         <label htmlFor="">Phone Number</label>
         <input type="number" placeholder='090-xxxx-xxxx'/>
         </div>

         <div className='signUp__input'>
         <label htmlFor="">Password</label>
         <div className='signUp__input__password'>
         <input type="password" placeholder='Enter your password'/>
         {seePassword ? <IoEye onClick={() => setSeePassword(!seePassword )} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
         </div>
         </div>

         <div className='sigUp__input'>
         <label htmlFor="">Confirm Password</label>
         <div className='signUp__input__password'>
         <input type="password" />
         {seePassword ? <IoEye onClick={() => setSeePassword(!seePassword )} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
         </div>
         </div>
         <button type="submit" className='signUp__btn' onClick={handlesignUp}>Sign Up</button>
        </form>
        <div className="signUp__text">
        <p>Already on Carcare?  <Link to='/login' className='signup__link'>Login</Link></p>
        <p>By signing up, you agree  to our <Link to='/terms' className='signup__link'>Terms of use</Link> & <Link to='/policy' className='signup__link'>Privacy and Policy</Link> </p>
        </div>

       </div>


        </div>
      </div>
    </div>
  )
}


export default MechSignUp