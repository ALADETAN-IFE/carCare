import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import { useDispatch } from 'react-redux';
import { logIn, setTypeOfUser } from '../../Global/Redux-actions/carCare';

const Login = () => {
  const [seePassword, setSeePassword] = useState(true)
  const [email, setemail] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/")
    dispatch(logIn())
    dispatch(setTypeOfUser(email))
  }
  return (
   <div className='Login__container'>
          <header className='authHeader'>
          <AuthHeader/>
          </header>
         
       <main className="login__details__container">
       <div className='Login__details'>
       <div className='login__details__text'>
       <h1>WELCOME BACK</h1>
        <p>Access your dashboard to book appointments,<br /> track your 
        service history, and manage your <br /> car care with ease.</p>
       </div>
       
        <form onSubmit={handleLogin} className='login__form'>
         <div className='login__input'>
         <label htmlFor="">Email Address</label>
         <input type="text" placeholder='Enter your email address'
         onChange={(e)=> setemail(e.target.value)}
         />
         </div>
         <div className='login__input'>
         <label htmlFor="">Password</label>
         <div className='login__input__password'>
         <input type="password" placeholder='Enter your password'/>
         {seePassword ? <IoEye onClick={() => setSeePassword(!seePassword )} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
         </div>
         <p><Link to='/forgotPassword' className='login__forgot__password'>Forgot Password ?</Link></p>
         </div>
         <button type="submit" className='login__btn'>Login</button>
        </form>

        <div className="underbutton__text">
        <p>New in Carcare?  <Link to='/signup' className='signup__link'>SignUp</Link></p>
        </div>

       </div>

       </main>
   </div>
  )
}



export default Login