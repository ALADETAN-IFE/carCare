import './joinOurCommunity.css';
import driverImg from "../../../assets/images/joinOurCommunity.png"
import { useNavigate } from 'react-router-dom';

const JoinOurCommunity = () => {
    const navigate = useNavigate()
    return (
        <section className='joinOurCommunity'>
            <div className="joinOurCommunityWrapper">
                <div className="leftJoin">
                    <div className="leftJoinTop">
                        <h4>Join Our Community of Trusted Mechanics and Car Owners</h4>
                        <p>Easily connect with well-vetted technicians, track your vehicle expenses and maintenance history, and enjoy a seamless car ownership experience.</p>
                    </div>
                    <button className='leftJoinTopBtn'
                    onClick={()=> navigate("/signup")}
                    >Join now</button>
                </div>
                <div className="rightJoin">
                    <img src={driverImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default JoinOurCommunity