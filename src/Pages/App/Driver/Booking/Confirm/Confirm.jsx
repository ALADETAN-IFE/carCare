import { Link, useNavigate, useParams } from 'react-router-dom'
import './confirm.css'
import { useDispatch, useSelector } from 'react-redux'
import { setbooked, setmechTobeBooked, setuserBookingForm } from '../../../../../Global/Redux-actions/carCare'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { carServices } from "./prices"

const Confirm = ({ setbook, setpages }) => {
  const { mechId } = useParams()
  const { mechTobeBooked,
    userBookingForm,
    UserDatas,
    UserDataWithToken,
    booked
  } = useSelector((state) => state.carCare)

  const [calculatedFee, setCalculatedFee] = useState(0);
  const [bookingInputsObject, setbookingInputsObject] = useState(userBookingForm)
  const [mechTobeBookedDetails, setmechTobeBookedDetails] = useState(mechTobeBooked)
  const [partsPrices, setpartsPrices] = useState()
  const [labourCost, setlabourCost] = useState()
  const [totalAmount, settotalAmount] = useState()

  const [isSuccess, setisSuccess] = useState(false)
  const [loading, setloading] = useState(true)
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

  // useEffect(() => {
  //   const filter = carServices?.find(brands => brands.brand === bookingInputsObject.brand)
  //   console.log(filter, "filter")
  //   const filter2 = [filter]?.find(service => service.services
  //     // === bookingInputsObject.service[0].name
  //   )
  //   console.log(filter2, "filter2")
  //   // const filter3 = filter?.find(services => services.name === bookingInputsObject.service[0].name)
  //   const partsPrices = filter2?.partsCost
  //   setpartsPrices(partsPrices)
  //   const labourCost = filter2?.laborCost
  //   setlabourCost(labourCost)
  //   setloading(false)
  // }, [])
  useEffect(() => {
    setloading(true)
    // Find the brand that matches the selected brand
    const filter = carServices.find(brands => brands.brand === bookingInputsObject.brand)
    console.log(filter, "filter")

    if (filter) {
      // Calculate total partsPrices and laborCost for the selected services
      const { partsPrices, laborCost } = bookingInputsObject.service.reduce((acc, service) => {
        const foundService = filter.services.find(s => s.name === service.name);
        if (foundService) {
          acc.partsPrices += foundService.partsCost || 0; // Add parts cost if exists
          acc.laborCost += foundService.laborCost || 0; // Add labor cost if exists
        }
        console.log(acc, "acc")
        return acc;
      }, { partsPrices: 0, laborCost: 0 }); // Initial values


      // Format prices to thousand format
      const formattedPartsPrices = new Intl.NumberFormat().format(partsPrices);
      const formattedLaborCost = new Intl.NumberFormat().format(laborCost);
      const formattedTotalPrice = new Intl.NumberFormat().format(partsPrices + laborCost);

      // Update the state with the formatted totals
      setpartsPrices(formattedPartsPrices);
      setlabourCost(formattedLaborCost);
      settotalAmount(formattedTotalPrice)
      setloading(false)
    }
  }, [bookingInputsObject]); // Add bookingInputsObject as a dependency if it can change



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

  const sendUserDetails = async (data) => {
    // onSuccess: function (data) {
    // Handle when payment is successful
    console.log(data, "data")
    const url = import.meta.env.VITE_API_Url
    const token = UserDataWithToken.token
    const totalAmount = data.amount_paid
    const expectedAmount = data.amount
    const paidAmount = data.amount_paid; // Convert back to Naira (from kobo)
    const fee = calculateFivePercent(paidAmount); // Calculate 5% fee
    setCalculatedFee(fee);
    const calculatedFee = totalAmount - fee;
    axios.post(`${url}/api/v1/customer-Booking/${mechId}`,
      {
        ...bookingInputsObject,
        totalCost: calculatedFee, labourCost: "15000",
        expectedAmount
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,  // Add token for authentication
        },
      }).then(res => {
        console.log(res, "res")
        toast.success(res?.data?.message)
        setTimeout(() => {
          dispatch(setuserBookingForm({}))
          navigate("/app/booking")
          // setbook(false)
          dispatch(setbooked(false))
          // setpages("booking")
        }, 2000);
      }).catch((error) => {
        console.log(error, "error")
        if (error?.response?.data?.message == "You cannot book again until 30 minutes have passed since your last pending appointment.") {
          toast.info("You cannot book again until 30 minutes have passed since your last pending appointment.")
          setTimeout(() => {
            dispatch(setuserBookingForm({}))
            navigate("/app/booking")
            setbook(false)
            setpages("booking")
          }, 2000);
        }
      }
      )
    // },
  }
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const debouncedSendUserDetails = debounce(sendUserDetails, 300); // 300ms delay
  const [selectedMethod, setSelectedMethod] = useState(''); // Default to card

  // const handlePayment = () => {
  //   payKorapay(selectedMethod);
  // };
  const calculateFivePercent = (paidAmount) => {
    return (5 / 100) * paidAmount; // Calculate 5% of the amount paid
  };

  function payKorapay() {
    window.Korapay.initialize({
      key: import.meta.env.VITE_KORA_Public_Key,
      reference: `carCare_${Date.now()}`,
      amount: Number(totalAmount.replace(/,/g, '')),
      currency: "NGN",
      customer: {
        name: UserDatas.fullName,
        email: UserDatas.email
      },
      notification_url: "https://example.com/webhook",
      // notification_url: sendUserDetails(),
      // onClose: function () {
      //   // Handle when modal is closed
      // },
      // metadata: {
      //   custom_fields: [
      //     {
      //       display_name: "Payment for",
      //       variable_name: "payment_for",
      //       value: "Car repair",
      //     },
      //   ],
      // },
      metadata: {
        payment_for: "Car repair", // Direct key-value metadata
      },
      //  metadata: {
      //   payment_for: "Car repair",
      //   payment_method: selectedMethod // Optionally include selected payment method
      // },

      // onSuccess: sendUserDetails(),
      // onSuccess: function (data) {
      //   // Handle when payment is successful
      //   console.log(data, "success")
      //   if (isSuccess == false) {
      //     setisSuccess(true)
      //     sendUserDetails(data)
      //   }
      // },
      onSuccess: function (data) {
        // Handle when payment is successful
        console.log(data, "success")
        debouncedSendUserDetails(); // Use debounced function
      },
      // onSuccess: function (data) {
      //   // Handle when payment is successful
      //   console.log(data, "data")
      //   const url = import.meta.env.VITE_API_Url
      //   const token = UserDataWithToken.token
      //   axios.post(`${url}/api/v1/customer-Booking/${mechId}`,
      //     {...bookingInputsObject, totalCost:totalAmount },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,  // Add token for authentication
      //       },
      //     }).then(res => {
      //       console.log(res, "res")
      //       toast.success(res?.data?.message)
      //       setTimeout(() => {
      //         dispatch(setuserBookingForm({}))
      //         navigate("/app")
      //         setbook(false)
      //         setpages("booking")
      //       }, 2000);
      //     }).catch((error) => {
      //       console.log(error, "error")
      //       if (error?.response?.data?.message == "You cannot book again until 30 minutes have passed since your last pending appointment.") {
      //         toast.info("You cannot book again until 30 minutes have passed since your last pending appointment.")
      //         setTimeout(() => {
      //           dispatch(setuserBookingForm({}))
      //           navigate("/app")
      //           setbook(false)
      //           setpages("booking")
      //         }, 2000);
      //       }
      //     }
      //     )
      // },

      onFailed: function (data) {
        // Handle when payment fails
        console.log(data, "failed");

        Swal.fire({
          icon: 'error',
          title: 'Payment Failed',
          text: 'The payment process was not successful. Please try again.',
          footer: data?.message || 'Unknown error occurred',
        });

        // Optionally, dispatch or reset form
        // dispatch(setuserBookingForm({}));
      },
      onClose: function () {
        // Handle when modal is closed

        Swal.fire({
          icon: 'warning',
          title: 'Payment Process Closed',
          text: 'You have closed the payment process. You can try again whenever you are ready.',
          footer: 'If this was a mistake, please restart the payment process.',
        });
      },

      onPending: function (data) {
        // Handle when payment is pending
        console.log(data, "pending");

        Swal.fire({
          icon: 'info',
          title: 'Payment Pending',
          text: 'Your payment is currently being processed. Please wait for confirmation.',
          footer: 'We will update you once the payment is confirmed.',
        });

        // Optionally, dispatch or reset form
        // dispatch(setuserBookingForm({}));
      },

      onTokenized: function (data) {
        // Handle when payment is tokenized
        console.log(data, "tokenized");

        Swal.fire({
          icon: 'success',
          title: 'Payment Tokenized',
          text: 'Your payment has been successfully tokenized!',
          footer: 'You will receive further details shortly.',
        });

        // Optionally, dispatch or reset form
        // dispatch(setuserBookingForm({}));
      },

    });
  }

  return (
    <div className="confirmBookingContainer" >
      <div className='confirmBookingBox'>
        <div className="confirmBookingHead">
          <div className="confirmBookingHeadWrapper">
            <h3>Review & Confirm</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10" fill="none" onClick={() => dispatch(setbooked(false))}>
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
                  <span className='span2'> {bookingInputsObject?.date}, {bookingInputsObject?.time}</span>
                </div>
                <div>
                  <span className='span1'>Location:</span>
                  <span className='span2'>{bookingInputsObject?.serviceType} at
                    {" "}
                    {
                      bookingInputsObject?.serviceType == "Pickup & Delivery" ?
                        `${bookingInputsObject?.pickupLocation}`
                        : bookingInputsObject?.serviceType == "Visit Autoshop" ?
                          `${mechTobeBookedDetails?.businessAddress}`
                          :
                          `${bookingInputsObject?.address}`
                    }
                  </span>
                </div>
              </div>
              <div className="confirmBookingMiddleTopMech">
                <div className="confirmBookingMiddleTopMechLeft"
                  style={{ background: !mechTobeBookedDetails?.profilePicture?.pictureUrl ? `#FBFBFB` : `url(${mechTobeBookedDetails?.profilePicture?.pictureUrl})` }}
                ></div>
                <div className="confirmBookingMiddleTopMechRight">
                  <h3>{mechTobeBookedDetails?.fullName}</h3>
                  {/* <h4>Rating: ★★★★☆ (4.5/5)</h4> */}
                  <p>Years of Experience: <span>
                    {
                      mechTobeBookedDetails?.yearsOfExperience ?
                        <>
                          {experienceCalc(mechTobeBookedDetails?.yearsOfExperience)}
                        </>
                        : <>2 years</>
                    }
                  </span></p>
                  <Link onClick={changeMech}>Change</Link>
                </div>
              </div>
              <div className="confirmBookingMiddleTopCost">
                {/* <div>
                  <h3>Service Cost:</h3>
                  <p>₦ <span>70,000</span></p>
                </div> */}
                <div>
                  <h3>Parts Replacement:</h3>
                  <p>₦ <span>{loading ? "loading price.." : `${partsPrices}`}</span></p>
                </div>
                <div>
                  <h3>Labor  Cost</h3>
                  <p>₦ <span>{loading ? "loading price.." : `${labourCost}`}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmBookingMiddleBottom">
            <div className="confirmBookingMiddleBottomWrapper">
              <h3>Total</h3>
              <p>₦<span> {loading ? "loading price.." : `${totalAmount}`}</span></p>
            </div>
          </div>
        </div>
        <div className="confirmBookingBottom">
          <div className="confirmBookingBottomWrapper">
            <button className='go_back' onClick={() => dispatch(setbooked(false))}>BACK</button>
            <button className='checkout_btn'
              onClick={payKorapay}
            // onClick={handlePayment}
            // onClick={sendUserDetails}
            // onClick={()=> dispatch(setuserBookingForm({}))}
            >CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
