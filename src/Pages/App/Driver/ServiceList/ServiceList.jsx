import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer from "../../../../Components/Footer/Footer"
import LayoutHeader from "../../../../Layout/LayoutHeader/LayoutHeader"
import ServiceCategory from "./ServiceCategory/ServiceCategory"
import "./serviceList.css"
import serviceListimg from "../../../../assets/images/serviceListimg.png"
import { useDispatch, useSelector } from "react-redux"
import { setuserBookingForm } from "../../../../Global/Redux-actions/carCare"
import { toast } from "react-toastify"
// import ServiceSelect from "./ServiceSelect/ServiceSelect"


const ServiceList = () => {
  const navigate = useNavigate()
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setloading] = useState(false);
  const { mechTobeBooked, UserDatas, userBookingForm } = useSelector((state) => state?.carCare)

  const services = [
    {
      name: 'Tire Replacement (One)', detailsA: 'Parts Needed: - 1 Tire',
      detailsB: '- Valve Stems',
      detailsC: '- Tire Balancing Weights (optional)'
    },
    {
      name: 'Tire Replacement (Two)', details: 'Parts Needed: 2 Tire',
      detailsB: '- 2 Tire\- Valve Stems',
      detailsC: '- Tire Balancing Weights (optional)'
    },
    {
      name: 'Tire Replacement (All)', detailsA: 'Parts Needed:- 4 Tire',
      detailsB: '- Valve Stems',
      detailsC: '- Tire Balancing Weights (optional)'
    },
    {
      name: 'Wheel Alignments',
      detailsA: 'Parts Needed: None'
    },
    {
      name: 'Wheel Balancing',
      detailsA: 'Parts Needed: - Wheel weights'
    },
    {
      name: 'Tire Punctures',
      details: 'Parts Needed:- Tire Patch or Plug',
      deatilsB: '- Sealant (if required)'
    },
    { name: 'Tire Rotation', details: 'Parts Needed:' }
  ];
  const [bookingInputsObject, setbookingInputsObject] = useState(userBookingForm)
  const dispatch = useDispatch()

  /* Handle checkbox change */
  const handleCheckboxChange = (event, service) => {
    const isChecked = event.target.checked;

    setSelectedServices(
      isChecked
        ? [...selectedServices, service]
        : selectedServices.filter(item => item.name !== service.name)
    );

    console.log(service)
  }
  console.log(selectedServices)

  const bookNow = () => {
    if (selectedServices?.length < 1) {
      toast.error("Please select a service to book")
    } else {
      setloading(true)
      setbookingInputsObject({ ...bookingInputsObject, service: selectedServices })
      // dispatch(setuserBookingForm(bookingInputsObject))
      setTimeout(() => {
        setloading(false)
        if (bookingInputsObject?.mechName) {
          navigate(`/app/${UserDatas?._id}/${mechTobeBooked?._id}`)
        } else {
          navigate(`/app/${UserDatas?._id}`)
        }
      }, 1200);
    }
  }

  // console.log(bookingInputsObject)
  useEffect(() => {
    dispatch(setuserBookingForm(bookingInputsObject))
  }, [bookingInputsObject])

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
          {services.map((service, index) => (
            <div className="selectBox" key={index}>
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
            {
              loading ?
                <button
                  disabled style={{ background: "#ccc5c5be" }} color="#2c64d4"
                >Booking...</button>
                // <button className="mechanicDetailsRight_Btn"
                //     disabled style={{ background: "#ccc5c5be" }} color="#2c64d4"
                //     ><BeatLoader size={20} /></button>
                :
                <button onClick={bookNow}>Book Now</button>
            }
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
