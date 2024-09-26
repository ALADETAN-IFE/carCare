import React from 'react'
import './TheTeam.css'

const TheTeam = () => {
  return (
    <div className='team'>
        <div className="team__container">
        <div className='team__text'>
            <h1>Meet The Team</h1>
            <p>Our dedicated team combines a passion for cars with expertise in technology and customer 
            service. We work together to make car maintenance easy and reliable for you.</p>
        </div>
        <div className='team__members'>
            <div className='member'> 
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727271010/gvfxdqppydh53hd5acpq.png" } className="img__div" alt="" />
                {/* <div className="img__div"></div> */}
                <div className='member__id'>
                    <h1>Simon Favour</h1>
                    <p>Product Designer</p>
                </div>
            </div>
            <div className='member'>
                {/* <div className="img__div"></div> */}
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727319384/tqa0bdivbydttqpip4wu.jpg"} className="img__div" alt="" />
                <div className='member__id'>
                    <h1>Ife Aladetan</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className="member"> 
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727295494/cypl3g5uralhvotx1qqx.jpg"} className="img__div" alt="" />
                
                <div className='member__id'>
                    <h1> Aishah Olalekan</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className='member'> 
                {/* <div className="img__div"></div> */}
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727299042/coyv0y7ju85eofiz8ir6.jpg"} className="img__div" alt="" />
                <div className='member__id'>
                    <h1>Joseph Ifeanyi</h1>
                    <p>Backend Developer</p>
                </div>
            </div>
            <div className='member'>
                {/* <div className="img__div"></div> */}
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727299257/t1ism6hnnthuv78o89tl.jpg"} className='img__div' alt="" />
                <div className='member__id'>
                    <h1>Patience Abah</h1>
                    <p>Backend Developer</p>
                </div>
            </div>
            
        </div>
        </div>

    </div>
  )
}

export default TheTeam