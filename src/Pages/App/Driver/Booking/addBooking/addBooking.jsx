import { useEffect, useState } from "react";
import "./addBooking.css";
// import { MdCalendarToday } from "react-icons/md";
// import { FaDotCircle, FaRegCircle } from "react-icons/fa";
// import Select, { components } from "react-select";
// import { customStyles } from "../../../../../Components/reactSelectStyles";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import TimeInput from "./TimeInput";
// import Confirm from '../Confirm/Confirm';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAppbookingFormPage,
  setuserBookingForm,
} from "../../../../../Global/Redux-actions/carCare";
import { toast } from "react-toastify";

import FirstBooking from "./firstBooking";
import SecondBooking from "./SecondBooking";

const AddBooking = ({ book, setbook }) => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
  const { AppbookingFormPage, userBookingForm } = useSelector(
    (state) => state.carCare
  );
  const [bookingFormsPage, setbookingFormsPage1] = useState(AppbookingFormPage);
  const [bookingInputsObject, setbookingInputsObject] = useState(userBookingForm);


  useEffect(() => {
    setbookingFormsPage1(AppbookingFormPage);
  }, [AppbookingFormPage]);


  useEffect(() => {
    setbookingInputsObject(userBookingForm);
  }, [userBookingForm]);

  const setbookingFormsPage = (pageName) => {
    dispatch(setAppbookingFormPage(pageName));
  };

  console.log(bookingInputsObject);

  
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


  // useEffect(() => {
  //     setbookingInputsObject({ ...bookingInputsObject, time: time })
  //     // setbookingInputsObject({ ...bookingInputsObject, time: submittedTime })

  // }, [time])

  useEffect(() => {
    dispatch(setuserBookingForm(bookingInputsObject));
  }, [bookingInputsObject]);

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
        toast.error("Car brand is required");
      } else if (!bookingInputsObject?.model) {
        toast.error("Car's model is required");
      } else if (!bookingInputsObject?.year) {
        toast.error("Car year is required");
      } else if (!bookingInputsObject?.carLocation) {
        toast.error("Car's currrent location is required");
      } else if (!bookingInputsObject?.city) {
        toast.error("Car's currrent city is required");
      } else if (!bookingInputsObject?.date) {
        toast.error("Appointment date is required");
      } else if (!bookingInputsObject?.time) {
        toast.error("Appointment time is required");
      } else if (!bookingInputsObject?.service) {
        toast.error("service to be done is required");
      } else if (!bookingInputsObject?.mechName) {
        toast.error("Mechanic is required");
      } else if (!bookingInputsObject?.serviceType) {
        toast.error("Service type is required");
      }
    } else {
      setbook(true);
    }
  };



  // console.log(carData, "carData")
  // console.log(BrandModels(), "BrandModels")
  // console.log(bookingInputsObject, "BrandModels")

  return (
    <div className="addBookingPage">
      <div className="addBookingPageWrapper">
        <div className="addBookingHeader">
          <h3>Create A New BOOKING</h3>
        </div>
        <div className="addBookingFormWrapper">
          {bookingFormsPage == 0 ? (
            <FirstBooking
            setbookingInputsObject={setbookingInputsObject}
            bookingInputsObject={bookingInputsObject}
            setbookingFormsPage={setbookingFormsPage}
            />
          ) : bookingFormsPage == 1 ? (
            <SecondBooking
            setbookingInputsObject={setbookingInputsObject}
            bookingInputsObject={bookingInputsObject}
            openConfirm={openConfirm}
            setbookingFormsPage={setbookingFormsPage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AddBooking;
