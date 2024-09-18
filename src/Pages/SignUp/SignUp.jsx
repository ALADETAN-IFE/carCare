import React, { useEffect } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import AuthHeader from '../AuthHeader/AuthHeader'
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import axios from "axios";

const SignUp = () => {
  const [fullName, setfullName] = useState("")
  const [email, setemail] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [password, setpassword] = useState("")
  const [seePassword, setSeePassword] = useState(false)
  const [confirmPassword, setconfirmPassword] = useState("")
  const [loading, setloading] = useState(false)

  const [passwordError, setPasswordError] = useState(true);
  const [passwordErrorlow, setPasswordErrorLow] = useState(false);
  const [passwordErrorUpper, setPasswordErrorUpper] = useState(false);
  const [passwordErrorNumber, setPasswordErrorNumber] = useState(false);
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState(false);
  const [passwordErrorLength, setPasswordErrorLength] = useState(false);

  const filterNumbers = (input) => {
    return input.replace(/[^0-9]/g, '');  // Remove all non-numeric characters
  };
  const isOnlyNumbers = (input) => {
    return /^[0-9]+$/.test(input);  // This regex ensures only digits are allowed
  };

  const handlePhoneNumber = (e) => {
    const num = e.target.value
    if (num.trim() === "") {
      toast.error("Phone number is required");
      // setEmailError(false);
    }
    else if (!isOnlyNumbers(num)) {
      toast.error("Must be a number")// Clear the phone number if invalid
    }
    const filteredNum = filterNumbers(num);
    // Set the phone number to the filtered input (only numbers)
    setphoneNumber(filteredNum);
  }

  // const validateGmail = (input) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(input);
  // };
  const validateGmail = (input) => {
    const gmailRegex = /^[^\s@]+@gmail\.com$/;
    return gmailRegex.test(input);
  };
  // console.log(email,"big")
  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setemail(newEmail);
    if (newEmail.trim() === "") {
      toast.error("Email is required");
      // setEmailError(false);
    }


  };

  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };

  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };

  const containsNumber = (input) => {
    // Check if the inputstring contains at last one number
    return /\d/.test(input);
  };

  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };
  const contains8characters = (input) => {
    // Check if the input string length is up to 8
    return /^(?=.{8,})/.test(input)
  }

  const handlePassWord = (e) => {
    const newData = e.target.value;
    setpassword(newData);
    // console.log(password)
    if (newData.trim() === "") {
      toast.error("Password is required");
      // setpasswordCheck(false);
    }
    // if (
    //   newData.length > 7
    //   && !passwordErrorlow
    //   && !passwordErrorUpper
    //   && !passwordErrorNumber
    //   && !passwordErrorSymbol
    // ) {
    //   // setPassWordCheck(false);
    //   // console.log("false", 2)
    //   setPasswordError(false);

    // } else {
      // setPasswordError(true);
      // setPassWordCheck(true);
      // console.log("true", 1)
      if (newData.length > 7) {
        setPasswordErrorLength(false);
        // setPasswordError(false);
      } else {
        setPasswordErrorLength(true);
        setPasswordError(true)
        // toast.error("Password must be up to 8 character")
      }

      if (containsLowercase(newData)) {
        setPasswordErrorLow(false);
        // setPasswordError(false);
      } else {
        setPasswordErrorLow(true);
        // setPasswordError(true);
        // toast.error("Password must contain lowercase character")

      }

      if (containsUpperrcase(newData)) {
        setPasswordErrorUpper(false);
        // setPasswordError(false);
      } else {
        setPasswordErrorUpper(true);
        // setPasswordError(true);
        // toast.error("Password must contain uppercase character")
      }

      if (containsNumber(newData)) {
        setPasswordErrorNumber(false);
        // setPasswordError(false);
      } else {
        setPasswordErrorNumber(true);
        // setPasswordError(true);
        // toast.error("Password must contain at least one number")
      }

      if (containsSymbol(newData)) {
        setPasswordErrorSymbol(false);
        // setPasswordError(false);
      } else {
        setPasswordErrorSymbol(true);
        // setPasswordError(true);
        // toast.error("Password must contain at least one symbol")

      }
    // }
    // console.log(passWordCheck, "passWordCheck")
    // console.log(passwordErrorLength, "passwordErrorLength")
    // console.log(passwordErrorNumber, "passwordErrorNumber")
    // console.log(passwordErrorSymbol, "passwordErrorSymbol")
    // console.log(passwordErrorUpper, "passwordErrorUpper")
    // console.log(passwordErrorlow, "passwordErrorlow")
  };


  const handleConfirmPassWord = (e) => {
    const newData = e.target.value;
    setconfirmPassword(newData);
    // setPassWordCheck(false);
    if (newData.trim() == "") {
      toast.error("Both passwords are required");
    }
    // else if (newData !== password) {
    //   // toast.error("Passwords are not the same")
      setPasswordError(true);
    // }
    //  else{
    //   setCPassWordCheck(false);
    // }

  }

  // useEffect(() => {

  // }, [password])
  

  const navigate = useNavigate()
  const handlesignUp = async (e) => {
    e.preventDefault()
    const url = "https://carcareconnectproject.onrender.com"
    // navigate("/verifyEmail")
    console.log(passwordError, "apiData")
    console.log(passwordErrorlow, "passwordErrorlow")
    console.log(passwordErrorUpper, "passwordErrorUpper")
    console.log(passwordErrorNumber, "passwordErrorNumber")
    console.log(passwordErrorLength, "passwordErrorLength")
    console.log(passwordErrorSymbol, "passwordErrorSymbol")

    if (!fullName ||
      !email ||
      !phoneNumber ||
      !password ||
      password !== confirmPassword 
       || passwordErrorlow ||
      passwordErrorUpper || passwordErrorNumber ||
      passwordErrorLength || passwordErrorSymbol
    ) {
      // const apiData = { fullName, email, password, phoneNumber }
      // console.log(apiData, "apiData")
      if (fullName.trim() === "") {
        toast.error("Full name is required");
      }
      else if (email.trim() === "") {
        toast.error("Email is required");
      }
      else if (!validateGmail(email)) {
        // setEmailError(true);
        toast.error("Inavlid G-mail format");
      }
      else if (phoneNumber.trim() === "") {
        toast.error("Phone number is required");
      }
      // Ensure the phone number starts with '0'
      else if (!phoneNumber.startsWith('0')) {
        toast.error("Phone number must start with 0");
      }
      else if (phoneNumber.length < 11) {
        toast.error("Phone number not complete");
      }
      else if (password.trim() === "") {
        toast.error("Password is required");
        setPasswordError(true)
      }
      else if (confirmPassword.trim() === "") {
        toast.error("Confirm password is required");
      }
      else if (password !== confirmPassword) {
        toast.error("Passwords are not the same");
      }
      else 
      // if (passwordError) {
        if (passwordErrorlow) {
          toast.error("Password must contain lowercase character")
        }
        else if (passwordErrorUpper) {
          toast.error("Password must contain uppercase character")

        }
        else if (passwordErrorNumber) {
          toast.error("Password must contain at least one number")
        }
        else if (passwordErrorSymbol) {
          toast.error("Password must contain at least one symbol")
        }
        else if (passwordErrorLength) {
          toast.error("Password must be up to 8 character")
        }
      // }


    } else {
      const apiData = { fullName, email, password, phoneNumber }
      // console.log(apiData)
      setloading(true)
      try {
        const response = await axios.post(`${url}/api/v1/sign-up`, apiData)
        console.log(response)
        setloading(false)
        toast.success(response?.data?.message)
      } catch (error) {
        console.log(error)
        setloading(false)
        toast.error(error?.response?.data?.message)
      }
    }
    // {
    //   "fullName": "John Doe",
    //   "email": "john.doe@example.com",
    //   "password": "yourpassword",
    //   "phoneNumber": "+1234567890"
    // }

  }
  return (
    // <div>
    <div className='signUp__container'>
      <header className='authHeader'>
        <AuthHeader />
      </header>
      <div className='signUp__content'>
        <div className='mechanicLink'>
          <p> <Link to='/mechSignUp'>Sign up as a Mechanic</Link></p>
        </div>
        <div className='signUp__details'>
          <div className='signUp__details__text'>
            <h1>SIGN UP</h1>
            <p>Start your journey with CarCare to access top  mechanics and keep your car running smoothly.</p>
          </div>

          <form onSubmit={handlesignUp} className='login__form'>
            <div className='signUp__input'>
              <label htmlFor="">Full Name</label>
              <input required={true} type="text" placeholder='John Doe'
                onChange={(e) => setfullName(e.target.value)}
              />
            </div>
            <div className='signUp__input'>
              <label htmlFor="">Email Address</label>
              <input required={true} type='text'
                onChange={handleEmail}
                placeholder='Enter your email address' />
            </div>

            <div className='signUp__input'>
              <label htmlFor="">Phone Number</label>
              <input required={true}
                //  type="number"
                type="tel" id="phone" name="phone"
                // pattern="[0-9]{11}" 
                // pattern="/^[0-9]+$/" 
                pattern="/\d/"
                inputMode="numeric"
                value={phoneNumber}
                min="0"
                maxLength="11"
                onChange={handlePhoneNumber}
                placeholder='090-xxxx-xxxx' />
            </div>

            <div className='signUp__input'>
              <label htmlFor="">Password</label>
              <div className='signUp__input__password'>
                <input required={true} type={!seePassword ? "password" : "text"}
                  placeholder='Enter your password'
                  onChange={handlePassWord}
                />
                {
                  !seePassword ? <IoEye onClick={() => setSeePassword(!seePassword)} />
                    : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />
                }
              </div>
            </div>

            <div className='signUp__input'>
              <label htmlFor="">Confirm Password</label>
              <div className='signUp__input__password'>
                <input required={true} type={!seePassword ? "password" : "text"}
                  onChange={handleConfirmPassWord}
                // placeholder='Enter your password here'
                />
                {!seePassword ? <IoEye onClick={() => setSeePassword(!seePassword)} /> : <IoEyeOff onClick={() => setSeePassword(!seePassword)} />}
              </div>
            </div>
            {
              loading ?
                <button type="submit"
                  disabled style={{ background: "#ccc5c5be !important" }} color="#2c64d4"
                  className='signUp__btn' ><BeatLoader size={20} /></button>
                :
                <button type="submit"
                  className='signUp__btn' onClick={handlesignUp}>Sign Up</button>
            }

          </form>
          <div className="signUp__text">
            <p>Already on Carcare?  <Link to='/login' className='signup__link'>Login</Link></p>
            <p>By signing up, you agree  to our <Link className='signup__link'>Terms of use</Link> & <Link className='signup__link'>Privacy and Policy</Link> </p>
          </div>

        </div>


      </div>
    </div>
    // </div>
  )
}


export default SignUp