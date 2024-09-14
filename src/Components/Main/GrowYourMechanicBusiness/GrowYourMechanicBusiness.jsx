import './growYourMechanicBusiness.css'
import '../JoinOurCommunity/joinOurCommunity.css'
import mechanicImg from "../../../assets/images/growYourbusiness.png"

const GrowYourMechanicBusiness = () => {
  return (
    <section className='GrowYourMechanicBusiness'>
          <div className="joinOurCommunityWrapper GrowYourMechanicBusinessWrapper">
                <div className="leftGrowMech">
                    <img src={mechanicImg} alt="" />
                </div>
                <div className="rightGrowMech">
                    <div className="rightGrowMechTop">
                        <h4>Grow Your Mechanic Business with <span>CarCare</span></h4>
                        <p>Become a part of our trusted network, connect with a larger customer base, and manage your workflow seamlessly to elevate your business to new heights</p>
                    </div>
                    <button className='rightGrowMechBtn'>Join as a Mechanic</button>
                </div>
            </div>
    </section>
  )
}

export default GrowYourMechanicBusiness