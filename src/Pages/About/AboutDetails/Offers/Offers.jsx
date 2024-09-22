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
            <div></div>
        </div>
        <div className='offerBox'></div>
        
       
       <div className='offerBox'></div>
       <div className='offerBox'></div>
     
        </div>

    </div>
    
    </div>
  )
}

export default Offers