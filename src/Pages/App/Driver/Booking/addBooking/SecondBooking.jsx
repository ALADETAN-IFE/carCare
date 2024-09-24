import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import TimeInput from './TimeInput';

const SecondBooking = ({ setbookingInputsObject, bookingInputsObject, setbookingFormsPage, openConfirm }) => {

    const [dateInput, setdateInput] = useState("")
    const [time, settime] = useState()
    const [showTimeInput, setshowTimeInput] = useState(false)
  
    const [selectedService, setSelectedService] = useState(null); // Use null initially or any index representing the selected service
    const handleDateInput = (e) => {
        setdateInput(e.target.value)
        console.log(e.target.value)
        // console.log(e)
        setbookingInputsObject({ ...bookingInputsObject, date: e.target.value })
      }
    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
  return (
    <>
    <div className="inputs inputs2">
      <div className="doubleInput">
        <div className="inputHolder">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            hidden={true}
            // placeholder="Select a date"
            onChange={handleDateInput}
            min={getCurrentDate()}
            value={bookingInputsObject?.date}
          // style={{display: "none"}}
          // id='date' 
          />
          {/* <MdCalendarToday/> */}
          {/* <div className="timeHolderInput">
                              <label htmlFor="date" style={{width: "100%", height: "60px", border: "1px solid #000",
                              borderRadius: "8px", 
                              }}>
                                  {dateInput}
                                  <MdCalendarToday />
                                  </label>
                              </div> */}
          {/* <Select options={locationOptions}
                                      placeholder="Pick date"
                                      components={{ DropdownIndicator: customDateDropdownIndicator }}
                                      styles={customStyles} /> */}
        </div>
        <div className="inputHolder">
          <label htmlFor="Time">
            Time
            {
              showTimeInput ?
                <TimeInput
                  settime={settime}
                  time={time}
                  setbookingInputsObject={setbookingInputsObject}
                  bookingInputsObject={bookingInputsObject}
                // settime={setSubmittedTime}
                // setTimeError={setTimeError}
                />
                : null
            }
          </label>



          {/* <div> */}
          {/* <label htmlFor="Time">
                                      Time
                                      {showTimeInput ?
                                          <TimeInput
                                              settime={setSubmittedTime}
                                              setTimeError={setTimeError}
                                          />
                                          : null
                                      }
                                  </label>
                                  {timeError && <div style={{ color: 'red' }}>{timeError}</div>} */}
          {/* </div> */}
          <div className="timeHolderInput" onClick={() => setshowTimeInput(!showTimeInput)}>
            <input type="text" name="" id="" value={bookingInputsObject?.time}
              onChange={(e) => settime(e.target.value)}
            />
            <AiOutlineClockCircle size={20}
              style={{ position: "absolute", right: "20px", top: "20px", cursor: "pointer" }}

            />
            {/* {} */}
          </div>

          {/* <Select options={locationOptions}
                                      placeholder=""
                                      components={{ DropdownIndicator: customTimeDropdownIndicator }}
                                      styles={customStyles} /> */}
        </div>
      </div>
      <div className="pickServiceHolder">
        <div className="pickService">
          <div className='pickServiceInfo'>
            <p>Select your Service</p>
          </div>
          <button className="pickServicebtn" onClick={() => navigate("/services")}>Select</button>
        </div>
      </div>
      {
        bookingInputsObject?.service ? <h3 className='pickedServiceOrMech'
          style={{ display: "flex", flexDirection: "column", gap: "3px" }}
        >
          {
            bookingInputsObject?.service.map((e, i) => (
              <span key={i}>{e?.name}</span>
            ))
          }
        </h3> : null
      }
      <div className="pickServiceHolder">
        <div className="pickService">
          <div className='pickServiceInfo'>
            <p>Select a Mechanic</p>
          </div>
          <button className="pickServicebtn" onClick={() => navigate("/mechanics")}>Select</button>
        </div>
      </div>
      {
        bookingInputsObject?.mechName ? <h3 className='pickedServiceOrMech'>{bookingInputsObject?.mechName}</h3> : null
      }
      <div className="pickServiceLocation">
        <h3>Service Location</h3>

        <div className="servicesLocationPicksHolder">
          <div className="servicesLocationPicks">
            {
              selectedService === 0 || bookingInputsObject?.serviceType == "Home Service" ?
                <FaDotCircle color='#0066B2' size={35}
                  onClick={() => setSelectedService(0)}
                />
                :
                <div className="picksCircle"
                  onClick={() => { setSelectedService(0), setbookingInputsObject({ ...bookingInputsObject, serviceType: "Home Service" }), console.log(":") }}
                ></div>
            }
            <p>Home Service</p>
          </div>
          <div className="servicesLocationPicks">
            {
              selectedService === 1 || bookingInputsObject?.serviceType == "Pickup & Delivery" ?
                <FaDotCircle color='#0066B2' size={35}
                  style={{ width: "35px", height: "35px" }}
                  onClick={() => setSelectedService(1)}
                />
                :
                <div className="picksCircle"
                  onClick={() => { setSelectedService(1), setbookingInputsObject({ ...bookingInputsObject, serviceType: "Pickup & Delivery" }) }}
                ></div>
            }
            <p>Pickup & Delivery</p>
          </div>
          <div className="servicesLocationPicks">
            {
              selectedService === 2 || bookingInputsObject?.serviceType == "Visit Autoshop" ?
                <FaDotCircle color='#0066B2' size={35}
                  onClick={() => setSelectedService(2)}
                />
                :
                <div className="picksCircle"
                  onClick={() => { setSelectedService(2), setbookingInputsObject({ ...bookingInputsObject, serviceType: "Visit Autoshop" }) }}
                ></div>
            }
            <p>Visit Autoshop</p>
          </div>
        </div>


      </div>
      <div className="additionalInfoInput">
        <h3>Add special/additional instructions</h3>
        <textarea placeholder='Add any special requests or concerns here…'
          onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, notes: e.target.value })}
        ></textarea>
      </div>
    </div>
    <div className="preAndNextBtn">
      <button className='addBooking_btn' onClick={() => setbookingFormsPage(0)}>Previous</button>
      <button className='addBooking_btn' onClick={openConfirm}>Book Now</button>
    </div>
  </>
  )
}

export default SecondBooking