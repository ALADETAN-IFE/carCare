import './AboutDetails.css'
import React from "react";
import "../../../Components/HeroPage/heroPage.css";



const AboutHeroPage = () => {
  return (
    <div className='aboutDetails__container'>
      <div className="heropart">
      <div className="carousel__container">
      {/* This is a background color */}
      <div className="carousel__bgColor"></div>
      {/* <img
        src={image}
        className="carousel__image"/> */}

      {/* Text Content Overlay */}
      <div className="carousel__text-container">
       <div className="carousel__text">
       <h1 className="carousel__title">
       Your Trusted Car <br />
       Maintenance Partner 
        </h1>
        <p className="carousel__description">At CarCare, we believe that car maintenance should be simple, reliable, and stress-free. We are dedicated to connecting  you with trusted mechanics and provide the tools you need to manage your car’s health with confidence.Whether you're scheduling routine maintenance or need urgent repairs, CarCare is here to ensure your car is always in top condition.</p>
       </div>
      
    </div>
</div>

     </div> 
  </div>
  )


  }


export default AboutHeroPage
