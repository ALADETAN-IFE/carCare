import React from 'react'
import './ServiceCategory.css'
import { NavLink, useNavigate } from 'react-router-dom'
// import categoryImg from '../../../../../assets/images/categoryImg.png'

const ServiceCategory = ({ pages = [], setPages }) => {
  const navigate = useNavigate()
  const selectOption = [
    { text: 'Tire & Wheels', to: "tire" },
    { text: "General Service", to: "service" },
    { text: "AC Service and Repairs", to: "ACrepair" },
    { text: "Brake System", to: "brake" },
    { text: "Preventive Service", to: "prevent" },
    { text: "Windshield & Glass", to: "glass" },
    { text: "Steering System", to: "steering" },
  ]

  return (
    <div className='serviceCategory__container'>
      <div>
        <div className='categoryHeader'>
          <h1>Service Category</h1>
          <p>Select a category</p>
          <hr />
        </div>
        <div className='categoryOption'>
          {selectOption.map((e, i) => (
            <NavLink
              className={`selectOption ${(pages && pages.includes(e.to)) ? "selectOptionActive" : ""}`}
              key={i}
              onClick={() => {
                if (pages.includes(e.to)) {
                  setPages(pages.filter(page => page !== e.to))  // Deselect if it's already selected
                } else {
                  setPages([...pages, e.to])  // Add to the selection
                }
              }}

            // onClick={() => {
            //   if (pages && pages.includes(e.to)) {
            //     setPages(pages.filter(page => page !== e.to));
            //   } else {
            //     setPages([...(pages || []), e.to]);
            //   }
            // }}
            >
              {e.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='categoryImg'>
        {/* <img src={categoryImg} alt="" /> */}
      </div>
    </div>
  )
}

export default ServiceCategory
