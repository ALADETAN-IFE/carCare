import React from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import AuthHeader from '../AuthHeader/AuthHeader'

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(true)
  const navigate = useNavigate()
  const handlesignUp = (e) => {
    e.preventDefault()
    navigate("/verifyEmail")
  }
  return (
    <div>
      <div className='signUp__container'>
        <AuthHeader/>
        <div className='signUp__content'>
        <div className='Login__details'>
       <div className='signUp__details__text'>
       <h1>SIGN UP</h1>
        <p>Start your journey with CarCare to access top  mechanics and keep your car running smoothly.</p>
       </div>
       
        <form onSubmit={handlesignUp} className='login__form'>
        <div className='login__input'>
         <label htmlFor="">Full Name</label>
         <input type="text" placeholder='John Doe'/>
         </div>
         <div className='login__input'>
         <label htmlFor="">Email Address</label>
         <input type="text" placeholder='Enter your email address'/>
         </div>

         <div className='login__input'>
         <label htmlFor="">Phone Number</label>
         <input type="number" placeholder='090-xxxx-xxxx'/>
         </div>

         <div className='login__input'>
         <label htmlFor="">Password</label>
         <div className='login__input__password'>
         <input type="password" placeholder='Enter your password'/>
         {seePassword ? <IoEye onClick={() => setSeePassword(!seePassword )} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
         </div>
         </div>

         <div className='login__input'>
         <label htmlFor="">Confirm Password</label>
         <div className='login__input__password'>
         <input type="password" />
         {seePassword ? <IoEye onClick={() => setSeePassword(!seePassword )} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
         </div>
         </div>
         <button type="submit" className='signUp__btn' onClick={handlesignUp}>Sign Up</button>
        </form>
        <div className="signUp__text">
        <p>Already on Carcare?  <Link to='/signup' className='signup__link'>Login</Link></p>
        <p>By signing up, you agree to our <Link to='/terms' className='signup__link'>Terms of use</Link> & <Link to='/policy' className='signup__link'>Privacy and Policy</Link> </p>
        </div>

       </div>


        </div>
      </div>
    </div>
  )
}


export default SignUp