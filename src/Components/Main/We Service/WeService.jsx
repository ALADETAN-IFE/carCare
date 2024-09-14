import './weService.css'
import Toyota1 from "./svg/Toyota.svg"
import subarl from "./svg/subarl.svg"
import honda from "./svg/honda.svg"
import lexus from "./svg/lexus.svg"
import peugot from "./svg/peugot.svg"
import acura from "./svg/acura.svg"
import mitsubishi from "./svg/mitsubishi.svg"
import nissan from "./svg/nissan.svg"
import ford from "./svg/ford.svg"
import jeep from "./svg/jeep.svg"
import suziki from "./svg/suziki.svg"
import isuzu from "./svg/isuzu.svg"
import mazoa from "./svg/mazoa.svg"
import landRover from "./svg/landRover.svg"

const WeService = () => {
  const carBrands = [
    {
      icon: Toyota1
    },
     {
      icon:subarl
    },
     {
      icon:honda
    },
     {
      icon:lexus
    },
     {
      icon:peugot
    },
     {
      icon:acura
    },
    {
      icon:mitsubishi
    },
    {
     icon:nissan
   },
    {
     icon:ford
   },
    {
     icon:jeep
   },
    {
     icon:suziki
   },
    {
     icon:isuzu
   },
    {
     icon:mazoa
   },
   {
     icon:landRover
   },
  ]

  return (
    <section className='WeService'>
      <div className="weServiceWrapper">
        <div className="weServiceTop">
          <h4>Car Brands We Service</h4>
          <p>Expert Care for Different Make and Model. From luxury to everyday use, we service them all with precision and care</p>
        </div>
        <div className="weServiceBottom">
          <div className="weServiceBottomCarBrandsWrapper">
            {
              carBrands?.map((e, i) => (
                <div className="weServiceCarBrands" key={i}>
                  <img src={e?.icon} alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeService