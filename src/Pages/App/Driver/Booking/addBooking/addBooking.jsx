import { useEffect, useState } from 'react'
import './addBooking.css'
import { MdCalendarToday } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { FaDotCircle, FaRegCircle } from 'react-icons/fa'
import Select, { components } from 'react-select';
import { customStyles } from "../../../../../Components/reactSelectStyles"
import { AiOutlineClockCircle } from 'react-icons/ai';
import TimeInput from './TimeInput';

const AddBooking = () => {
    // const Car Brand = []
    // const Brand Model = []
    // const Car Yeard = []
    // const  = ["Agege", "Amuwo - Odofin", "Apapa", "Epe", "Eti-Osa", "Ibeju - Lekki",]
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
        { value: 'avalon', label: 'Avalon' },
        { value: 'camry', label: 'Camry' },
        { value: 'corolla', label: 'Corolla' },
        { value: 'highlander', label: 'Highlander' },
        { value: 'land_cruiser', label: 'Land Cruiser' },
        { value: 'pickup', label: 'Pickup' },
        { value: 'prius', label: 'Prius' },
        { value: 'rav4', label: 'RAV 4' },
        { value: 'sienna', label: 'Sienna' },
        { value: 'solara', label: 'Solara' },
        { value: 'tacoma', label: 'Tacoma' },
        { value: 'venza', label: 'Venza' },
        { value: 'yaris', label: 'Yaris' }
    ]
    const locationOptions = [
        { value: 'agege', label: 'Agege' },
        { value: 'amuwo_odofin', label: 'Amuwo-Odofin' },
        { value: 'apapa', label: 'Apapa' },
        { value: 'epe', label: 'Epe' },
        { value: 'eti_osa', label: 'Eti-Osa' },
        { value: 'ibeju_lekki', label: 'Ibeju-Lekki' },
        { value: 'ikeja', label: 'Ikeja' },
        { value: 'ikorodu', label: 'Ikorodu' },
        { value: 'lagos_island', label: 'Lagos Island' },
        { value: 'lagos_mainland', label: 'Lagos Mainland' },
        { value: 'mushin', label: 'Mushin' },
        { value: 'ojo', label: 'Ojo' },
        { value: 'oshodi_isolo', label: 'Oshodi-Isolo' },
        { value: 'shomolu', label: 'Shomolu' },
        { value: 'surulere', label: 'Surulere' },
        { value: 'yaba', label: 'Yaba' }
    ];

    const navigate = useNavigate()
    const [bookingForms, setbookingForms] = useState(0)
    const [dateInput, setdateInput] = useState("")
    // const d = Date
    // console.log()
    // Date.now()
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
        console.log(e)
    }

    const customDateDropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                {/* Custom Icon */}
                <MdCalendarToday />
            </components.DropdownIndicator>
        );
    };
    const customTimeDropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                {/* Custom Icon */}
                <AiOutlineClockCircle size={20} />
            </components.DropdownIndicator>
        );
    };


    return (
        <div className='addBookingPage'>
            <div className="addBookingPageWrapper">
                <div className="addBookingHeader">
                    <h3>Create A New BOOKING</h3>
                </div>
                <div className="addBookingFormWrapper">
                    {
                        bookingForms == 0 ?
                            <>
                                <div className="inputs">
                                    <div className="doubleInput">
                                        <div className="inputHolder">
                                            <label htmlFor="Car Brand">Car Brand</label>
                                            <Select options={brandOptions}
                                                placeholder=""
                                                styles={customStyles} />
                                        </div>
                                        <div className="inputHolder">
                                            <label htmlFor="Brand Model">Brand Model</label>
                                            <Select options={modelOptions}
                                                placeholder=""
                                                styles={customStyles} />
                                        </div>
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="Car Year">Car Year</label>
                                        {/* <input type="month" maxDetail="decade" /> */}
                                        <Select options={yearOptions}
                                            placeholder=""
                                            styles={customStyles} />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="State">State</label>
                                        <input type="text" value="Lagos" contentEditable="false" 
                                        style={{cursor: "not-allowed", background: 'white'}} 
                                        disabled 
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="City">City</label>
                                        <Select options={locationOptions}
                                            placeholder=""
                                            styles={customStyles} />
                                    </div>
                                </div>
                                <button className='addBooking_btn' onClick={() => setbookingForms(1)}>Next</button>
                            </>
                            :
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
                                                <input type="text" name="" id="" value={time} />
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
                                            <button className="pickServicebtn">Select</button>
                                        </div>
                                    </div>
                                    <div className="pickServiceHolder">
                                        <div className="pickService">
                                            <div className='pickServiceInfo'>
                                                <p>Select a Mechanic</p>
                                            </div>
                                            <button className="pickServicebtn">Select</button>
                                        </div>
                                        <button className="pickServicebtn" onClick={()=> navigate("/serviceList")}>Select</button>
                                    </div>
                                    <div className="pickServiceLocation">
                                        <h3>Service Location</h3>

                                        <div className="servicesLocationPicksHolder">
                                            <div className="servicesLocationPicks">
                                                {
                                                    selectedService === 0 ?
                                                        <FaDotCircle color='#0066B2' size={35}
                                                            onClick={() => setSelectedService(0)} />
                                                        :
                                                        <div className="picksCircle" onClick={() => setSelectedService(0)}></div>
                                                }
                                                <p>Home Service</p>
                                            </div>
                                            <div className="servicesLocationPicks">
                                                {
                                                    selectedService === 1 ?
                                                        <FaDotCircle color='#0066B2' size={35}
                                                            onClick={() => setSelectedService(1)} />
                                                        :
                                                        <div className="picksCircle" onClick={() => setSelectedService(1)}></div>
                                                }
                                                <p>Pickup & Delivery</p>
                                            </div>
                                            <div className="servicesLocationPicks">
                                                {
                                                    selectedService === 2 ?
                                                        <FaDotCircle color='#0066B2' size={35}
                                                            onClick={() => setSelectedService(2)} />
                                                        :
                                                        <div className="picksCircle" onClick={() => setSelectedService(2)}></div>
                                                }
                                                <p>Visit Autoshop</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="additionalInfoInput">
                                        <h3>Add special/additional instructions</h3>
                                        <textarea placeholder='Add any special requests or concerns here…' ></textarea>
                                    </div>
                                </div>
                                <div className="preAndNextBtn">
                                    <button className='addBooking_btn' onClick={() => setbookingForms(0)}>Previous</button>
                                    <button className='addBooking_btn' onClick={() => setbookingForms(2)}>Book Now</button>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div >
    )
}

export default AddBooking