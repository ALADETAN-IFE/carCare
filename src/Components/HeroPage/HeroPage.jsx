import './heroPage.css'
import HeroPageHanger from './heroPageHanger/heroPageHanger'
import firstBg from "../../assets/images/HeroPage/hero section.png"
import secondBg from "../../assets/images/HeroPage/hero section 2.png"
import thirdBg from "../../assets/images/HeroPage/hero section 3.png"
import { useEffect, useState } from 'react'

const HeroPage = () => {

  const heroPageCarousel = [
    {
      img: firstBg,
      firstPtag: "Keep Your Car Running Smoothly With Our",
      bluePTag: "Trusted",
      secondPtag: "Auto Repair Solutions.",
      thirdPTag: `We connect you with highly skilled and experienced mechanics
       who provide top-quality
       auto service tailored to your specific needs.`,
    },
    {
      img: secondBg,
      firstPtag: "We're commited to",
      firstPtag2: "delivering",
      bluePTag: "Exceptional",
      secondPtag: "Care For your car.",
      thirdPTag: `Our mechanics are dedicated to ensuring your car
is in optimal condition. Every service is backed by
our guarantee of satisfaction.`,

    },
    {
      img: thirdBg,
      firstPtag: "BROKEN DOWN? WE'VE",
      firstPtag2: "got you",
      bluePTag: "COVERED.",
      thirdPTag: `We'll tow your car to a trusted mechanic
and get you back on the road quiekly
and safely.`,
    }
  ]
  const [currentHeroIndex, setcurrentHeroIndex] = useState(0)
  // const [currentHero, setcurrentHero] = useState(heroPageCarousel[currentHeroIndex])

  // setInterval(() => {

  // }, interval);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentHeroIndex == 0) {
        setcurrentHeroIndex(1)
      } else if (currentHeroIndex == 1) {
        setcurrentHeroIndex(2)
      } else {
        setcurrentHeroIndex(0)
      }
    }, 5000);

    return () => clearInterval(interval)

  }, [currentHeroIndex])

  return (
    <>
      {
        currentHeroIndex == 0 ?
          <div className='HeroPage'
            style={{ background: `linear-gradient(rgba(23, 23, 23, 0.40), rgba(23, 23, 23, 0.40)), url(${heroPageCarousel[0]?.img})` }}
          >
            <div className="wrapTheHeroTxt">
              <div className="heropageWrapper">
                <div className="TextSeperator">
                  <div className="heroBigText">
                    <h4 className='heroBigText'>
                      {heroPageCarousel[0]?.firstPtag}
                      <span className='span2'> {heroPageCarousel[0]?.bluePTag}</span>
                    </h4>
                    <h4 className='heroBigText'>
                      {heroPageCarousel[0]?.secondPtag}
                    </h4>
                  </div>
                  <p className='heroSmallText'>
                    {heroPageCarousel[0]?.thirdPTag}
                  </p>
                </div>
                <button className='heroPageBtn'>Get Started</button>
              </div>
            </div>
          </div>
          : currentHeroIndex == 1 ?
            <div className='HeroPage'
              style={{ background: `linear-gradient(rgba(23, 23, 23, 0.40), rgba(23, 23, 23, 0.40)), url(${heroPageCarousel[1]?.img})` }}
            >
              <div className="wrapTheHeroTxt">
                <div className="heropageWrapper">
                  <div className="TextSeperator">
                    <div className="heroBigText">
                      <h4 className='heroBigText'>
                        {heroPageCarousel[1]?.firstPtag}
                        <h4 className='heroBigText'>{heroPageCarousel[1]?.firstPtag2}

                          <span className='span2'> {heroPageCarousel[1]?.bluePTag}</span>
                        </h4>
                      </h4>
                      <h4 className='heroBigText'>
                        {heroPageCarousel[1]?.secondPtag}
                      </h4>
                    </div>
                    <p className='heroSmallText'>
                      {heroPageCarousel[1]?.thirdPTag}
                    </p>
                  </div>
                  <button className='heroPageBtn'>Get Started</button>
                </div>
              </div>
            </div>
            : currentHeroIndex == 2 ?
              <div className='HeroPage'
                style={{ background: `linear-gradient(rgba(23, 23, 23, 0.40), rgba(23, 23, 23, 0.40)), url(${heroPageCarousel[2]?.img})` }}
              >
                <div className="wrapTheHeroTxt">
                  <div className="heropageWrapper">
                    <div className="TextSeperator">
                      <div className="heroBigText">
                        <h4 className='heroBigText'>
                          {heroPageCarousel[2]?.firstPtag}
                          <h4 className='heroBigText'>
                          {heroPageCarousel[2]?.firstPtag2}
                          <span className='span2'> {heroPageCarousel[2]?.bluePTag}</span>
                          </h4>
                        </h4>
                      </div>
                      <p className='heroSmallText'>
                        {heroPageCarousel[2]?.thirdPTag}
                      </p>
                    </div>
                    <button className='heroPageBtn'>Get Started</button>
                  </div>
                </div>
              </div>
              : null
      }
    </>
  )
}

export default HeroPage
