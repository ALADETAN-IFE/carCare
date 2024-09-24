import { IoIosClose } from "react-icons/io"

const Read = () => {
    return (
        <div className="notifications read">
            <div className="notificationsWrapper">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727200703/cafrvombbtrd7kzeebqd.svg"} alt="" />
                <div className="notificationstxt">
                    Your appointment with Anjola Akindoju is confirmed for 6th of Sept. at 10am. Get ready
                    for expert care for your vehicle
                </div>
                <IoIosClose size={35} />
            </div>
        </div>
    )
}

export default Read
