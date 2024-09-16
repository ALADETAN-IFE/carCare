import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Footer from "../../../../Components/Footer/Footer"
import LayoutHeader from "../../../../Layout/LayoutHeader/LayoutHeader"
import ServiceCategory from "./ServiceCategory/ServiceCategory"
import "./serviceList.css"
import serviceListimg from "../../../../assets/images/serviceListimg.png"
// import ServiceSelect from "./ServiceSelect/ServiceSelect"


const ServiceList = () => {
  const navigate = useNavigate()
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { id: 1, name: 'Tire Replacement (One)', detailsA: 'Parts Needed: - 1 Tire',
      detailsB: '- Valve Stems',
      detailsC: '- Tire Balancing Weights (optional)' },
    { id: 2, name: 'Tire Replacement (Two)', details: 'Parts Needed: 2 Tire',
      detailsB: '- 2 Tire\- Valve Stems', 
      detailsC: '- Tire Balancing Weights (optional)' },
    { id: 3, name: 'Tire Replacement (All)', detailsA: 'Parts Needed:- 4 Tire',
      detailsB: '- Valve Stems',
      detailsC: '- Tire Balancing Weights (optional)' },
    { id: 4, name: 'Wheel Alignments', 
      detailsA: 'Parts Needed: None' },
    { id: 5, name: 'Wheel Balancing',
       detailsA: 'Parts Needed: - Wheel weights' },
    { id: 6, name: 'Tire Punctures', 
      details: 'Parts Needed:- Tire Patch or Plug',
      deatilsB: '- Sealant (if required)' },
    { id: 7, name: 'Tire Rotation', details: 'Parts Needed:' }
  ];


  /* Handle checkbox change */
  const handleCheckboxChange = (event, service) => {
    const isChecked = event.target.checked;

    setSelectedServices(
  isChecked
    ? [...selectedServices, service] 
    : selectedServices.filter(item => item.id !== service.id) 
);
  }
  return (
  <div className="ServiceList__container">
     <div> 
      <LayoutHeader />
    </div> 
    <div className="heropicture">
      <img src={serviceListimg} alt="" />
    </div>

    <div className="serviceList__main">
       <div className="serviceCategoryCall"> 
        <ServiceCategory />
       </div> 
      <div className="serviceSelect">
      {services.map((service) => (
        <div className="selectBox" key={service.id}>
          <input
            type="checkbox"
            value={service.name}
            onChange={(event) => handleCheckboxChange(event, service)}
          />
          <div className="categoryDetails">
            <div className="categoryDetails__text">
              <h1>{service.name}</h1>
              <p>{service.detailsA}</p>
              <p>{service.detailsB}</p>
              <p>{service.detailsC}</p>
            </div>
          </div>
        </div>
      ))}

      </div>

      <div className="selection__card">
        <div className="selection__card__text">
          <h1>Your Selection</h1>
          <p>Service Selected (0)</p>
          <div className="theSeviceContainer">
            <div className="theService">
            {/* <p> */}
              {selectedServices.length === 0 ? (
                
                   <p>No service selected</p> 
              ) : (
                selectedServices.map(service => (
                 <div className="service__map" key=
                 {service.id}>
                    <h1>{service.name}</h1>
                    <p>{service.detailsA}</p>
                    <p>{service.detailsB}</p>
                    <p> {service.detailsC}</p>
                   
                 </div>
                ))
              )}
            {/* </p> */}
            </div>
          </div>
        </div>
        <div className="service__btn">
          <button onClick={() => navigate("/app")}>Book Now</button>
        </div>
      </div>

    </div>


    <div>
      <Footer />
    </div>


  </div>
)
}

export default ServiceList
