import './heroPage.css'
import HeroPageHanger from './heroPageHanger/heroPageHanger'
import firstBg from "../../assets/images/HeroPage/hero section.png"
import { useState } from 'react'

const HeroPage = () => {

  const heroPageCarousel = [
    {
      img: firstBg,
      
    }
  ]
  const [currentHero, setcurrentHero] = useState(heroPageCarousel[0])
  return (
    <div className='HeroPage' style={{background: currentHero.img}}>
        {/* <HeroPageHanger/> */}
        <img src={currentHero.img} alt="" />
    </div>
  )
}

export default HeroPage
