import './growYourMechanicBusiness.css'
import '../JoinOurCommunity/joinOurCommunity.css'
import mechanicImg from "../../../assets/images/growYourbusiness.png"
import { useNavigate } from 'react-router-dom'

const GrowYourMechanicBusiness = () => {
  const navigate = useNavigate()
  return (
    <section className='GrowYourMechanicBusiness'>
          <div className="GrowYourMechanicBusinessWrapper">
                <div className="leftGrowMech">
                    <img src={mechanicImg} alt="" />
                </div>
                <div className="rightGrowMech">
                    <div className="rightGrowMechTop">
                        <h4>Grow Your Mechanic Business with <span>CarCare</span></h4>
                        <p>Become a part of our trusted network, connect with a larger customer base, and manage your workflow seamlessly to elevate your business to new heights</p>
                    </div>
                    <button className='rightGrowMechBtn'
                    onClick={()=> navigate("/mechSignUp")}
                    >Join as a Mechanic</button>
                </div>
            </div>
    </section>
  )
}

export default GrowYourMechanicBusiness