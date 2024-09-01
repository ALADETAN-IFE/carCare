import { useState } from 'react'
import './heroPageHangerDropDown.css'

const HeroPageHangerDropDown = ({e}) => {
  const [showOptions, setshowOptions] = useState(false)
  return (
        <div key={e?.id} className='heroPageHangerDropDown' onClick={()=> setshowOptions(!showOptions)}>
            <span>{e?.select}</span>
            {
              showOptions ? 
                <>   
                  {e?.activeIcon}
                </>
              :
                <>
                  {e?.Icon}
                </>
            }
            
            {
              showOptions ? 
              <div className='options'>
                {
                  e?.options.map((e, i)=> (
                    <option key={e?.id}
                     value={e?.text}>{e?.text}</option>
                  ))
                }
              </div>
              : null
            }
        </div>
  )
}

export default HeroPageHangerDropDown
