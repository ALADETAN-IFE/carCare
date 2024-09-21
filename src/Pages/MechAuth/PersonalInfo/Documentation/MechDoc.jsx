import React, { useEffect, useState } from 'react'
import './MechDoc.css'
import AuthHeader from '../../../AuthHeader/AuthHeader'
import ImageUploadButton from './Upload/Upload'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setmechCompleteDetails } from '../../../../Global/Redux-actions/carCare';
import { toast } from 'react-toastify';
import axios from 'axios';


const MechDoc = () => {

    const [isAnimating, setIsAnimating] = useState(false);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const [images, setimages] = useState({})
    const [selectedImageName, setSelectedImageName] = useState({});

    const dispatch = useDispatch()
    const {mechCompleteDetails, UserDataWithToken} = useSelector((state) => state?.carCare)
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

    useEffect(()=> {
        setmechCompleteDetailsState((prev) => ({
            ...prev,
            ...images
        }))

        dispatch(setmechCompleteDetails(mechCompleteDetailsState))
    })

    const handleClick = async () => {
        // console.log(Object.create(images), "obj")
        console.log(mechCompleteDetailsState, "mechCompleteDetails")
            const url = import.meta.env.VITE_API_Url
        console.log(mechCompleteDetails)
        setIsAnimating(true);
        if (!mechCompleteDetails.businessName ||
            !mechCompleteDetails.businessRegNumber || 
            !mechCompleteDetails.businessAddress ||
            !mechCompleteDetails.areaOfSpecialization ||
            !mechCompleteDetails.yearsOfExperience ||
            !mechCompleteDetails.profilePicture ||
            !mechCompleteDetails.identification ||
            !mechCompleteDetails.certification 
        ) {
            if (!mechCompleteDetails.businessName) {
                toast.error("Business name is required")
            }
            else if (!mechCompleteDetails.businessRegNumber) {
                toast.error("Business registration number is required")
            }
            else if (!mechCompleteDetails.businessAddress) {
                toast.error("Business address is required")
            }
            else if (!mechCompleteDetails.areaOfSpecialization) {
                toast.error("Area of specialization is required")
            }
            else if (!mechCompleteDetails.yearsOfExperience) {
                toast.error("Years of experience is required")
            }
            else if (!mechCompleteDetails.profilePicture) {
                toast.error("Profile picture is required")
            }
            else if (!mechCompleteDetails.identification) {
                toast.error("Identification is required")
            }
            else if (!mechCompleteDetails.certification) {
                toast.error("Certification is required")
            }
        } else {
            console.log(mechCompleteDetails, "hello")       
            try {
                const token = UserDataWithToken.token
                const response = await axios.post(`${url}/api/v1/mech/completeProfile`, mechCompleteDetails, {
                    headers: {
                        'Content-Type': 'multipart/form-data', 
                        Authorization: `Bearer ${token}`,  // Add token for authentication
                    },
                });
                console.log(response)
                navigate("/login")
                setloading(false)
                toast.success(response?.data?.message)
              } catch (error) {
                console.log(error)
                if (error?.response?.data.errors) {
                    toast.error(error?.response?.data.errors[0])
                    toast.error(error?.response?.data.errors[1])
                }
                if (!navigator.onLine) {
                  alert("You are currently offline")
                  dispatch(clearnotVerified())
                }
                setloading(false)
                toast.error(error?.response?.data?.message)
              }
          
              
            // 
        }
        // dispatch(setmechCompleteDetails())
        // setTimeout(() => {
        //     navigate("/login");
        // }, 300); // 300ms to match the animation duration
    };
    // console.log(images, "images")
    // console.log(selectedImageName, "selectedImageName")

    const requirements = [
        {
            h5: "Profile pictures",
            p: `Please provide a clear portrait picture of yourself. It should show your 
                    full face, front view, with eyes open on a white background. `,
            hash: "*",
            uploadKey: "profilePicture"
        },
        {
            h5: "Identification",
            p: `Please upload a clear image of your government-issued ID (e.g., Driver's 
                        License, National ID, Passport). This helps us confirm your identity."`,
            hash: "*",
            uploadKey: "identification"
        },
        {
            h5: "Certification",
            p: `Please provide any automotive certifications you have. This helps us
                            match you with the right jobs.`,
            hash: "*",
            uploadKey: "certification"
        },
        {
            h5: "Insurance Documentation",
            p: `If you have liability insurance, please upload your insurance
                            documentation. This is required to protect you and your clients.`,
            hash: null,
            uploadKey: "insurance"
        },
    ]


    return (
        <div className='mechDoc'>
            <header className='authHeader'>
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
                                <h5>{e?.h5}<span>{e?.hash}</span></h5>
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
                <div style={{
                    width: "100%", display: "flex", gap: "10px",
                    alignItems: "center", justifyContent: "space-around"
                }}>
                       {
              loading ?
                <button type="submit"
                  disabled style={{ background: "#ccc5c5be !important" }} color="#2c64d4"
                  className={`mechInfo__btn ${isAnimating ? 'animate-btn' : ''}`}   ><BeatLoader size={20} /></button>
                :
                <>
                
                <button className={`mechInfo__btn ${isAnimating ? 'animate-btn' : ''}`} onClick={() => navigate("/mechInfo")}> Go Back</button>
                <button className={`mechInfo__btn ${isAnimating ? 'animate-btn' : ''}`} onClick={handleClick}> Submit</button>
                </>
            }
                </div>



            </div>



        </div>
    )
}

export default MechDoc