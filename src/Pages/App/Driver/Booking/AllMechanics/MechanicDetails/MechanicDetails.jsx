import Footer from "../../../../../../Components/Footer/Footer"
import LayoutHeader from "../../../../../../Layout/LayoutHeader/LayoutHeader"
import "./mechanicDetails.css"
import mechDatasJSON from "../mechanicsData.json"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import bigImage from "./bigImage.png"

const MechanicDetails = () => {
    const { mechId } = useParams()
    const [mechDetails, setmechDetails] = useState({})

    useEffect(() => {
        const theMech = mechDatasJSON.filter((e) => e?._id == mechId)
        const theMechDect = theMech.map(e => ({ ...e, image: bigImage }))
        setmechDetails(theMechDect[0])
    }, [])

    console.log(mechDetails)

    return (
        <div className="mechanicDetailsBody">
            <LayoutHeader />
            <div className="AllMechanicsBody">
                <div className="mechanicDetailsBodyWrapper">
                    <div className="mechanicDetailsLeft">
                        <img src={mechDetails?.image} alt="" />
                    </div>
                    <div className="mechanicDetailsRight">
                        <button className="mechanicDetailsRight_Btn">Book Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MechanicDetails