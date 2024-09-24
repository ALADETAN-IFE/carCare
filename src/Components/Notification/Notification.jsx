import { useEffect, useRef, useState } from "react"
import "./Notification.css"
import UnRead from "./UnRead/UnRead"
import Read from "./Read/Read"

const Notification = () => {
    const [typeOfNof, settypeOfNof] = useState("Read")
    const [readNote, setreadNote] = useState(Array(100).fill(null))
    const [unReadNote, setunReadNote] = useState(Array(100).fill(null))
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
                        <button onClick={() => settypeOfNof("Unread")} >Unread Notifications</button>
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
                        <button onClick={() => settypeOfNof("Read")} >Read Notifications</button>
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
                                    <UnRead key={i} />
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
                                    <Read key={i} />
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