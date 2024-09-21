import { Link, useNavigate, useParams } from 'react-router-dom'
import './confirm.css'
import { useDispatch, useSelector } from 'react-redux'
import { setmechTobeBooked, setuserBookingForm } from '../../../../../Global/Redux-actions/carCare'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Confirm = ({ setbook }) => {
  const { mechId } = useParams()
  const { mechTobeBooked,
    userBookingForm,
    UserDatas,
    UserDataWithToken
  } = useSelector((state) => state.carCare)
  const [bookingInputsObject, setbookingInputsObject] = useState(userBookingForm)
  const [mechTobeBookedDetails, setmechTobeBookedDetails] = useState(mechTobeBooked)
  const [totalAmount, settotalAmount] = useState(93000)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const changeMech = () => {
    dispatch(setmechTobeBooked({}))
    setbookingInputsObject({ ...bookingInputsObject, mechName: "" })
    setTimeout(() => {
      navigate("/mechanics")
    }, 1000);
  }
  useEffect(() => {
    dispatch(setuserBookingForm(bookingInputsObject))
  }, [bookingInputsObject])

  const experienceCalc = (years) => {
    console.log(years)
    if (years > 10 && years < 20) {
      return ` 10 + years`
    }
    if (years > 20 && years < 30) {
      return ` 20 + years`
    }
    if (years > 30) {
      return ` 20 + years`
    }
    if (years < 2) {
      return ` ${years} year`
    }
    else {
      return ` ${years} years`
    }
  }

  const sendUserDetails = async () => {
    const token = UserDataWithToken.token
    try {
      const url = import.meta.env.VITE_API_Url
      const res = await axios.post(`${url}/api/v1/customer-Booking/${mechId}`,
        bookingInputsObject,
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Add token for authentication
          },
        }
      )
      console.log(res, "res")
    } catch (error) {
      console.log(error, "error")

    }
  }


  function payKorapay() {
    window.Korapay.initialize({
      key: import.meta.env.VITE_KORA_Public_Key,
      reference: `carCare_${Date.now()}`,
      amount: Number(totalAmount),
      currency: "NGN",
      customer: {
        name: UserDatas.fullName,
        email: UserDatas.email
      },
      notification_url: "",
      // notification_url: sendUserDetails(),
      // onClose: function () {
      //   // Handle when modal is closed
      // },

      // onSuccess: sendUserDetails(),
      onSuccess: function (data) {
        // Handle when payment is successful
        console.log(data, "data")
        // const token = UserDataWithToken.token
        // axios.post(`${url}/api/v1/customer-Booking/${mechId}`,
        //   bookingInputsObject,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,  // Add token for authentication
        //     },
        //   }).then(res => {
        //     console.log(res, "res")
        dispatch(setuserBookingForm({}))
        //   }).catch((error) => {
        //     console.log(error, "error")
        //   }
        //   )
      },

      onFailed: function (data) {
        // Handle when payment fails
        console.log(data, "data")
        // dispatch(setuserBookingForm({}))
      },
      onPending: function (data) {
        // Handle when payment fails
        console.log(data, "data")
        // dispatch(setuserBookingForm({}))
      },
      onTokenized: function (data) {
        // Handle when payment fails
        console.log(data, "data")
        // dispatch(setuserBookingForm({}))
      },
    });
  }
  return (
    <div className="confirmBookingContainer" >
      <div className='confirmBookingBox'>
        <div className="confirmBookingHead">
          <div className="confirmBookingHeadWrapper">
            <h3>Review & Confirm</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10" fill="none" onClick={() => setbook(false)}>
              <path d="M2.03464 1.01667C1.7902 0.772234 1.39389 0.772234 1.14945 1.01667C0.905016 1.26111 0.905016 1.65742 1.14945 1.90186L4.24761 5.00001L1.14945 8.09816C0.905016 8.3426 0.905016 8.73891 1.14945 8.98335C1.39389 9.22779 1.7902 9.22779 2.03464 8.98335L5.13279 5.8852L8.23095 8.98335C8.47538 9.22779 8.8717 9.22779 9.11613 8.98335C9.36057 8.73891 9.36057 8.3426 9.11613 8.09816L6.01798 5.00001L9.11613 1.90186C9.36057 1.65742 9.36057 1.26111 9.11613 1.01667C8.8717 0.772234 8.47538 0.772234 8.23095 1.01667L5.13279 4.11482L2.03464 1.01667Z" fill="#171717" />
            </svg>
          </div>
        </div>
        <div className="confirmBookingMiddle">
          <div className="confirmBookingMiddleTopWrapper">
            <div className="confirmBookingMiddleTop">
              <div className="confirmBookingMiddleTopDetails">
                <div>
                  <span className='span1'>Service:</span>

                  {
                    bookingInputsObject?.service ?
                      <>
                        {
                          bookingInputsObject?.service.map((e, i) => (
                            <span className='span2' key={i}>{e?.name}</span>
                          ))
                        }
                      </>
                      : null
                  }
                </div>
                <div>
                  <span className='span1'>Date & Time:</span>
                  <span className='span2'> September 10, 2024, 2:00 PM</span>
                </div>
                <div>
                  <span className='span1'>Location:</span>
                  <span className='span2'>On-site Service at [No. 45, Ojulegba road, Ojuelegba, Lagos]</span>
                </div>
              </div>
              <div className="confirmBookingMiddleTopMech">
                <div className="confirmBookingMiddleTopMechLeft"
                  style={{ background: !mechTobeBookedDetails?.profilePicture?.pictureUrl ? `#FBFBFB` : `url(${mechTobeBookedDetails?.profilePicture?.pictureUrl})` }}
                ></div>
                <div className="confirmBookingMiddleTopMechRight">
                  <h3>{mechTobeBookedDetails?.fullName}</h3>
                  <h4>Rating: ★★★★☆ (4.5/5)</h4>
                  <p>Years of Experience: <span> {experienceCalc(mechTobeBookedDetails?.yearsOfExperience)}</span></p>
                  <Link onClick={changeMech}>Change</Link>
                </div>
              </div>
              <div className="confirmBookingMiddleTopCost">
                <div>
                  <h3>Service Cost:</h3>
                  <p>₦ <span>70,000</span></p>
                </div>
                <div>
                  <h3>Parts Replacement:</h3>
                  <p>₦ <span>8,000</span></p>
                </div>
                <div>
                  <h3>Labor  Cost</h3>
                  <p>₦ <span>15,000</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmBookingMiddleBottom">
            <div className="confirmBookingMiddleBottomWrapper">
              <h3>Total</h3>
              <p>₦<span> {totalAmount}</span></p>
            </div>
          </div>
        </div>
        <div className="confirmBookingBottom">
          <div className="confirmBookingBottomWrapper">
            <button className='go_back' onClick={() => setbook(false)}>BACK</button>
            <button className='checkout_btn'
              onClick={payKorapay}
              // onClick={()=> dispatch(setuserBookingForm({}))}
            >CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
