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
              sd
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs