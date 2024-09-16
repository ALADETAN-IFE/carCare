import React, { useState } from 'react'
import './MechDoc.css'
import AuthHeader from '../../../AuthHeader/AuthHeader'
import ImageUploadButton from './Upload/Upload'
import { useNavigate } from 'react-router-dom';


const MechDoc = () => {
   
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        
        setIsAnimating(true);
    
        setTimeout(() => {
          navigate("/login"); 
        }, 300); // 300ms to match the animation duration
      };
  
    
  return (
    <div className='mechDoc'>
        <header>
            <AuthHeader/>
        </header>

        <div className="mechDoc__content">
            <div className='mechDoc__Text'>
                <h1>Documentation</h1>
                <p>We're legally required to ask you for some documents to sign you up 
                as a Mechanic. Documents scans and quality photos are accepted.</p>
            </div>
            <div className='doc__requirement'>
                <div className='requirement__details'>
                    <h5>Profile pictures<span>*</span></h5>
                    <p>Please provide a clear portrait picture of yourself. It should show your 
                    full face, front view, with eyes open on a white background. </p>

                    <div>
                    <ImageUploadButton/> 
                    </div>
                    <hr className='mechDoc__hr'/>
                </div>
                
                <div className='requirement__details'>
                    <h5>Identification<span>*</span></h5>
                    <p>Please upload a clear image of your government-issued ID (e.g., Driver’s 
                        License, National ID, Passport). This helps us confirm your identity." </p>

                    <div>
                    <ImageUploadButton/> 
                    </div>
                    <hr className='mechDoc__hr'/>
                </div>
               
                <div className='requirement__details'>
                    <h5>Certification<span>*</span></h5>
                    <p>Please provide any automotive certifications you have. This helps us 
                    match you with the right jobs. </p>

                    <div>
                    <ImageUploadButton/> 
                    </div>
                    <hr className='mechDoc__hr'/>
                </div>
                
                <div className='requirement__details'>
                    <h5>Insurance Documentation<span>*</span></h5>
                    <p>If you have liability insurance, please upload your insurance 
                    documentation. This is required to protect you and your clients. </p>

                    <div>
                    <ImageUploadButton/> 
                    </div>
                    <hr className='mechDoc__hr'/>
                </div>
                
                <div className='requirement__details'>
                    <h5>Profile pictures<span>*</span></h5>
                    <p>Please provide a clear portrait picture of yourself. It should show your 
                    full face, front view, with eyes open on a white background. </p>

                    <div>
                    <ImageUploadButton/> 
                    </div>
                    <hr className='mechDoc__hr'/>
                </div>
            </div>
            <div >
            <button className= {`mechInfo__btn ${isAnimating ? 'animate-btn' : ''}`}onClick={handleClick}> Submit</button>
            </div>

            

        </div>



    </div>
  )
}

export default MechDoc