import React, { useEffect, useState } from "react";
import "./heroPage.css";
// import hero1 from "../../assets/images/HeroPage/hero section.png";
// import hero2 from "../../assets/images/HeroPage/hero section 2.png";
// import hero3 from "../../assets/images/HeroPage/hero section 3.png";
import mobilehero1 from "../../assets/images/HeroPage/mobile hero section1.png";
import mobilehero2 from "../../assets/images/HeroPage/mobile hero section2.png";
import mobilehero3 from "../../assets/images/HeroPage/mobile hero section3.png";
import { useNavigate } from "react-router-dom";
// import mobilehero1 from "../../assets/images/HeroPage/hero-section-mobile3.png";


const HeroPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()
  const desktopImages = [hero1, hero2, hero3];
  const mobileImages = [mobilehero1 , mobilehero2, mobilehero3];
  const images = isMobile ? mobileImages : desktopImages;

  

  const titles = [
    {
      firstPtag: "Keep Your Car Running Smoothly With Our",
      bluePTag: "Trusted",
      secondPtag: "Auto Repair Solutions",
      thirdPTag: `We connect you with highly skilled and experienced mechanics who provide top-quality auto service tailored to your specific needs.`,
    },
    {
      firstPtag: "We're Committed to Delivering",
      bluePTag: " Exceptional",
      secondPtag: "Care For Your Car.",
      thirdPTag: `Our mechanics are dedicated to ensuring your car is in optimal condition. Every service is backed by our guarantee of satisfaction.`,
    },
    {
      firstPtag: "Broken Down? We've Got You", bluePTag: " Covered.",
      
      thirdPTag: `We'll tow your car to a trusted mechanic and get you back on the road quickly and safely.`,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < "375px");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };


  const length = titles.length;

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= length ? 0 : newIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel__container">
      {/* This is a background color */}
      <div className="carousel__bgColor"></div>
      <img
        src={images[currentIndex]}
        className="carousel__image"
        alt={`Slide ${currentIndex + 1}`}
      />

      {/* Text Content Overlay */}
      <div className="carousel__text-container">
       <div className="carousel__text">
       <h1 className="carousel__title">
          {titles[currentIndex].firstPtag}{" "} 
          <span className="carousel__blue-text">
            {titles[currentIndex].bluePTag}
          </span>{" "}<br/>
          {titles[currentIndex].secondPtag}
        </h1>
        <p className="carousel__description">{titles[currentIndex].thirdPTag}</p>
       </div>
       <button className="carousel__button" onClick={()=> navigate("/signup")}>Get Started</button>
      </div>
      
    </div>
  );
};

export default HeroPage;













                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       









// import './heroPage.css'
// import HeroPageHanger from './heroPageHanger/heroPageHanger'
// import firstBg from "../../assets/images/HeroPage/hero section.png"
// import secondBg from "../../assets/images/HeroPage/hero section 2.png"
// import thirdBg from "../../assets/images/HeroPage/hero section 3.png"
// import { useEffect, useState } from 'react'

// const HeroPage = () => {

//   const heroPageCarousel = [
//     {
//       img: firstBg,
//       firstPtag: "Keep Your Car Running Smoothly With Our",
//       bluePTag: "Trusted",
//       secondPtag: "Auto Repair Solutions.",
//       thirdPTag: `We connect you with highly skilled and experienced mechanics
//        who provide top-quality
//        auto service tailored to your specific needs.`,
//     },
//     {
//       img: secondBg,
//       firstPtag: "We're commited to",
//       firstPtag2: "delivering",
//       bluePTag: "Exceptional",
//       secondPtag: "Care For your car.",
//       thirdPTag: `Our mechanics are dedicated to ensuring your car
// is in optimal condition. Every service is backed by
// our guarantee of satisfaction.`,

