import { IoIosClose } from "react-icons/io"
const UnRead = ({handleRead, handleDelete, notes}) => {
    return (
        <div className="notifications read" 
        onClick={()=> handleRead(notes?.customerId)}
        // onClick={()=> handleRead(notes?._id)}
        >
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

export default UnRead

