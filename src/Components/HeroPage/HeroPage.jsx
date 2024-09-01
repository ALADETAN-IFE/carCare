import './heroPage.css';
import HomeBtn from "../HomeBtn/HomeBtn";
import HeroPageHanger from "./heroPageHanger/HeroPageHanger";


const HeroPage = () => {
  return (
    <div className='HeroPage'>
      <div className="wrapTheHeroTxt">
        <div className="heropageWrapper">
          <h3 className="heroBigText">Keep Your Car Running Smoothly With Our Trusted Auto Repair Solutions</h3>
          <p className="heroSmallText">We connect you with highly skilled and experienced mechanics who provide top-quality auto service tailored to your specific needs.</p>
          <HomeBtn title="Book An Appointment" runThisFunc />
        </div>
      </div>
      <HeroPageHanger />
      {/* sdj */}
    </div>
  )
}

export default HeroPage