import './footerDetails.css'
import footerLogo from '../../../assets/images/footerLogo.png'
import location from '../../../assets/images/location.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'
import instagram from '../../../assets/images/instagram.png'
import linkedin from '../../../assets/images/linkedin.png'





const FooterDetails = () => {
  return (
    <section className='FooterDetails'>
      <div className='footerColumn__1'>
        <div>
          <img src={footerLogo} alt=""  className='footerLogo' />
          <div className='footerSocials'>
            <div className='location'>
               <img src={location} alt="" className='locationIcon' />
               <p>7th Avenue, Wuse 2, Abuja, Nigeria</p>
            </div>
            <div className='socialIcons'>
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt=""/>
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
       <div className='footerContainer__2'>
           <div className='footerInfo'>
            <h1>Information</h1>
            <p>About</p>
            <p>Become a Partner</p>
            <p>FAQ</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact Us</p>
           </div>
           <div className='community'> 
            <h1>Community</h1>
            <p>Networking</p>
            <p>Mechanic Association</p>
            <p>Partners</p>
           </div>
           <div className='more'>
            <h1>More</h1>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Help</p>
            <p>Affiliates</p>
            <p>Manage Cookie Preferences</p>

           </div>
       </div>

      </div>
     
      <div className='footerColumn__2'>
      <hr />
       <div className='footerColumn2__content'>
       <img src={location} alt="" />
       <p>CarCare Inc. All right reserved.</p>
       </div>
        </div>
    </section>
  )
}

export default FooterDetails