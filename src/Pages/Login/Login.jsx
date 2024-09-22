import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import { useDispatch, useSelector } from 'react-redux';
import { clearnotVerified, logIn, setnotVerified, setTypeOfUser, setUserDatas, setUserDataWithToken } from '../../Global/Redux-actions/carCare';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import axios from "axios";
import Swal from 'sweetalert2';


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
    const url = import.meta.env.VITE_API_Url

    if (!email || !password) {
      toast.error("fill both fields")
    } else {
      const apiData = { email, password }
      // console.log(apiData)
      setloading(true)
      try {
        const response = await axios.post(`${url}/api/v1/signin`, apiData)
        console.log(response)
        // dispatch(clearnotVerified())
        dispatch(setUserDataWithToken(response?.data))

        dispatch(setUserDatas(response?.data?.data))
        // console.log(response?.data?.data?.position)
        setloading(false)
     
        dispatch(logIn())
        if (response?.data?.data?.position == "customer") {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: response?.data?.message,
            timer: 3000,
            // showConfirmButton: false,
            confirmButtonText: 'OK'
          });
          dispatch(setTypeOfUser("Driver"))
          setTimeout(() => {
            navigate("/app")
          }, 3000);
        } else if (response?.data?.data?.position == "mechanic") {
          if (response?.data?.data.isProfileComplete == false) {
            toast.info("Please complete your details to continue")
            Swal.fire({
              icon: 'info',
              title: 'Pending Approval',
              text: 'Please complete your details to continue.',
              confirmButtonText: 'OK',
              timer: 2000,
            }).then((result) => {
              if (result.isConfirmed) {
                // Navigate to the page for completing details
                navigate("/mechInfo");
              }
            });
            setTimeout(() => {
              navigate("/mechInfo")
            }, 2000);
          } else {
            dispatch(setTypeOfUser("Mechanic"))
            // Success alert with navigation after 3 seconds
            Swal.fire({
              icon: 'success',
              title: 'Welcome!',
              text: response?.data?.message,
              timer: 3000,
              showConfirmButton: false,
            }).then(() => {
              // Navigate to the mechanic dashboard
              navigate("/app/mech");
            });
            setTimeout(() => {
              navigate("/app/mech")
            }, 3000);
          }
        }

      } catch (error) {
        toast.error(error?.response?.data?.message)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error?.response?.data?.message,
        });
        setloading(false)
      }
    }
  }
  // console.log(typeOfUser, "typeOfUser" )
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