import { IoIosClose } from "react-icons/io"
const UnRead = ({handleRead, handleDelete, notes}) => {
    return (
        <div className="notifications" onClick={()=> handleRead(notes?._id)}>
            <div className="notificationsWrapper">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727200703/cafrvombbtrd7kzeebqd.svg"} alt="" />
                <div className="notificationstxt">
                    Your appointment with Anjola Akindoju is confirmed for 6th of Sept. at 10am. Get ready
                    for expert care for your vehicle
                </div>
                <IoIosClose 
                size={35}
                onClick={()=> handleDelete(notes?._id)}
                />
            </div>
        </div>
    )
}

export default UnRead

