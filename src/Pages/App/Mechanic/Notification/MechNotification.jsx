import Notification from "../../../../Components/Notification/Notification";
import "./mechNotification.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setNotifications } from "../../../../Global/Redux-actions/carCare";

const MechNotification = () => {
  const dispatch = useDispatch()
  const UserDataWithToken = useSelector((state)=> state.carCare.UserDataWithToken)
  const [notifications, setnotifications] = useState([])

  const getAllNotifications = async () =>{
    const url = import.meta.env.VITE_API_Url
    const token = UserDataWithToken.token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const notifications = await axios.get(`${url}/api/v1/mechanics/notifications`, config)
      // console.log(notifications, "withAPI")
      setnotifications(notifications?.data?.data)
      toast.success("Notifications fetched successfully")
      dispatch(setNotifications(notifications?.data?.data))
    } catch (error) {
      // console.log(error)
      const errMsg = error?.response?.data?.message 
      if (errMsg == "No notifications found for this customer.") {
        toast.info("No notifications found")
      }
    } finally{

    }
  }

  // console.log(notifications, "notifications"  )

  useEffect(() => {
   getAllNotifications()
  }, [])
  return (
    <>
      <Notification
       notifications={notifications}
      //  setnotifications={setnotifications}
       />
    </>
  );
};

export default MechNotification;
