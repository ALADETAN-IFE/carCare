import "./Notification.css"

const Notification = () => {
    const [typeOfNof, settypeOfNof] = useState("Read")
  return (
    <div className='notification'>
        <div className="topNotification">
            <div className="topNotificationWrapper">
                <div className="topNotificationBtnsHolder"
                style={typeOfNof == "Unread" ? 
                    {borderBottom: "var(--Secondary-Secondary, #0066B2)"}
                    : null
                }
                >
                    <button>Unread Notifications</button>
                </div>
                <div className="topNotificationBtnsHolder"
                style={typeOfNof == "Read" ? 
                    {borderBottom: "var(--Secondary-Secondary, #0066B2)"}
                    : null
                }
                >
                    <button>Read Notifications</button>
                </div>
            </div>
        </div>
        <div className="bodyNotification"></div>
    </div>
  )
}

export default Notification