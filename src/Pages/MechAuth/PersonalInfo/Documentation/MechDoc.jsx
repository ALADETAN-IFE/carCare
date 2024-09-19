import React, { useState } from 'react'
import './MechDoc.css'
import AuthHeader from '../../../AuthHeader/AuthHeader'
import ImageUploadButton from './Upload/Upload'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setmechCompleteDetails } from '../../../../Global/Redux-actions/carCare';


const MechDoc = () => {

    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const [images, setimages] = useState({})
    const [selectedImageName, setSelectedImageName] = useState({});

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

    const handleClick = () => {
        console.log(Object.create(images))
        setIsAnimating(true);
        // dispatch(setmechCompleteDetails())
        // setTimeout(() => {
        //     navigate("/login");
        // }, 300); // 300ms to match the animation duration
    };
    console.log(images, "images")
    console.log(selectedImageName, "selectedImageName")

    const requirements = [
        {
            h5: "Profile pictures",
            p: `Please provide a clear portrait picture of yourself. It should show your 
                    full face, front view, with eyes open on a white background. `,
            uploadKey: "profilePicture"
        },
        {
            h5: "Identification",
            p: `Please upload a clear image of your government-issued ID (e.g., Driver's 
                        License, National ID, Passport). This helps us confirm your identity."`,
            uploadKey: "identification"
                    },
        {
            h5: "Certification",
            p: `Please provide any automotive certifications you have. This helps us
                            match you with the right jobs.`,
            uploadKey: "certification"
                        },
        {
            h5: "Insurance Documentation",
            p: `If you have liability insurance, please upload your insurance
                            documentation. This is required to protect you and your clients.`,
            uploadKey: "insurance"
                        },
    ]


    return (
        <div className='mechDoc'>
            <header>
                <AuthHeader />
            </header>

            <div className="mechDoc__content">
                <div className='mechDoc__Text'>
                    <h1>Documentation</h1>
                    <p>We're legally required to ask you for some documents to sign you up
                        as a Mechanic. Documents scans and quality photos are accepted.</p>
                </div>
                <div className='doc__requirement'>
                    {
                        requirements?.map((e, i) => (
                            <div className='requirement__details' key={i}>
                                <h5>{e?.h5}<span>*</span></h5>
                                <p>{e?.p}</p>
                                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                    <ImageUploadButton
                                        setimages={setimages}
                                        images={images}
                                        setSelectedImageName={setSelectedImageName}
                                        selectedImageName={selectedImageName}
                                        index={e?.uploadKey}
                                        key={i}
                                    />
                                    {selectedImageName[e?.uploadKey]}
                                </div>
                                <hr className='mechDoc__hr' />
                            </div>
                        ))
                    }

                    {/* <div className='requirement__details'>
                        <h5>Identification<span>*</span></h5>
                        <p>Please upload a clear image of your government-issued ID (e.g., Driver’s
                            License, National ID, Passport). This helps us confirm your identity." </p>


                        <ImageUploadButton />
                        <hr className='mechDoc__hr' />
                    </div> */}

                    {/* <div className='requirement__details'>
                        <h5>Certification<span>*</span></h5>
                        <p>Please provide any automotive certifications you have. This helps us
                            match you with the right jobs. </p>


                        <ImageUploadButton />
                        <hr className='mechDoc__hr' />
                    </div> */}

                    {/* <div className='requirement__details'>
                        <h5>Insurance Documentation<span>*</span></h5>
                        <p>If you have liability insurance, please upload your insurance
                            documentation. This is required to protect you and your clients. </p>


                        <ImageUploadButton />
                        <hr className='mechDoc__hr' />
                    </div> */}

                    {/* <div className='requirement__details'>
                        <h5>Profile pictures<span>*</span></h5>
                        <p>Please provide a clear portrait picture of yourself. It should show your
                            full face, front view, with eyes open on a white background. </p>
                        <ImageUploadButton />
                        <hr className='mechDoc__hr' />
                    </div> */}
                </div>
                <div >
                    <button className={`mechInfo__btn ${isAnimating ? 'animate-btn' : ''}`} onClick={handleClick}> Submit</button>
                </div>



            </div>



        </div>
    )
}

export default MechDoc