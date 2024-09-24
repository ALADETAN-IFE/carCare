import { IoIosClose } from "react-icons/io"

const Read = ({handleDelete, notes}) => {
    return (
        <div className="notifications read">
            <div className="notificationsWrapper">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727200703/cafrvombbtrd7kzeebqd.svg"} alt="" />
                <div className="notificationstxt">
                   {notes?.notesHead}
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
