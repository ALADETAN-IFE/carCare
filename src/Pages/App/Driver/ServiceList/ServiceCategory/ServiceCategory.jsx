import React from 'react'
import './ServiceCategory.css'
import { NavLink, useNavigate } from 'react-router-dom'

const ServiceCategory = (seePages, setSeePages) => {
    const navigate = useNavigate()
    const categoryOption = [
        {
            text: 'Tire & Wheels',
            to: "tire"
        },
        {
            text: "General Service",
            to: "service",
        },
        {
            text: "AC Service and Repairs",
            to: "ACrepair",
        },
        {
            text: "Brake System",
            to: "brake",
        },
        {
            text: "Preventive Service",
            to: "prevent",
        },
        {
            text: "Windsheild & Glass",
            to: "glass",
        },
        {
            text: "Steering System",
            to: "steering"
        },

    ]
  return (
    <div className='serviceCategory__container'>
        <div className='categoryHeader'>
           <h1>Service Category</h1>
           <p>Select a category</p>
        </div>
        <div className='categoryOption'>
            {categoryOption ?.map((e, i) => (
                <NavLink className={pages.includes(e?.to)  ? "categoryOptionActive categoryOption" : "categoryOption"} key={i} onClick={()=> setSeePages(e?.to)}
                >{e?.text}</NavLink>
            ))}

        </div>
    </div>
  )
}

export default ServiceCategory