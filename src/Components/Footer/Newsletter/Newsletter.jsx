import './newsletter.css'
// import mobileImg from '../../../assets/images/NewsLetter/mobile NewsLetter img.png'

const Newsletter = () => {
  return (
    <section className='Newsletter'>
      <div className="NewsletterWrapper">

        <div className='Newsletter__text'>
          <h1>Never Miss an Update</h1>
          <p>Sign up for our newsletter to receive essential car care tips, company news, and special discounts from CarCare. Stay 
            connected with all the updates, features, and promotions designed to make car maintenance easier for you</p>
        </div>
        <div className='Newsletter__input'>
          <input type="email" placeholder='Email' required={true} />
          <button className='Newsletter__btn' type='submit'>
            Suscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
