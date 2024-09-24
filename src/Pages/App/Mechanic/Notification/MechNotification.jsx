import Notification from "../../../../Components/Notification/Notification";
import "./mechNotification.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MechNotification = () => {
  const dispatch = useDispatch()
  const UserDataWithToken = useSelector((state)=> state.carCare.UserDataWithToken)

  const getAllNotifications = async () =>{
    const url = import.meta.env.VITE_API_Url
    const token = UserDataWithToken.token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const notifications = await axios.get(`${url}/api/v1/customers/notifications`, config)
      console.log(notifications, "withAPI")
      // dispatch(setnotifications(notifications?.data?.data))
    } catch (error) {
      console.log(error)
      
    } finally{

    }
  }
  useEffect(() => {
   getAllNotifications()
  }, [])
  return (
    <>
      <Notification />
    </>
  );
};

export default MechNotification;
