import React from 'react'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'> 
    <div className="offers__container">
        <div className='offerBoxLeft'>
            <div className='offerText'>
                <h1>What CarCare Offers</h1>
                <p>CarCare Offers Tools Designed to Make Car Maintenance Easy</p>
                <button className='offerBtn'>Join Now</button>
            </div>
            
        </div>
        <div className='offerBoxesRight'>
        
        <div className='offerBox'>
            <div className='offerBoxIcon'>
              <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727270917/mxzc4awxlbiivpzgdydi.svg"} alt="" />
                <p>High Quality Service</p>

            </div>
          
        </div>
        <div className='offerBox'>
            <div className="offerBoxIcon">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727270806/nzfrooqodq7fxb6fwuuc.svg"} alt="" />
             <p>Certified Mechanics</p>
            </div>
        </div>
        
       
       <div className='offerBox'>
        <div className="offerBoxIcon">
            <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727265740/xhgflhebdwga0d4bwfju.svg"} alt="" />
            <p>Transparent Pricing</p>
        </div>
       </div>
       <div className='offerBox'>
        <div className="offerBoxIcon">
            <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727270685/sdcnb7aewchgj1fdzvyu.svg"} alt="" />
            <p>Mobile Access</p>
        </div>
       </div>
     
        </div>

    </div>
    
    </div>
  )
}

export default Offers