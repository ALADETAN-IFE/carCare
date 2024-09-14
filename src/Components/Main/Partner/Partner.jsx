import './partner.css'
import Lasaa from "../../../assets/images/PartnerNetwork/Lasaa.svg"
import kora from "../../../assets/images/PartnerNetwork/kora.svg"
import Bolt from "../../../assets/images/PartnerNetwork/Bolt.svg"
import theCurve from "../../../assets/images/PartnerNetwork/theCurve.svg"
import lagosRide from "../../../assets/images/PartnerNetwork/lagosRide.svg"
import mooveUber from "../../../assets/images/PartnerNetwork/mooveUber.svg"
import drive45 from "../../../assets/images/PartnerNetwork/drive45.svg"
import maxNG from "../../../assets/images/PartnerNetwork/maxNG.svg"
import fincra from "../../../assets/images/PartnerNetwork/fincra.svg"
import inDrive from "../../../assets/images/PartnerNetwork/inDrive.svg"

const Partner = () => {
  const partners = [
    Lasaa,
    kora,
    Bolt,
    theCurve,
    lagosRide,
    mooveUber,
    drive45,
    maxNG,
    fincra,
    inDrive
  ]
  return (
    <section className='Partner'>
      <div className="PartnerTop">
        <h4>Our Partner Network</h4>
        <p>Discover the trusted partners that enhance our services and support our mission to keep your car running smoothly.</p>
      </div>
      <div className="PartnerBottom">
        <div className="PartnerBottom1">
          {
            partners?.map((e, i)=> (
              <img className="PartnerIcons" key={i} src={e}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Partner