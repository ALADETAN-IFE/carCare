import React, { useState } from 'react';
import '../ServiceList/ServiceList.css'


const ServiceSelection = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { id: 1, name: 'Tire Replacement (One)', details: 'Parts Needed:\n- 1 Tire\n- Valve Stems\n- Tire Balancing Weights (optional)' },
    { id: 2, name: 'Tire Replacement (Two)', details: 'Parts Needed:\n- 2 Tire\n- Valve Stems\n- Tire Balancing Weights (optional)' },
    { id: 3, name: 'Tire Replacement (All)', details: 'Parts Needed:\n- 4 Tire\n- Valve Stems\n- Tire Balancing Weights (optional)' },
    { id: 4, name: 'Wheel Alignments', details: 'Parts Needed:\nNone' },
    { id: 5, name: 'Wheel Balancing', details: 'Parts Needed:\n- Wheel weights' },
    { id: 6, name: 'Tire Punctures', details: 'Parts Needed:\n- Tire Patch or Plug\n- Sealant (if required)' },
    { id: 7, name: 'Tire Rotation', details: 'Parts Needed:\n' }
  ];

  /* Handle checkbox change */
  const handleCheckboxChange = (event, service) => {
    const isChecked = event.target.checked;

    setSelectedServices(
  isChecked
    ? [...selectedServices, service] 
    : selectedServices.filter(item => item.id !== service.id) 
);

  return (
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
              <p>{service.details}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Selection Card */}
      <div className="selection__card">
        <div className="selection__card__text">
          <h1>Your Selection</h1>
          <p>Service Selected ({selectedServices.length})</p>
          <div className="theServiceContainer">
            <ul>
              {selectedServices.length === 0 ? (
                <p>No services selected</p>
              ) : (
                selectedServices.map(service => (
                  <li key={service.id}>{service.name}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
}

export default ServiceSelection;