//     },
//     {
//       img: thirdBg,
//       firstPtag: "BROKEN DOWN? WE'VE",
//       firstPtag2: "got you",
//       bluePTag: "COVERED.",
//       thirdPTag: `We'll tow your car to a trusted mechanic
// and get you back on the road quiekly
// and safely.`,
//     }
//   ]
//   const [currentHeroIndex, setcurrentHeroIndex] = useState(0)
//   // const [currentHero, setcurrentHero] = useState(heroPageCarousel[currentHeroIndex])

//   // setInterval(() => {

//   // }, interval);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentHeroIndex == 0) {
//         setcurrentHeroIndex(1)
//       } else if (currentHeroIndex == 1) {
//         setcurrentHeroIndex(2)
//       } else {
//         setcurrentHeroIndex(0)
//       }
//     }, 5000);

//     return () => clearInterval(interval)

//   }, [currentHeroIndex])

//   return (
//     <>
//       {
//         currentHeroIndex == 0 ?
//           <div className='HeroPage'
//             style={{ background: `linear-gradient(rgba(23, 23, 23, 0.40), rgba(23, 23, 23, 0.40)), url(${heroPageCarousel[0]?.img})` }}
//           >
//             <div className="wrapTheHeroTxt">
//               <div className="heropageWrapper">
//                 <div className="TextSeperator">
//                   <div className="heroBigText">
//                     <h4 className='heroBigText'>
//                       {heroPageCarousel[0]?.firstPtag}
//                       <span className='span2'> {heroPageCarousel[0]?.bluePTag}</span>
//                     </h4>
//                     <h4 className='heroBigText'>
//                       {heroPageCarousel[0]?.secondPtag}
//                     </h4>
//                   </div>
//                   <p className='heroSmallText'>
//                     {heroPageCarousel[0]?.thirdPTag}
//                   </p>
//                 </div>
//                 <button className='heroPageBtn'>Get Started</button>
//               </div>
//             </div>
//           </div>
//           : currentHeroIndex == 1 ?
//             <div className='HeroPage'
//               style={{ background: `linear-gradient(rgba(23, 23, 23, 0.40), rgba(23, 23, 23, 0.40)), url(${heroPageCarousel[1]?.img})` }}
//             >
//               <div className="wrapTheHeroTxt">
//                 <div className="heropageWrapper">
//                   <div className="TextSeperator">
//                     <div className="heroBigText">
//                       <h4 className='heroBigText'>
//                         {heroPageCarousel[1]?.firstPtag}
//                         <h4 className='heroBigText'>{heroPageCarousel[1]?.firstPtag2}

//                           <span className='span2'> {heroPageCarousel[1]?.bluePTag}</span>
//                         </h4>
//                       </h4>
//                       <h4 className='heroBigText'>
//                         {heroPageCarousel[1]?.secondPtag}
//                       </h4>
//                     </div>
//                     <p className='heroSmallText'>
//                       {heroPageCarousel[1]?.thirdPTag}
//                     </p>
//                   </div>
//                   <button className='heroPageBtn'>Get Started</button>
//                 </div>
//               </div>
//             </div>
//             : currentHeroIndex == 2 ?
//               <div className='HeroPage'
//                 style={{ background: `linear-gradient(rgba(23, 23, 23, 0.40), rgba(23, 23, 23, 0.40)), url(${heroPageCarousel[2]?.img})` }}
//               >
//                 <div className="wrapTheHeroTxt">
//                   <div className="heropageWrapper">
//                     <div className="TextSeperator">
//                       <div className="heroBigText">
//                         <h4 className='heroBigText'>
//                           {heroPageCarousel[2]?.firstPtag}
//                           <h4 className='heroBigText'>
//                           {heroPageCarousel[2]?.firstPtag2}
//                           <span className='span2'> {heroPageCarousel[2]?.bluePTag}</span>
//                           </h4>
//                         </h4>
//                       </div>
//                       <p className='heroSmallText'>
//                         {heroPageCarousel[2]?.thirdPTag}
//                       </p>
//                     </div>
//                     <button className='heroPageBtn'>Get Started</button>
//                   </div>
//                 </div>
//               </div>
//               : null
//       }
//     </>
//   )
// }

// export default HeroPage
