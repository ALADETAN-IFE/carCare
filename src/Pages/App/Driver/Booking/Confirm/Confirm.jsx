import { Link } from 'react-router-dom'
import './confirm.css'

const Confirm = ({ setbook }) => {
  return (
    <div className="confirmBookingContainer" >
      <div className='confirmBookingBox'>
        <div className="confirmBookingHead">
          <div className="confirmBookingHeadWrapper">
            <h3>Review & Confirm</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10" fill="none" onClick={() => setbook(false)}>
              <path d="M2.03464 1.01667C1.7902 0.772234 1.39389 0.772234 1.14945 1.01667C0.905016 1.26111 0.905016 1.65742 1.14945 1.90186L4.24761 5.00001L1.14945 8.09816C0.905016 8.3426 0.905016 8.73891 1.14945 8.98335C1.39389 9.22779 1.7902 9.22779 2.03464 8.98335L5.13279 5.8852L8.23095 8.98335C8.47538 9.22779 8.8717 9.22779 9.11613 8.98335C9.36057 8.73891 9.36057 8.3426 9.11613 8.09816L6.01798 5.00001L9.11613 1.90186C9.36057 1.65742 9.36057 1.26111 9.11613 1.01667C8.8717 0.772234 8.47538 0.772234 8.23095 1.01667L5.13279 4.11482L2.03464 1.01667Z" fill="#171717" />
            </svg>
          </div>
        </div>
        <div className="confirmBookingMiddle">
          <div className="confirmBookingMiddleTopWrapper">
            <div className="confirmBookingMiddleTop">
              <div className="confirmBookingMiddleTopDetails">
                <div>
                  <span className='span1'>Service:</span>
                  <span className='span2'>Tire Replacement</span>
                </div>
                <div>
                  <span className='span1'>Date & Time:</span>
                  <span className='span2'> September 10, 2024, 2:00 PM</span>
                </div>
                <div>
                  <span className='span1'>Location:</span>
                  <span className='span2'>On-site Service at [No. 45, Ojulegba road, Ojuelegba, Lagos]</span>
                </div>
              </div>
              <div className="confirmBookingMiddleTopMech">
                <div className="confirmBookingMiddleTopMechLeft"></div>
                <div className="confirmBookingMiddleTopMechRight">
                  <h3>Williams Olagoke</h3>
                  <h4>Rating: ★★★★☆ (4.5/5)</h4>
                  <p>Years of Experience: <span>10 Years</span></p>
                  <Link to={"/mechanics"}>Change</Link>
                </div>
              </div>
              <div className="confirmBookingMiddleTopCost">
                <div>
                  <h3>Service Cost:</h3>
                  <p>₦ <span>70,000</span></p>
                </div>
                <div>
                  <h3>Parts Replacement:</h3>
                  <p>₦ <span>8,000</span></p>
                </div>
                <div>
                  <h3>Labor  Cost</h3>
                  <p>₦ <span>15,000</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmBookingMiddleBottom">
            <div className="confirmBookingMiddleBottomWrapper">
              <h3>Total</h3>
              <p>₦<span> 93,000</span></p>
            </div>
          </div>
        </div>
        <div className="confirmBookingBottom">
          <div className="confirmBookingBottomWrapper">
            <button className='go_back' onClick={() => setbook(false)}>BACK</button>
            <button className='checkout_btn'>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
