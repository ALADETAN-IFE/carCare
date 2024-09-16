import { CgMoreVertical } from "react-icons/cg"

const TableDatas = ({ booking, i }) => {
    return (
        <section className='TableDatas'>
            <span className="span1" style={{display: "flex", gap: "10px"}}>
                {/* <div style={{ width: "max-content", display: 'flex', alignItems: 'center' }}> */}
                    <img
                        src={booking?.mechanicImage}
                        alt="Mechanic"
                        style={{ width: '25px', height: '25px', borderRadius: '50%', }}
                    />
                    <span>{booking?.mechanic}</span>
                {/* </div> */}
            </span>
            <span className="span2">{booking?.serviceNumber}</span>
            <span className="span3">{booking?.serviceDetails}</span>
            <span className="span4"
            style={{ color: booking?.status === 'Pending' ? 'orange' : 'green' }}
            >
                {booking?.status}
            </span>
            <span className="span5">{booking?.date}</span>
            <span className="span6">{booking?.totalCost}</span>
            <span className="span7"><CgMoreVertical /></span>
        </section>
    )
}

export default TableDatas