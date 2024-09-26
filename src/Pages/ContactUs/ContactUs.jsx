import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./contactUs.css"

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <Header />
      <div className="ContactUsBody">
        <div className="ContactUsBodyWrapper">
          <div className="ContactUsBodyTop">
            <h3>Get In Touch</h3>
            <p>We’re here to help with any questions, feedback, or support you need. Don’t hesitate to reach out.</p>
          </div>
          <div className="ContactUsBodyBottom">
            <div className="ContactUsBodyBottomLeft">
              <div className="contactInputHolder">
                <input type="text" placeholder="First Name*" />
                <input type="text" placeholder="Last Name*" />
              </div>
              <div className="contactInputHolder">
                <input type="text" placeholder="First Name*" />
                <input type="text" placeholder="Last Name*" />
              </div>
              <textarea placeholder="Message"></textarea>

              <button>Send Message</button>
              
            </div>
            <div className="ContactUsBodyBottomRight">
              <div className="contact__details">
                <h1> Contact Details</h1>
                <p>Reach Out Anytime. We’re Just a Call, Email, or Visit Away, Ready to Assist You</p>
              </div>
              <div className="details__cont">
              <div className="fullDetails">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727300007/qpy8ojajpkuyzjpuzum3.png"} className="contactIcon" alt="" />
                <div className="contact__add">
                  <h1>Address</h1>
                  <p>Visit us at our office: 123 CarCare Avenue, Victoria Island, Lagos</p>
                </div>
              </div>
              <div className="fullDetails">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727301316/oja6dojjpwbyx78crjhc.svg"} className="contactIcon" alt="" />
                <div className="contact__add">
                  <h1>Email</h1>
                  <p>Drop us a line at support@carcare.com and we’ll get back to you within 24 hours.</p>
                </div>
              </div>
              <div className="fullDetails">
                <img src={"https://res.cloudinary.com/dserpv6p5/image/upload/v1727301504/dsrx1psyxrirjopct1kj.png"} className="contactIcon" alt="" />
                <div className="contact__add">
                  <h1>Phone</h1>
                  <p>+2348122967723</p>
                </div>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs