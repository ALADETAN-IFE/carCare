import { IoIosClose } from "react-icons/io"

const Read = ({handleDelete, notes, viewNotification}) => {
    return (
        <div className="notifications" onClick={()=> viewNotification(notes?._id)}>
            <div className="notificationsWrapper">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727200703/cafrvombbtrd7kzeebqd.svg"} alt="" />
                <div className="notificationstxt">
                {notes?.title}
                </div>
                <IoIosClose 
                size={35}
                onClick={()=> handleDelete(notes?._id)}
                />
            </div>
        </div>
    )
}

export default Read
