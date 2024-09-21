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
import { setAppbookingFormPage, setuserBookingForm } from '../../../../../Global/Redux-actions/carCare';
import { toast } from 'react-toastify';

const AddBooking = ({ book, setbook }) => {
    const navigate = useNavigate()
    const { AppbookingFormPage, userBookingForm } = useSelector((state) => state.carCare)
    const [bookingFormsPage, setbookingFormsPage1] = useState(AppbookingFormPage)
    const [bookingInputsObject, setbookingInputsObject] = useState(userBookingForm)
    const dispatch = useDispatch()
    useEffect(() => {
        setbookingFormsPage1(AppbookingFormPage)
    }, [AppbookingFormPage])
    useEffect(() => {
        setbookingInputsObject(userBookingForm)
    }, [userBookingForm])

    const setbookingFormsPage = (pageName) => {
        dispatch(setAppbookingFormPage(pageName))
    }
    // const carData = [
    //    { Acura: [
    //         { value: 'MDX', label: 'MDX' },
    //         { value: 'RDX', label: 'RDX' }
    //     ]},
    //    {
    //     name : "Acura",
    //     brands: [
    //         { value: 'MDX', label: 'MDX' },
    //         { value: 'RDX', label: 'RDX' }
    //     ]
    //    },
    //    { Ford: [
    //         { value: 'Explorer', label: 'Explorer' },
    //         { value: 'F-150', label: 'F-150' }
    //     ]},
    //    { LandRover: [
    //         { value: 'Defender', label: 'Defender' },
    //         { value: 'Discovery', label: 'Discovery' }
    //     ]},
    //     {Jeep: [
    //         { value: 'Cherokee', label: 'Cherokee' },
    //         { value: 'Wrangler', label: 'Wrangler' }
    //     ]},
    //    { Isuzu: [
    //         { value: 'D-Max', label: 'D-Max' },
    //         { value: 'MU-X', label: 'MU-X' }
    //     ]},
    //    { Honda: [
    //         { value: 'Accord', label: 'Accord' },
    //         { value: 'Civic', label: 'Civic' }
    //     ]},
    //    { Lexus: [
    //         { value: 'RX', label: 'RX' },
    //         { value: 'GX', label: 'GX' }
    //     ]},
    //    { Mazda: [
    //         { value: 'CX-5', label: 'CX-5' },
    //         { value: 'Mazda3', label: 'Mazda3' }
    //     ]},
    //     {Mitsubishi: [
    //         { value: 'Outlander', label: 'Outlander' },
    //         { value: 'Pajero', label: 'Pajero' }
    //     ]},
    //    { Nissan: [
    //         { value: 'Altima', label: 'Altima' },
    //         { value: 'Patrol', label: 'Patrol' }
    //     ]},
    //     {Peugeot: [
    //         { value: '3008', label: '3008' },
    //         { value: '5008', label: '5008' }
    //     ]},
    //     {Subaru: [
    //         { value: 'Forester', label: 'Forester' },
    //         { value: 'Outback', label: 'Outback' }
    //     ]},
    //    { Toyota: [
    //         { value: 'Camry', label: 'Camry' },
    //         { value: 'Corolla', label: 'Corolla' },
    //         { value: 'RAV 4', label: 'RAV 4' },
    //         { value: 'Sienna', label: 'Sienna' }
    //     ]},
    //    { Suzuki: [
    //         { value: 'Swift', label: 'Swift' },
    //         { value: 'Vitara', label: 'Vitara' }
    //     ]}
    // ];

    const carData = [
        {
            name: "Acura",
            brands: [
                { value: 'MDX', label: 'MDX' },
                { value: 'RDX', label: 'RDX' }
            ]
        },
        {
            name: "Ford",
            brands: [
                { value: 'Explorer', label: 'Explorer' },
                { value: 'F-150', label: 'F-150' }
            ]
        },
        {
            name: "LandRover",
            brands: [
                { value: 'Defender', label: 'Defender' },
                { value: 'Discovery', label: 'Discovery' }
            ]
        },
        {
            name: "Jeep",
            brands: [
                { value: 'Cherokee', label: 'Cherokee' },
                { value: 'Wrangler', label: 'Wrangler' }
            ]
        },
        {
            name: "Isuzu",
            brands: [
                { value: 'D-Max', label: 'D-Max' },
                { value: 'MU-X', label: 'MU-X' }
            ]
        },
        {
            name: "Honda",
            brands: [
                { value: 'Accord', label: 'Accord' },
                { value: 'Civic', label: 'Civic' }
            ]
        },
        {
            name: "Lexus",
            brands: [
                { value: 'RX', label: 'RX' },
                { value: 'GX', label: 'GX' }
            ]
        },
        {
            name: "Mazda",
            brands: [
                { value: 'CX-5', label: 'CX-5' },
                { value: 'Mazda3', label: 'Mazda3' }
            ]
        },
        {
            name: "Mitsubishi",
            brands: [
                { value: 'Outlander', label: 'Outlander' },
                { value: 'Pajero', label: 'Pajero' }
            ]
        },
        {
            name: "Nissan",
            brands: [
                { value: 'Altima', label: 'Altima' },
                { value: 'Patrol', label: 'Patrol' }
            ]
        },
        {
            name: "Peugeot",
            brands: [
                { value: '3008', label: '3008' },
                { value: '5008', label: '5008' }
            ]
        },
        {
            name: "Subaru",
            brands: [
                { value: 'Forester', label: 'Forester' },
                { value: 'Outback', label: 'Outback' }
            ]
        },
        {
            name: "Toyota",
            brands: [
                { value: 'Camry', label: 'Camry' },
                { value: 'Corolla', label: 'Corolla' },
                { value: 'RAV 4', label: 'RAV 4' },
                { value: 'Sienna', label: 'Sienna' }
            ]
        },
        {
            name: "Suzuki",
            brands: [
                { value: 'Swift', label: 'Swift' },
                { value: 'Vitara', label: 'Vitara' }
            ]
        }
    ];
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
    const yearOptions = generateYearOptions(1950, new Date().getFullYear());
    const [selectedService, setSelectedService] = useState(null); // Use null initially or any index representing the selected service
    // const [timeError, setTimeError] = useState(null);
    // const [submittedTime, setSubmittedTime] = useState(null);

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
        setbookingInputsObject({ ...bookingInputsObject, date: e.target.value })
    }
    // useEffect(() => {
    //     setbookingInputsObject({ ...bookingInputsObject, time: time })
    //     // setbookingInputsObject({ ...bookingInputsObject, time: submittedTime })

    // }, [time])

    useEffect(() => {
        dispatch(setuserBookingForm(bookingInputsObject))
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

    const BrandModels = () => {
        // value={brandOptions.find(option => option.value === bookingInputsObject?.brand)} 
        if (!bookingInputsObject?.brand) {
            return [{
                value: "please select a car brand first",
                label: "please select a car brand first"
            }]
        }
        // else if (condition) {
        //     return [{
        //         value: "",
        //         label: ""
        //     }]
        // }
        else {
            const brands = carData.filter((option) => option.name == bookingInputsObject?.brand)
            //    console.log(brands, "brands")
            const brands2 = brands[0].brands
            //    console.log(bookingInputsObject?.brand , "bookingInputsObject")
            return brands2
        }
    }

    // const changeBrandModel = () => {

    //     if (modelOptions.find(option => option.value === bookingInputsObject?.model) ) {
    //       console.log()
    //     } else {

    //      }
    // }


    // changeBrandModel()

    const openConfirm = () => {
        if (
          !bookingInputsObject?.brand ||
          !bookingInputsObject?.model ||
          !bookingInputsObject?.carLocation ||
          !bookingInputsObject?.city ||
          !bookingInputsObject?.date ||
          !bookingInputsObject?.time ||
          !bookingInputsObject?.service ||
          !bookingInputsObject?.mechName ||
          !bookingInputsObject?.serviceType ||
          !bookingInputsObject?.year 
    
        ) {
          if (!bookingInputsObject?.brand) {
            toast.error("Car brand is required")
          } 
          else if (!bookingInputsObject?.model) {
            toast.error("Car's model is required")        
          }
          else if (!bookingInputsObject?.year) {
            toast.error("Car year is required") 
          }
          else if (!bookingInputsObject?.carLocation) {
            toast.error("Car's currrent location is required")
            
          }
          else if (!bookingInputsObject?.city) {
            toast.error("Car's currrent city is required") 
          }
          else if (!bookingInputsObject?.date) {
            toast.error("Appointment date is required") 
          }
          else if (!bookingInputsObject?.time) {
            toast.error("Appointment time is required") 
          }
          else if (!bookingInputsObject?.service) {
            toast.error("service to be done is required") 
          }
          else if (!bookingInputsObject?.mechName) {
            toast.error("Mechanic is required") 
          }
          else if (!bookingInputsObject?.serviceType) {
            toast.error("Service type is required") 
          }
        } else {
          setbook(true)
        }
     
      }

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };




    // console.log(carData, "carData")
    // console.log(BrandModels(), "BrandModels")
    // console.log(bookingInputsObject, "BrandModels")

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
                                                onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, brand: e.value, model: "", city: "Lagos" })}
                                                //  value={bookingInputsObject?.brand}
                                                value={brandOptions.find(option => option.value === bookingInputsObject?.brand)}
                                            />
                                        </div>
                                        <div className="inputHolder">
                                            <label htmlFor="Brand Model">Brand Model</label>
                                            <Select
                                                options={BrandModels()}
                                                // options={modelOptions}
                                                placeholder=""
                                                styles={customStyles}
                                                onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, model: e.value })}
                                                value={BrandModels().find(option => option.value === bookingInputsObject?.model)}
                                            />
                                        </div>
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="Car Year">Car Year</label>
                                        {/* <input type="month" maxDetail="decade" /> */}
                                        <Select options={yearOptions}
                                            placeholder=""
                                            styles={customStyles}
                                            onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, year: e.value })}
                                            value={yearOptions.find(option => option.value === bookingInputsObject?.year)}
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="State">State</label>
                                        <input type="text" value="Lagos" contentEditable="false"
                                            style={{ cursor: "not-allowed", background: 'white' }}
                                            disabled
                                            onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, city: e.value })}
                                        // value={brandOptions.find(option => option.value === bookingInputsObject?.city)} 
                                        />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="City">City</label>
                                        <Select options={locationOptions}
                                            placeholder=""
                                            styles={customStyles}
                                            onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, carLocation: e.value })}
                                            value={locationOptions.find(option => option.value === bookingInputsObject?.carLocation)}
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
                                        bookingInputsObject?.service ?  <h3 className='pickedServiceOrMech'>
                                            {
                                                bookingInputsObject?.service.map((e, i)=> (
                                                    <span key={i}>{e?.name}</span>
                                                ))
                                            }
                                        </h3>: null
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
                                        bookingInputsObject?.mechName ?  <h3 className='pickedServiceOrMech'>{bookingInputsObject?.mechName}</h3>: null
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
                                                        selectedService === 1 || bookingInputsObject?.serviceType == "Pickup & Delivery"?
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
                                                        selectedService === 2 || bookingInputsObject?.serviceType == "Visit Autoshop"?
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
                                : null
                    }
                </div>
            </div>
        </div >
    )
}

export default AddBooking