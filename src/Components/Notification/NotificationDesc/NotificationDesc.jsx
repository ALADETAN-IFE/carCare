import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
// import {notesss} from "../notify"
import { useSelector } from 'react-redux'
import axios from 'axios'
import "./notificationDesc.css"
import { FaChevronLeft } from 'react-icons/fa'

const NotificationDesc = () => {
    const { id } = useParams()

    const [notesDesc, setnotesDesc] = useState({})
    const [loading, setloading] = useState(true)
    const { UserDataWithToken, notifications } = useSelector((state) => state.carCare)
    const navigate = useNavigate()

    // const getOneNotification = async () => {
    //     setloading(true)
    //     const url = import.meta.env.VITE_API_Url
    //     const token = UserDataWithToken.token
    //     const config = {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       }
    //     try {
    //         const notifications = await axios.get(`${url}/api/v1/mechanics/notifications/${id}`, config)
    //         console.log(notifications, "withAPI")
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         setloading(false)
    //     }
    // }
    useEffect(() => {
        const notesDesc = notifications.filter((note) => note._id === id)
        setnotesDesc(notesDesc[0])
        setloading(false)
        // getOneNotification()
    }, [])
    console.log(id)
    console.log(notesDesc, "notesDesc")
    // fetch notification data based on id and render it here.

    return (
        <div>
            {
                loading ?
                    <ClipLoader />
                    :
                    <div className='notificationDesc'>
                        <div className="notificationDescWrapper">
                            <div className="notificationDescTop">
                                <div className="notificationDescTopArrowHolder" 
                                onClick={()=> navigate(-1)}
                                >
                                    <FaChevronLeft />
                                </div>
                            </div>
                            {/* <button onClick={()=> navigate(-1)}>Go baack</button> */}
                            <div className='notificationDescBody'>

                                <h1>{notesDesc?.title}</h1>
                                <p>{notesDesc?.message}</p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default NotificationDesc