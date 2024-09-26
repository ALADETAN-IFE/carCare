import { useEffect, useRef, useState } from "react"
import "./Notification.css"
import UnRead from "./UnRead/UnRead"
import Read from "./Read/Read"
import { useNavigate } from "react-router-dom"
import {notesss} from "./notify"
import axios from "axios"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"

const Notification = ({notifications}) => {
    const [typeOfNof, settypeOfNof] = useState("Unread")
    const [readNote, setreadNote] = useState([])
    const [unReadNote, setunReadNote] = useState([])
    const [notes, setnotes] = useState(notifications)
    const { typeOfUser, UserDatas, UserDataWithToken } = useSelector((state) => state?.carCare)
    const navigate = useNavigate()
    // const [notes, setnotes] = useState(
    //     [
    //         {
    //             _id: "64e7fa4a0f1b2a0012345678",
    //             read: false,
    //             notesHead: "Welcome to CarCare. We are glad to have you here with us 1",
    //             notesDesc: `Welcome to CarCare. We are glad to have you here with us! Your journey to smooth 
    //             car maintenance starts now. Let’s keep your vehicle running smoothly with trusted 
    //             mechanics at your fingertips. You can reach us through our support email, phone, 
    //             or chat for assistance. We’re here to help!`
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345679",
    //             read: false,
    //             notesHead: "Car Care Mechanic A",
    //             notesDesc: "Car Care Mechanic A has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345680",
    //             read: false,
    //             notesHead: "Car Care Reminder 1",
    //             notesDesc: "It's time for your scheduled maintenance! Please book an appointment with your preferred mechanic."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345681",
    //             read: false,
    //             notesHead: "Car Care Mechanic B",
    //             notesDesc: "Car Care Mechanic B has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345682",
    //             read: false,
    //             notesHead: "Welcome to CarCare. We are glad to have you here with us 2",
    //             notesDesc: `Your journey to smooth car maintenance starts now! Our trusted mechanics are here to help.`
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345683",
    //             read: false,
    //             notesHead: "Car Care Mechanic C",
    //             notesDesc: "Car Care Mechanic C has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345684",
    //             read: false,
    //             notesHead: "Car Care Service Reminder",
    //             notesDesc: "Reminder: Your car is due for an oil change. Please schedule a service soon."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345685",
    //             read: false,
    //             notesHead: "Car Care Promotion",
    //             notesDesc: "Exclusive offer! Get 10% off on your next car service. Valid until the end of the month."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345686",
    //             read: false,
    //             notesHead: "Car Care Mechanic D",
    //             notesDesc: "Car Care Mechanic D has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345687",
    //             read: false,
    //             notesHead: "Car Care Appointment",
    //             notesDesc: "Your appointment with Mechanic A has been confirmed. Check the details in your dashboard."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345688",
    //             read: false,
    //             notesHead: "Car Care Mechanic E",
    //             notesDesc: "Car Care Mechanic E has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345689",
    //             read: false,
    //             notesHead: "Car Care Reminder 2",
    //             notesDesc: "Your tire rotation is due soon. Schedule an appointment with your mechanic."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345690",
    //             read: false,
    //             notesHead: "Car Care Mechanic F",
    //             notesDesc: "Car Care Mechanic F has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345691",
    //             read: false,
    //             notesHead: "Car Care Notification",
    //             notesDesc: "Your car inspection is coming up. Don't forget to book an inspection."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345692",
    //             read: false,
    //             notesHead: "Welcome to CarCare. We are glad to have you here with us 3",
    //             notesDesc: `CarCare makes it easy to find the right mechanic for your car. Start browsing today!`
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345693",
    //             read: false,
    //             notesHead: "Car Care Mechanic G",
    //             notesDesc: "Car Care Mechanic G has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345694",
    //             read: false,
    //             notesHead: "Car Care Offer",
    //             notesDesc: "Get 5% off on your next booking with Mechanic B. Valid until this week!"
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345695",
    //             read: false,
    //             notesHead: "Car Care Mechanic H",
    //             notesDesc: "Car Care Mechanic H has sent you a message! Please check your inbox."
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345696",
    //             read: false,
    //             notesHead: "Car Care Tip",
    //             notesDesc: "Tip of the day: Regular oil changes keep your engine running smoothly. Schedule one today!"
    //         },
    //         {
    //             _id: "64e7fa4a0f1b2a0012345697",
    //             read: false,
    //             notesHead: "Car Care Mechanic I",
    //             notesDesc: "Car Care Mechanic I has sent you a message! Please check your inbox."
    //         }
    //     ]

    // )

    

    useEffect(()  => {
        setnotes(notifications)
        const read = notes.filter((note) => note.read === true)
        setreadNote(read)
        const unread = notes.filter((note) => note.read === false)
        setunReadNote(unread)
    }, [notes, typeOfNof, notifications])
    console.log(notes, "notes")



    const handleDelete = (noteId) => {
        setnotes(notes.filter((note) => note._id !== noteId))
    }

    const viewNotification = (notificationId) => {
        if (typeOfUser == "Mechanic") {
            
            navigate(`/app/mech/notification/${notificationId}`)
        }else{
            navigate(`/app/notification/${notificationId}`)

        }
    }
    const handleRead = async(notificationId) => {
        const url = import.meta.env.VITE_API_Url; // Ensure this is set in your env variables
        const token = UserDataWithToken?.token;
        // setnotes(notes.map((note) =>
        //     note._id === notificationId ? { ...note, read: true } : note
        // ))
        // console.log(notes, "read")
        console.log(notificationId, "id")
        try {
            const config = {
              headers: {
                Authorization: `Bearer ${token}`, // Add the token for authentication
                "Content-Type": "application/json",
              },
            };
      
            // Send PATCH request to mark the notification as read
            const response = await axios.patch(
              `${url}/api/v1/markNotification/${notificationId}`,
              {notificationId},
              config
            );
      
            if (response.status === 200) {
              toast.success("Notification marked as read!");
              viewNotification(notificationId)
            //   setTimeout(() => {
            // }, 200);
            //   setIsRead(true); // Update the state to show the notification is read
            }
          } catch (error) {
            toast.error("Failed to mark notification as read.");
            console.error("Error marking notification as read:", error);
          }

      
     
    }




    console.log(readNote)
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // const notificationRef = useRef(null);

    // // useEffect(() => {
    // //   // Ensure the notification exists and has a parentNode before applying the style
    // //   if (notificationRef.current && notificationRef.current.parentNode) {
    // //     const parentDiv = notificationRef.current.parentNode;
    // //     parentDiv.style.paddingBottom = '0'; // Example of modifying parent
    // //   }
    // // }, []);

    // useEffect(() => {
    //     // Check if notificationRef exists and has a parent node before applying any styles
    //     if (notificationRef.current && notificationRef.current.closest('.layoutDown')) {
    //       const parentDiv = notificationRef.current.closest('.layoutDown');
    //       parentDiv.style.paddingBottom = '0'; // This will only modify the parent of this specific notification
    //     }
    //   }, []); // Effect runs once after the component mounts



    return (
        <div
            // className='notification'
            // ref={notificationRef}
            className={`notification ${isScrolled ? "scrolled" : ""}`}
        >
            <div
                className="topNotification"
            >
                <div className="topNotificationWrapper">
                    <div
                        className={typeOfNof == "Unread" ?
                            "topNotificationBtnsHolderActive"
                            :
                            "topNotificationBtnsHolder"}
                    // style={typeOfNof == "Unread" ? 
                    //     {borderBottom: "2px solid var(--Secondary-Secondary, #0066B2)"}
                    //     : null
                    // }
                    >
                        <button onClick={() => settypeOfNof("Unread")} >Unread Notifications ({unReadNote?.length})</button>
                    </div>
                    <div
                        className={typeOfNof == "Read" ?
                            "topNotificationBtnsHolderActive "
                            :
                            "topNotificationBtnsHolder"}
                    // style={typeOfNof == "Read" ? 
                    //     {borderBottom: "2px solid var(--Secondary-Secondary, #0066B2)"}
                    //     : null
                    // }
                    >
                        <button onClick={() => settypeOfNof("Read")} >Read Notifications ({readNote?.length})</button>
                    </div>
                </div>
            </div>
            <div className="bodyNotification">
                <div className="bodyNotificationWrapper" onScroll={handleScroll}>
                    {/* <h3>Notifications</h3>
                    <p>You have 1 unread notifications</p>
                    <button>View All</button>
                    <button>Mark All as Read</button>
                    <button>Delete All</button>
                    <button>Clear All</button>
                    <button>Settings</button>
                    <button>Help</button>
                    <button>About</button>
                    <button>Log Out</button>
                    <button>Feedback</button>
                    <button>Terms & Conditions</button>
                    <button>Privacy Policy</button>
                    <button>Contact Us</button>
                    <button>Report a Problem</button>
                    <button>Share Your Experience</button>
                    <button>Rate Us</button>
                    <button>Share Your Feedback</button>
                    <button>Send Feedback</button>
                    <button>Share Your Experience</button>
                    <button>Rate Us</button>
                    <button></button> */}
                    {/* display unread notifications */}
                    {typeOfNof === "Unread" ?
                        <>
                            {
                                unReadNote?.map((e, i) => (
                                    <UnRead
                                        handleDelete={handleDelete}
                                        key={e?._id}
                                        notes={e}
                                        handleRead={handleRead}
                                    />
                                ))
                            }
                        </>
                        : null
                    }
                    {/* display read notifications */}
                    {typeOfNof === "Read" ?
                        <>
                            {
                                readNote?.map((e, i) => (
                                    <Read
                                        handleDelete={handleDelete}
                                        key={e?._id}
                                        notes={e}
                                        viewNotification={viewNotification}
                                    />
                                ))
                            }
                        </>
                        : null
                    }

                </div>
            </div>
        </div >
    )
}

export default Notification