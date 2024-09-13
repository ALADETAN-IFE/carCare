import React from 'react'
import './MechInfo.css'
import AuthHeader from '../../AuthHeader/AuthHeader'

const MechInfo = () => {
  return (
    <div className='mechInfo__container'> 
    <header>
        <AuthHeader/>
    </header>
    <main className='mechInfo__content'>
        <div className='mechInfoText'>
            <h1>Complete Your Profile for Verification</h1>
            <p>To ensure the safety and trust of our platform, we need to verify your
            information. Please complete the following details.</p>
        </div>
        <div className='mech__personalInfo'>
            <h1>Provide Business Details</h1>
            <div className='mechInput'>
                <label htmlFor="">
                 Business Name
                </label>
                <input type="text" name="" id="" />
            </div>
            <div className='mechInput'>
                <label htmlFor="">
                Business Registration Number*
                </label>
                <input type="text" name="" id="" />
            </div>
            <div className='mechInput'> 
                <label htmlFor="">
                Business Address
                </label>
                <input type="text" name="" id="" />
            </div>
            <div className='mechInput'>
                <label htmlFor="">
                Area of Specialization
                </label>
                <input type="text" name="" id="" />
            </div>
            <div className='mechInput'>
                <label htmlFor="">
                Years of Experiences
                </label>
                <input type="text" name="" id="" />
            </div>
            <div>
            <button></button>
            </div>
        </div>

    </main>
        
    </div>
  )
}

export default MechInfo