import React from 'react'
import './Login.css'
import login from '../../assets/images/login.png'

const Login = () => {
  return (
   <div className='Login__container'>
       <div>
        <img src={login} alt="" />
       </div>
       <div className='Login__details'>
        <h1>WELCOME BACK</h1>
        <p>Access your dashboard to book appointments, track your <br />
        service history, and manage your car care with ease.</p>
        <form action="">
         <div>
         <label htmlFor="">Email Address</label>
         <input type="text" placeholder='Enter your email address'/>
         </div>
         <div>
         <label htmlFor="">Password</label>
         <input type="text" placeholder='Enter your password'/>
         <p><Link to='/forgotPassword'>Forgot Password ?</Link></p>
         </div>
        </form>
        <button type="submit">Login</button>
        <div className="underbutton__text">
        <p>New in Carcare? <Link to='/signup' className='signup__link'>SignUp</Link></p>
        </div>
       </div>
   </div>
  )
}



export default Login