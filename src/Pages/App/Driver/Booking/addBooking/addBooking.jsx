import { useEffect, useState } from 'react'
import './addBooking.css'
import { MdCalendarToday } from 'react-icons/md'
import { FaDotCircle, FaRegCircle } from 'react-icons/fa'
import Select, { components } from 'react-select';
import { customStyles } from "../../../../../Components/reactSelectStyles"
import { AiOutlineClockCircle } from 'react-icons/ai';
import TimeInput from './TimeInput';
import Confirm from '../Confirm/Confirm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAppbookingFormPage } from '../../../../../Global/Redux-actions/carCare';

const AddBooking = ({book, setbook}) => {
    const navigate = useNavigate()
    const AppbookingFormPage = useSelector((state)=> state.carCare.AppbookingFormPage)
    const [bookingFormsPage, setbookingFormsPage1] = useState(AppbookingFormPage)
    const [bookingInputsObject, setbookingInputsObject] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        setbookingFormsPage1(AppbookingFormPage) 
    }, [AppbookingFormPage])
        
    const setbookingFormsPage = (pageName) => {
      dispatch(setAppbookingFormPage(pageName))
    }
    const brandOptions = [
        { value: "Acura", label: "Acura" },
        { value: "Ford", label: "Ford" },
        { value: "LandRover", label: "LandRover" },
        { value: "Jeep", label: "Jeep" },
        { value: "Isuzu", label: "Isuzu" },
        { value: "Honda", label: "Honda" },
        { value: "Lexus", label: "Lexus" },
        { value: "Mazda", label: "Mazda" },
        { value: "Mitsubishi", label: "Mitsubishi" },
        { value: "Nissan", label: "Nissan" },
        { value: "Peugeot", label: "Peugeot" },
        { value: "Subaru", label: "Subaru" },
        { value: "Toyota", label: "Toyota" },
        { value: "Suzuki", label: "Suzuki" }
    ]
    const modelOptions = [
        { value: 'Avalon', label: 'Avalon' },
        { value: 'Camry', label: 'Camry' },
        { value: 'Corolla', label: 'Corolla' },
        { value: 'Highlander', label: 'Highlander' },
        { value: 'Land Cruiser', label: 'Land Cruiser' },
        { value: 'Pickup', label: 'Pickup' },
        { value: 'Prius', label: 'Prius' },
        { value: 'RAV 4', label: 'RAV 4' },
        { value: 'Sienna', label: 'Sienna' },
        { value: 'Solara', label: 'Solara' },
        { value: 'Tacoma', label: 'Tacoma' },
        { value: 'Venza', label: 'Venza' },
        { value: 'Yaris', label: 'Yaris' }
    ];
    
    const locationOptions = [
        { value: 'Agege', label: 'Agege' },
        { value: 'Amuwo-Odofin', label: 'Amuwo-Odofin' },
        { value: 'Apapa', label: 'Apapa' },
        { value: 'Epe', label: 'Epe' },
        { value: 'Eti-Osa', label: 'Eti-Osa' },
        { value: 'Ibeju-Lekki', label: 'Ibeju-Lekki' },
        { value: 'Ikeja', label: 'Ikeja' },
        { value: 'Ikorodu', label: 'Ikorodu' },
        { value: 'Lagos Island', label: 'Lagos Island' },
        { value: 'Lagos Mainland', label: 'Lagos Mainland' },
        { value: 'Mushin', label: 'Mushin' },
        { value: 'Ojo', label: 'Ojo' },
        { value: 'Oshodi-Isolo', label: 'Oshodi-Isolo' },
        { value: 'Shomolu', label: 'Shomolu' },
        { value: 'Surulere', label: 'Surulere' },
        { value: 'Yaba', label: 'Yaba' }
    ];
    

    console.log(bookingInputsObject)


    
   
    const [dateInput, setdateInput] = useState("")
    const [time, settime] = useState()
    const [showTimeInput, setshowTimeInput] = useState(false)
    const generateYearOptions = (startYear, endYear) => {
        const years = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push({ value: year, label: year });
        }
        return years;
    };
    const yearOptions = generateYearOptions(1900, new Date().getFullYear());
    const [selectedService, setSelectedService] = useState(null); // Use null initially or any index representing the selected service

    // const [select, setselect] = useState([
    //     false, false, false
    // ])
    // useEffect(() => {
    //     setselect((p) => select.map((e) => {
    //         if (e == true) {
    //             return e
    //         } else {
    //             e == false
    //             return e
    //         }
    //     }))
    // }, [select])

    // line-height: 130%; /* 1.625rem */
    
    const handleDateInput = (e) => {
        setdateInput(e.target.value)
        console.log(e.target.value)
        // console.log(e)
     setbookingInputsObject({...bookingInputsObject, date: e.target.value} )
    }
    useEffect(() => {
        setbookingInputsObject({...bookingInputsObject, time: time} )

    }, [time])
    useEffect(() => {
      dispatch(userBookingForm(bookingInputsObject))
    }, [bookingInputsObject])
    
    

    // const customDateDropdownIndicator = (props) => {
    //     return (
    //         <components.DropdownIndicator {...props}>
    //             {/* Custom Icon */}
    //             <MdCalendarToday />
    //         </components.DropdownIndicator>
    //     );
    // };
    // const customTimeDropdownIndicator = (props) => {
    //     return (
    //         <components.DropdownIndicator {...props}>
    //             {/* Custom Icon */}
    //             <AiOutlineClockCircle size={20} />
    //         </components.DropdownIndicator>
    //     );
    // };


    return (
        <div className='addBookingPage'>
          
            <div className="addBookingPageWrapper">
                <div className="addBookingHeader">
                    <h3>Create A New BOOKING</h3>
                </div>
                <div className="addBookingFormWrapper">
                    {
                        bookingFormsPage == 0 ?
                            <>
                                <div className="inputs">
                                    <div className="doubleInput">
                                        <div className="inputHolder">
                                            <label htmlFor="Car Brand">Car Brand</label>
                                            <Select options={brandOptions}
                                                placeholder=""
                                                styles={customStyles}
                                                 onChange={(e)=> setbookingInputsObject({...bookingInputsObject, carBrand: e.value} )}
                                                  />
                                        </div>
                                        <div className="inputHolder">
                                            <label htmlFor="Brand Model">Brand Model</label>
                                            <Select options={modelOptions}
                                                placeholder=""
                                                styles={customStyles} 
                                                onChange={(e)=> setbookingInputsObject({...bookingInputsObject, carModel: e.value} )}
                                                />
                                        </div>
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="Car Year">Car Year</label>
                                        {/* <input type="month" maxDetail="decade" /> */}
                                        <Select options={yearOptions}
                                            placeholder=""
                                            styles={customStyles}
                                            onChange={(e)=> setbookingInputsObject({...bookingInputsObject, carYear: e.value} )}
                                            />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="State">State</label>
                                        <input type="text" value="Lagos" contentEditable="false" 
                                        style={{cursor: "not-allowed", background: 'white'}} 
                                        disabled 
                                        onChange={(e)=> setbookingInputsObject({...bookingInputsObject, carState: e.value} )}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="City">City</label>
                                        <Select options={locationOptions}
                                            placeholder=""
                                            styles={customStyles}
                                            onChange={(e)=> setbookingInputsObject({...bookingInputsObject, carLocation: e.value} )}
                                            />
                                    </div>
                                </div>
                                <button className='addBooking_btn' onClick={() => setbookingFormsPage(1)}>Next</button>
                            </>
                            : bookingFormsPage == 1 ?
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
                                                        <TimeInput settime={settime} />
                                                        : null
                                                }
                                            </label>
                                            <div className="timeHolderInput" onClick={() => setshowTimeInput(!showTimeInput)}>
                                                <input type="text" name="" id="" value={time}
                                                 onChange={(e)=> settime(e.target.value) }
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
                                            <button className="pickServicebtn" onClick={()=> navigate("/services")}>Select</button>
                                        </div>
                                    </div>
                                    <div className="pickServiceHolder">
                                        <div className="pickService">
                                            <div className='pickServiceInfo'>
                                                <p>Select a Mechanic</p>
                                            </div>
                                            <button className="pickServicebtn" onClick={()=> navigate("/mechanics")}>Select</button>
                                        </div>
                                    </div>
                                    <div className="pickServiceLocation">
                                        <h3>Service Location</h3>

                                        <div className="servicesLocationPicksHolder">
                                            <div className="servicesLocationPicks">
                                                {
                                                    selectedService === 0 ?
                                                        <FaDotCircle color='#0066B2' size={35}
                                                        onClick={() => setSelectedService(0)}
                                                        />
                                                        :
                                                        <div className="picksCircle"
                                                        onClick={() => {setSelectedService(0), setbookingInputsObject({...bookingInputsObject, serviceLocation: "Home Service"}), console.log(":") }} 
                                                         ></div>
                                                }
                                                <p>Home Service</p>
                                            </div>
                                            <div className="servicesLocationPicks">
                                                {
                                                    selectedService === 1 ?
                                                        <FaDotCircle color='#0066B2' size={35}
                                                        style={{width: "35px", height: "35px"}}
                                                        onClick={() => setSelectedService(1)}
                                                        />
                                                        :
                                                        <div className="picksCircle" 
                                                        onClick={() => {setSelectedService(1), setbookingInputsObject({...bookingInputsObject, serviceLocation: "Pickup & Delivery"}) }}
                                                        ></div>
                                                }
                                                <p>Pickup & Delivery</p>
                                            </div>
                                            <div className="servicesLocationPicks">
                                                {
                                                    selectedService === 2 ?
                                                        <FaDotCircle color='#0066B2' size={35} 
                                                        onClick={() => setSelectedService(2)}
                                                        />
                                                        :
                                                        <div className="picksCircle"
                                                        onClick={() => {setSelectedService(2), setbookingInputsObject({...bookingInputsObject, serviceLocation: "Visit Autoshop"}) }} 
                                                        ></div>
                                                }
                                                <p>Visit Autoshop</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="additionalInfoInput">
                                        <h3>Add special/additional instructions</h3>
                                        <textarea placeholder='Add any special requests or concerns here…' 
                                         onChange={(e)=> setbookingInputsObject({...bookingInputsObject, additionalInfo: e.target.value} )}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="preAndNextBtn">
                                    <button className='addBooking_btn' onClick={() => setbookingFormsPage(0)}>Previous</button>
                                    <button className='addBooking_btn' onClick={() => setbook(true)}>Book Now</button>
                                </div>
                            </>
                            : null
                    }
                </div>
            </div>
        </div >
    )
}

export default AddBooking