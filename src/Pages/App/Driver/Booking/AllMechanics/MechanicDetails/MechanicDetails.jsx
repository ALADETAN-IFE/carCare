import Footer from "../../../../../../Components/Footer/Footer"
import LayoutHeader from "../../../../../../Layout/LayoutHeader/LayoutHeader"
import "./mechanicDetails.css"
import mechDatasJSON from "../mechanicsData.json"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import bigImage from "./bigImage.png"
import { IoStar } from "react-icons/io5"
import { IoIosStarHalf } from "react-icons/io"

const MechanicDetails = () => {
    const { mechId } = useParams()
    const [mechDetails, setmechDetails] = useState({})

    useEffect(() => {
        const theMech = mechDatasJSON.filter((e) => e?._id == mechId)
        const theMechDect = theMech.map(e => ({ ...e, image: bigImage }))
        setmechDetails(theMechDect[0])
    }, [])

    console.log(mechDetails)

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
                    <div className="mechanicDetailsLeft">
                        <img src={mechDetails?.image} alt="" />
                    </div>
                    <div className="mechanicDetailsRight">
                        <div className="mechanicDetailsRight_Top">
                            <p className="mechDetailsRating">
                                {mechDetails?.rating}
                                K
                                {ratingStars(mechDetails?.rating)}
                                <span>(57 reviews)</span>
                            </p>
                            <div className="mechanicDetailsRight_Top_Top">
                                <div className="mechanicDetailsRight_Top_Top_Details1">
                                    <h3>{mechDetails?.name}</h3>
                                    <h4>  Specializations:
                                        <span> {mechDetails?.specialization?.join(", ")}</span>.
                                    </h4>
                                    <p>
                                        Experience:
                                        <span>
                                            {experienceCalc(mechDetails?.experience)}
                                        </span>
                                    </p>
                                </div>
                                <div className="mechanicDetailsRight_Top_Top_Details2">
                                    {mechDetails?.description}
                                </div>
                                <div className="mechanicDetailsRight_Top_Top_Details3">
                                    <h3>Certification</h3>
                                    <div className="mechanicDetailsCerts">
                                        {
                                            mechDetails?.certification?.map((e, i) => (
                                                <div className="mechanicDetailsCert" key={i}>
                                                    <div className="picksCircle"></div>
                                                    <p>{e}</p>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="mechanicDetailsRight_Top_Top_Details4">
                                    <span>
                                        Location:
                                    </span>
                                    <span>  Base in Ikeja lagos. Service ikeja, Yaba, Surulere and environ.</span>

                                </div>
                                <div className="mechanicDetailsRight_Top_Top_Details4">
                                    <span>
                                        Availability:
                                    </span>
                                    <span> Monday - Saturday, 9 AM - 5 PM</span>

                                </div>
                            </div>
                        </div>
                        <button className="mechanicDetailsRight_Btn">Book Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MechanicDetails