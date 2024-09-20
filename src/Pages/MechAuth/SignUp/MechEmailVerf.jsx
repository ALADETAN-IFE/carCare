import React, { useEffect, useState } from 'react'
import '../../VerifyEmail/VerifyEmail.css'

import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthHeader from '../../AuthHeader/AuthHeader';
import { clearnotVerified } from '../../../Global/Redux-actions/carCare';
import { useDispatch } from 'react-redux';


const MechEmailVerf = () => {
  const { token } = useParams()
  console.log(token)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)



  const handleSubmit = async () => {
    try {
      const url = "https://carcareconnectproject.onrender.com"
      const response = await axios.patch(`${url}/api/v1/mech/verifyEmail/${token}`)
      console.log(response)
      setLoading(true);
      if (response.status === 200) {
        setLoading(false);
        setError(null);
        // setTimeout(() => {
        //   navigate('/login');
        // }, 3000); // Adding a delay before redirecting
      } else if (response.status === 400 || response.status === 401) {
        setError('Invalid or expired token.');
      }
    } catch (error) {
      console.log(error)
      if (!navigator.onLine) {
        alert("You are currently offline")
        dispatch(clearnotVerified())
      }
      setError('Verification Failed. Please check your network or try again later.');
      setLoading(false); // Ensure loading is set to false if error occurs
    }
  }
  useEffect(() => {
    handleSubmit()
  }, [])
  const stylesLoading = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  }
  return (

    <div className='VerifyEmail__container'>
      <header className='authHeader'>
        <AuthHeader />
      </header>
      <div className="VerifyEmail__containerWrapper">
        <div className='VerifyEmail__content'>
          {
            loading ?
              <div style={stylesLoading}>
                <h1>Please Wait...</h1>
                <BeatLoader size={20} />
              </div>
              : !token ?
                <h1>{"error"}</h1>
                : error ?
                  <h1>{error}</h1>
                  :
                  // <h1>Verification was successful! Redirecting to login...</h1>
                  <div className="popup__content">
                    <div className="popup__content__top">
                      <h1>WELCOME TO CARCARE</h1>
                      <p>We’re excited to have you on board! To finish setting <br />
                        up your account, simply click the button below to <br />
                        unlock all the benefits of your new account</p>
                    </div>
                    <div className="popup__content__bottom">
                      <button className='resetPassword'
                        // onClick={handleNavigate}
                        style={{ transitionDuration: '0ms' }}>continue</button>
                      <div>
                        <p>Didn't Receive the Email? Check your spam <br />
                          folder or <Link to='/signup' className='signup__link'>
                            Click here to resend</Link>
                        </p>
                      </div>
                    </div>

                  </div>

          }

        </div>
      </div>

    </div>
  )
}
{/* <div className='VerifyEmail__content'>
  <div className="popup__content">
    <h1>WELCOME TO CARCARE</h1>
    <p>We’re excited to have you on board! To finish setting <br />
      up your account, simply click the verify your email to <br />
      unlock all the benefits of your new account</p>
    <button className='resetPassword' onClick={handleNavigate}
      style={{ transitionDuration: '0ms' }}>Verify Email</button>
    <div>
      <p>Didn’t Receive the Email? Check your spam <br />
        folder or <Link to='/signup' className='signup__link'>Click here to resend</Link>
      </p>
    </div>

  </div>
</div> */}

export default MechEmailVerf