import Footer from "../../../../../../Components/Footer/Footer"
import LayoutHeader from "../../../../../../Layout/LayoutHeader/LayoutHeader"
import "./mechanicDetails.css"
import mechDatasJSON from "../mechanicsData.json"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import bigImage from "./bigImage.png"
import { IoStar } from "react-icons/io5"
import { IoIosStarHalf } from "react-icons/io"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { MoonLoader } from "react-spinners"
import { setmechTobeBooked, setuserBookingForm } from "../../../../../../Global/Redux-actions/carCare"

const MechanicDetails = () => {
    const { mechId } = useParams()
    const [mechDetails, setmechDetails] = useState({})
    const [loading, setloading] = useState(false)
    const [loading2, setloading2] = useState(false)
    const { UserDataWithToken, userBookingForm, UserDatas } = useSelector((state) => state?.carCare)
    const [bookingInputsObject, setbookingInputsObject] = useState(userBookingForm)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // useEffect(() => {
    //     const theMech = mechDatasJSON.filter((e) => e?._id == mechId)
    //     const theMechDect = theMech.map(e => ({ ...e, image: bigImage }))
    //     setmechDetails(theMechDect[0])
    // }, [])

    const getMech = async () => {
        const url = import.meta.env.VITE_API_Url
        // console.log(UserDataWithToken.token, "UserDataWithToken")
        const token = UserDataWithToken.token
        setloading(true)
        try {
            const response = await axios.get(`${url}/api/v1/mechanic/one/approved/${mechId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Add token for authentication
                    },
                })
            console.log(response)
            console.log(response?.data?.data)
            console.log(response?.data?.message)
            setmechDetails(response?.data?.data)
            setloading(false)
        } catch (error) {
            console.log(error)
            // const noApprovedMech = error?.response?.data?.message
            console.log(error?.response?.data?.message)
            setloading(false)
            // if (noApprovedMech == "No approved mechanics") {
            //     toast.info("No approved mechanics yet")
            //     setmechDatas([])
            // } 

        }
    }
    useEffect(() => {
        getMech()
    }, [])
    const addMech = () => {
        setloading2(true)
        dispatch(setmechTobeBooked(mechDetails))
        setbookingInputsObject({ ...bookingInputsObject, mechName: mechDetails?.fullName })
        console.log(bookingInputsObject)
        setTimeout(() => {
            setloading2(false)
            navigate(`/app/${UserDatas?._id}/${mechDetails?._id}`)
        }, 2000);
    }
    useEffect(() => {
        dispatch(setuserBookingForm(bookingInputsObject))
    }, [bookingInputsObject])

    // console.log(mechDetails)

    const experienceCalc = (years) => {
        console.log(years)
        if (years > 10 && years < 20) {
            return ` 10 + years`
        }
        if (years > 20 && years < 30) {
            return ` 20 + years`
        }
        if (years > 30) {
            return ` 20 + years`
        }
        if (years < 2) {
            return ` ${years} year`
        }
        else {
            return ` ${years} years`
        }
    }

    const ratingStars = (rating) => {
        const fullStars = Math.floor(rating);
        const decimal = rating - fullStars;

        return (
            <div className="rating-stars">
                {/* {[...Array(fullStars)].map((_, i) => (
                    <IoStar key={`full-${i}`} className="full-star" />
                ))} */}
                {
                    // <IoStar className="full-star" />
                    fullStars <= 1 ?
                        <IoStar key={`empty`} className="empty-star" />
                        :
                        <>
                            {decimal >= 0.75 ? (
                                <IoStar className="full-star" />
                            ) : decimal <= 4 ? (
                                <IoIosStarHalf className="half-star" />
                            ) : null}
                        </>

                }
                {/* {[...Array(5 - fullStars - (decimal >= 0.25 ? 1 : 0))].map((_, i) => (
                    <IoStar key={`empty-${i}`} className="empty-star" />
                ))} */}
            </div>
        );
    }


    return (
        <div className="mechanicDetailsBody">
            <LayoutHeader />
            <div className="AllMechanicsBody">
                <div className="mechanicDetailsBodyWrapper">
                    {
                        loading ?
                            <div className="mechanicDetailsLeft">
                                <MoonLoader />
                            </div>
                            :
                            <div className="mechanicDetailsLeft"
                                style={{ background: !mechDetails?.profilePicture?.pictureUrl ? `black` : `url(${mechDetails?.profilePicture?.pictureUrl})` }}>
                                {/* <img src={mechDetails?.profilePicture?.pictureUrl} alt="" /> */}
                            </div>
                    }
                    <div className="mechanicDetailsRight">
                        {
                            loading ? <p style={{ alignSelf: "center", justifySelf: "center" }}>Loading...</p>
                                :
                                <>
                                    <div className="mechanicDetailsRight_Top">
                                        <p className="mechDetailsRating">
                                            {/* {mechDetails?.rating} */}
                                            0K
                                            {/* {ratingStars(mechDetails?.rating)} */}
                                            <span>(0 reviews)</span>
                                        </p>
                                        <div className="mechanicDetailsRight_Top_Top">
                                            <div className="mechanicDetailsRight_Top_Top_Details1">
                                                <h3>{mechDetails?.fullName}</h3>
                                                <h4>  Specializations:
                                                    <span>
                                                        {/* {mechDetails?.specialization?.join(", ")} */}
                                                        ASE Certified, Master Technician.
                                                    </span>.
                                                </h4>
                                                <p>
                                                    Experience:
                                                    <span>
                                                        {experienceCalc(mechDetails?.yearsOfExperience)}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="mechanicDetailsRight_Top_Top_Details2">
                                                {mechDetails?.description}
                                            </div>
                                            <div className="mechanicDetailsRight_Top_Top_Details3">
                                                <h3>Certification</h3>
                                                <div className="mechanicDetailsCerts">
                                                    <div className="mechanicDetailsCert" >
                                                        <div className="picksCircle"></div>
                                                        <p> ASE Certified, Master Technician.</p>
                                                    </div>
                                                    <div className="mechanicDetailsCert" >
                                                        <div className="picksCircle"></div>
                                                        <p> Certified in Hybrid Vehicle Repair</p>
                                                    </div>
                                                    <div className="mechanicDetailsCert" >
                                                        <div className="picksCircle"></div>
                                                        <p> Specialized in European Car Models</p>
                                                    </div>
                                                    {/* {
                                            mechDetails?.certification?.map((e, i) => (
                                                <div className="mechanicDetailsCert" key={i}>
                                                    <div className="picksCircle"></div>
                                                    <p>{e}</p>
                                                </div>

                                            ))
                                        } */}
                                                </div>
                                            </div>
                                            <div className="mechanicDetailsRight_Top_Top_Details4">
                                                <span>
                                                    Location:
                                                </span>
                                                <span>  Base in Ikeja lagos. Service {mechDetails?.businessAddress}.</span>

                                            </div>
                                            <div className="mechanicDetailsRight_Top_Top_Details4">
                                                <span>
                                                    Availability:
                                                </span>
                                                <span> Monday - Saturday, 9 AM - 5 PM</span>

                                            </div>
                                        </div>
                                    </div>
                                    {
                                        loading2 ?
                                            <button className="mechanicDetailsRight_Btn"
                                                disabled style={{ background: "#ccc5c5be" }} color="#2c64d4"
                                                >Booking...</button>
                                            // <button className="mechanicDetailsRight_Btn"
                                            //     disabled style={{ background: "#ccc5c5be" }} color="#2c64d4"
                                            //     ><BeatLoader size={20} /></button>
                                            :
                                            <button className="mechanicDetailsRight_Btn"
                                             onClick={addMech}>Book Now</button>
                                    }
                                   
                                </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MechanicDetails