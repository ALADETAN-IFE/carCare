import React, { useEffect, useState } from 'react'
import './VerifyEmail.css'
import AuthHeader from '../AuthHeader/AuthHeader'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import { clearnotVerified } from '../../Global/Redux-actions/carCare';
import { useDispatch } from 'react-redux';


const VerifyEmail = () => {
  const { token } = useParams()
  console.log(token)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)



  const handleSubmit = async () => {
    try {
      const url = import.meta.env.VITE_API_Url
      const response = await axios.patch(`${url}/api/v1/verifyEmail/${token}`)
      console.log(response)
      setLoading(true);
      if (response.status === 200) {
        setLoading(false);
        setError(null);
        // setTimeout(() => {
        //   navigate('/app');
        // }, 3000); // Adding a delay before redirecting
      } else if (response.status === 400 || response.status === 401) {
        setError('Invalid or expired token.');
      }
    } catch (error) {
      if (!navigator.onLine) {
        alert("You are currently offline")
        dispatch(clearnotVerified())
      }
      console.log(error)
      setError(`${error?.response?.data?.error}`);
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
  const handleNavigate = (e) => {
    e.preventDefault()
    navigate("/login")
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
                  <>
                    <h1 style={{ fontSize: "35px" }}>{error}</h1>
                    {
                      error == "User already verified" ?
                        <button className='resetPassword'
                          onClick={handleNavigate}
                          style={{ transitionDuration: '0ms' }}>
                          Proceed to Login</button>
                        :
                        <p>Didn't Receive the Email? Check your spam <br />
                          folder or <Link to='/signup' className='signup__link'>
                            Click here to resend</Link>
                        </p>
                    }
                  </>
                  :
                  // <h1>Verification was successful! Redirecting to login...</h1>
                  <div className="popup__content">
                    <div className="popup__content__top">
                      <h1>EMAIL VERIFIED</h1>
                      <p>We're excited to have you on board,  <br />
                        Click the button to verify your email and <br />
                        start enjoying effortless car care </p>
                    </div>
                    <div className="popup__content__bottom">
                      <button className='resetPassword'
                        onClick={handleNavigate}
                        style={{ transitionDuration: '0ms' }}>
                        Proceed to Login</button>
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

export default VerifyEmail


// const VerifyEmail = () => {
//   const navigate = useNavigate()

//   return (
//     <div className='VerifyEmail__container'>
//       <header className='authHeader'>
//         <AuthHeader />
//       </header>
//       <div className='VerifyEmail__content'>
//         <div className="popup__content">
//           <div className="popup__content__top">
//             <h1>VERIFY YOUR EMAIL</h1>
//             <p>We're excited to have you on board, Fave Joy! <br />
//               Click the button to verify your email and <br />
//               start enjoying effortless car care </p>
//           </div>
//           <div className="popup__content__bottom">
//             <button className='resetPassword' onClick={handleNavigate}
//               style={{ transitionDuration: '0ms' }}>Verify Email</button>
//             <div>
//               <p>Didn't Receive the Email? Check your spam <br />
//                 folder or <Link to='/signup' className='signup__link'>Click here to resend</Link>
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default VerifyEmail