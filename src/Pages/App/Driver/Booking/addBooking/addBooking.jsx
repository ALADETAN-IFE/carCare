import { useEffect, useState } from 'react'
import './addBooking.css'
import { useNavigate } from 'react-router-dom'
// import { MdCalendarToday } from 'react-icons/md'
import { FaDotCircle, FaRegCircle } from 'react-icons/fa'

const AddBooking = () => {
    // const Car Brand = []
    // const Brand Model = []
    // const Car Yeard = []
    const navigate = useNavigate()
    const Location = ["Agege", "Amuwo - Odofin", "Apapa", "Epe", "Eti-Osa", "Ibeju - Lekki",]
    const [bookingForms, setbookingForms] = useState(0)
    // console.log(new Date().)
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
                                            <select name="" id="">
                                            </select>
                                        </div>
                                        <div className="inputHolder">
                                            <label htmlFor="Brand Model">Brand Model</label>
                                            <select name="" id="">
                                            </select>
                                        </div>
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="Car Year">Car Year</label>
                                        <input type="month" maxDetail="decade" />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="State">State</label>
                                        <input type="text" />
                                    </div>
                                    <div className="inputHolder">
                                        <label htmlFor="City">City</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                            {
                                                Location?.map((e, i) => (
                                                    <option value={e} key={i}>{e}</option>
                                                ))
                                            }
                                        </select>
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
                                            <input type="date" id='date' />
                                            {/* <label htmlFor="date">
                                                <MdCalendarToday />
                                            </label> */}
                                        </div>
                                        <div className="inputHolder">
                                            <label htmlFor="Time">Time</label>
                                            <input type="datetime-local" name="" id="" />
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
                                </div>
                            </>
                    }
                </div>
            </div>
        </div >
    )
}

export default AddBooking