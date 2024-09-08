import {useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Login = () => {
  const [seePassword, setSeePassword] = useState(true)
  return (
   <div className='Login__container'>

       <div className='Login__details'>
       <h1>WELCOME BACK</h1>
        <p>Access your dashboard to book appointments, track your <br />
        service history, and manage your car care with ease.</p>
       
        <form action="" className='login__form'>
         <div className='login__input'>
         <label htmlFor="">Email Address</label>
         <input type="text" placeholder='Enter your email address'/>
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

   </div>
  )
}



export default Login