import React from 'react'
import './MechInfo.css'
import AuthHeader from '../../AuthHeader/AuthHeader'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MechInfo = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const mechCompleteDetails = useSelector((state) => state?.carCare?.mechCompleteDetails)
    const [mechCompleteDetailsState, setmechCompleteDetailsState] = useState(mechCompleteDetails)

    // {
    //     "businessName": "string",
    //     "businessRegNumber": "string"
    //     "businessAddress": "string",
    //     "areaOfSpecialization": "string",
    //     "yearsOfExperience": "number",
    //      profilePicture: Required.
    //      identification: Required.
    //      certification: Required.
    //      insurance: Optional.
    //   }

    const setData = (e) => {
        setmechCompleteDetailsState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value 
        }))
    }
    console.log(mechCompleteDetailsState)

    const handleClick = () => {

        setIsAnimating(true);
        setTimeout(() => {
            navigate("/mechDoc"); // Replace with your actual route
        }, 300); // 300ms to match the animation duration
    };

    return (
        <div className='mechInfo__container'>
            <header>
                <AuthHeader />
            </header>
            <main className='mechInfo__content'>
                <div className='mechInfoText'>
                    <h1>Complete Your Profile for Verification</h1>
                    <p>To ensure the safety and trust of our platform, we need to verify your
                        information. Please complete the following details.</p>
                </div>
                <div className='mech__personalInfo'>
                    <div className='mechForm__title'>
                        <h1>Provide Business Details</h1>
                    </div>
                    <div className='mechInput'>
                        <label htmlFor="">
                            Business Name
                        </label>
                        <input type="text" className='infoInput'
                           value={(e)=> mechCompleteDetailsState?.e.target.name}
                           name='businessName'
                            onChange={setData}
                        />
                    </div>
                    <div className='mechInput'>
                        <label htmlFor="">
                            Business Registration Number*
                        </label>
                        <input type="text" className='infoInput' 
                       value={(e)=> mechCompleteDetailsState?.e.target.name}
                       name="businessRegNumber"
                        onChange={setData}
                        />
                    </div>
                    <div className='mechInput'>
                        <label htmlFor="">
                            Business Address
                        </label>
                        <input type="text" className='infoInput' 
                       value={(e)=> mechCompleteDetailsState?.e.target.name}
                       name='businessAddress'
                        onChange={setData}
                        />
                    </div>
                    <div className='mechInput'>
                        <label htmlFor="">
                            Area of Specialization
                        </label>
                        <input type="text" className='infoInput'
                       value={(e)=> mechCompleteDetailsState?.e.target.name}
                       name='areaOfSpecialization'
                        onChange={setData}
                        />
                    </div>
                    <div className='mechInput'>
                        <label htmlFor="">
                            Years of Experiences
                        </label>
                        <input type="text" className='infoInput'
                       value={(e)=> mechCompleteDetailsState?.e.target.name}
                       name='yearsOfExperience'
                        onChange={setData}
                        />
                    </div>

                </div>
                <div className='mechInfoBtn__container'>
                    <button className={`mechInfo__btn ${isAnimating ? 'animate-btn' : ''}`} onClick={handleClick}> Next</button>
                </div>

            </main>

        </div>
    )
}

export default MechInfo