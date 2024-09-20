import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import { useDispatch, useSelector } from 'react-redux';
import { clearnotVerified, logIn, setnotVerified, setTypeOfUser, setUserDatas } from '../../Global/Redux-actions/carCare';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import axios from "axios";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setloading] = useState("")
  const { typeOfUser, notVerified } = useSelector((state) => state.carCare);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault()
    const url = "https://carcareconnectproject.onrender.com"

    if (!email || !password) {
      toast.error("fill both fields")
    } else {
      const apiData = { email, password }
      // console.log(apiData)
      setloading(true)
      try {
        const response = await axios.post(`${url}/api/v1/signin`, apiData)
        console.log(response)
        dispatch(clearnotVerified())
        dispatch(setUserDatas(response?.data?.user))
        console.log(response?.data?.user?.position)
        setloading(false)
        dispatch(logIn())
        if (response?.data?.user?.position == "customer") {
          dispatch(setTypeOfUser("Driver"))
          } else if (response?.data?.user?.position == "") {
            dispatch(setTypeOfUser("Mechanic"))
          
        }
        // dispatch(setTypeOfUser(apiData.email))
        if (typeOfUser == "Driver") {
          navigate("/app")
        } else if(typeOfUser == "Mechanic"){
          navigate("/app/mech")
        } else{
          navigate("/login")
        }
        
      } catch (error) {
        console.log(error)
        const errMsg = error?.response?.data?.message
        toast.error(errMsg)
        if (!navigator.onLine) {
          alert("You are currently offline")
          dispatch(clearnotVerified())
        }
        if (errMsg == "Your email is not yet verified") {
          if (notVerified.length >= 2) {
            try {
              const responseAgain = await axios.post(`${url}/api/v1/resendEmail`, {email})
              console.log(responseAgain, "responseAgain")
              const responseData = responseAgain?.data?.message.charAt(0).toLowerCase()
              const responseData2 = responseAgain?.data?.message.slice(1)
              toast.info(`New ${responseData}${responseData2}`)
            } catch (error) {
              console.log(error)
              console.log(error?.response?.data?.error)
              toast.error(error?.response?.data?.error)
            }
          } else {
            dispatch(setnotVerified(errMsg))
          }
        }else{
          dispatch(clearnotVerified())
        }
        setloading(false)
      }
    }
  }
  return (
    <div className='Login__container'>
      <header className='authHeader'>
        <AuthHeader />
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
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className='login__input'>
              <label htmlFor="">Password</label>
              <div className='login__input__password'>
                <input required={true} type={!seePassword ? "password" : "text"}
                  placeholder='Enter your password'
                  onChange={(e) => setpassword(e.target.value)}
                />
                {!seePassword ? <IoEye onClick={() => setSeePassword(!seePassword)} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
              </div>
            </div>
            {/* <p> */}
            <Link to='/forgotPassword' className='login__forgot__password'>Forgot Password ?
            </Link>
            {/* </p> */}
            {
              loading ?
                <button type="submit"
                  disabled style={{ background: "#ccc5c5be" }} color="#2c64d4"
                  className='login__btn' ><BeatLoader size={20} /></button>
                :
                <button type="submit"
                  className='login__btn'>Login</button>
            }
            <div className="underbutton__text">
              <p>New in Carcare?  <Link to='/signup' className='signup__link'>  SignUp</Link></p>
            </div>
          </form>


        </div>

      </main>
    </div>
  )
}



export default Login