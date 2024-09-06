import './newsletter.css'

const Newsletter = () => {
  return (
    <section className='Newsletter'>
      <div className="newsLetterWrpper">
        <div className="newsletterTop">
          <h4>Never Miss an Update</h4>
          <p>Sign up for our newsletter to receive essential car care tips, company news, and special discounts from CarCare. Stay connected with all the updates, features, and promotions designed to make car maintenance easier for you</p>
        </div>
        <div className="subScribeInput">
          <label htmlFor="Email">Email</label>
        </div>
      </div>
    </section>
  )
}

export default Newsletter