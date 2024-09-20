import './ForgotPassword.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import AuthHeader from '../AuthHeader/AuthHeader';
import './ForgotPassword.css'
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearnotVerified, setnotVerified } from '../../Global/Redux-actions/carCare';

const ForgotPassword = () => {
  const [showPopUp, setShowPopUp] = useState(false)
  const [loading, setloading] = useState(false)
  const [email, setemail] = useState()
  const dispatch = useDispatch()

  const handlePopup = async () => {
    const url = "https://carcareconnectproject.onrender.com"
    if (!email) {
      toast.error("Email is required")
    } else {
      
      setloading(true)
      try {
        const response = await axios.post(`${url}/api/v1/forgotPassword`, email)
        console.log(response)
        dispatch(clearnotVerified())
        // dispatch(setUserDatas(response?.data?.user))
        // console.log(response?.data?.user?.position)
        setloading(false)
        setShowPopUp(!showPopUp);
  
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
              const responseAgain = await axios.post(`${url}/api/v1/resendEmail`, { email })
              console.log(responseAgain, "responseAgain")
              // const responseData = responseAgain?.data?.message.charAt(0).toLowerCase()
              // const responseData2 = responseAgain?.data?.message.slice(1)
              // toast.info(`New ${responseData}${responseData2}`)
            } catch (error) {
              console.log(error)
              console.log(error?.response?.data?.error)
              toast.error(error?.response?.data?.error)
            }
          } else {
            dispatch(setnotVerified(errMsg))
          }
        } else {
          dispatch(clearnotVerified())
        }
        setloading(false)
      }
    }
  };

  return (
    <div className='forgotPassword__container'>

      {showPopUp ? <Overlay handlePopup={handlePopup} /> : null}
      <header className='authHeader'>
        <AuthHeader />
      </header>
      <div className='forgotPassword__content__wrapper'>
        {/* <div className="forgotPassword__content"> */}
        <div className='forgotPassword__text'>
          <h1> FORGOT PASSWORD</h1>
          <p>Enter your email address. We'll send an <br /> email with instructions to reset your password</p>
        </div>
        <div className='forgot__input__wrapper' >
          <div className='forgotPassword__email'>
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder='Enter your email address'
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className='forgotPassword__btn'>
            {
              loading ? 
              <button type="submit" className='resetPassword' disabled >
                <BeatLoader size={20} />
              </button>
              :
              <button type="submit" className='resetPassword' onClick={handlePopup} >
                Request Password Reset</button>
            }
          </div>
          <div className='remPass'>
            <p>Remember your password? <Link to='/login' className='signup__link'>Login</Link></p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ForgotPassword