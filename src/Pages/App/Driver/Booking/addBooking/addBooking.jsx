import { useState } from 'react'
import './addBooking.css'
import { MdCalendarToday } from 'react-icons/md'

const AddBooking = () => {
    // const Car Brand = []
    // const Brand Model = []
    // const Car Yeard = []
    const Location = ["Agege", "Amuwo - Odofin", "Apapa", "Epe", "Eti-Osa", "Ibeju - Lekki",]
    const [bookingForms, setbookingForms] = useState(0)
    // console.log(new Date().)
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
                                            <input type="date" id='date'/>
                                            {/* <label htmlFor="date">
                                                <MdCalendarToday />
                                            </label> */}
                                        </div>
                                        <div className="inputHolder">
                                            <label htmlFor="Time">Time</label>
                                            <input type="datetime-local" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="pickService">
                                        <div className='pickServiceInfo'>
                                            <p>Select your Service</p>
                                        </div>
                                        <button className="pickServicebtn">Select</button>
                                    </div>
                                    <div className="pickService">
                                        <div className='pickServiceInfo'>
                                            <p>Select a Mechanic</p>
                                        </div>
                                        <button className="pickServicebtn">Select</button>
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