import React from 'react'
import { CgMoreVertical } from 'react-icons/cg'

const MechTableDatas = ({booking}) => {
  return (
    <section className='TableDatas'>
    <span className="span1" style={{display: "flex", gap: "10px"}}>
        {/* <div style={{ width: "max-content", display: 'flex', alignItems: 'center' }}> */}
            <span>{booking?.customer}</span>
        {/* </div> */}
    </span>
    <span className="span2">{booking?.vehcleDetails}</span>
    <span className="span3">{booking?.serviceType}</span>
    <span className="span4">{booking?.date}</span> 
    <span className="span5">{booking?.customersLocation}</span>
    <span className="span6"
    
    >
       <button>{booking?.Action1}</button>
       <button>{booking?.Action2}</button>
    </span>
    {/* <span className="span7"><CgMoreVertical /></span> */}
</section>
  )
}

export default MechTableDatas