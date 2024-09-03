import './newsletter.css'

const Newsletter = () => {
  return (
    <section className='Newsletter'>
      <div className='Newsletter__text'>
      <h1>Never Miss an Update</h1>
      <p>Sign up for our newsletter to receive essential car care tips, company news, and special discounts from CarCare. Stay <br /> 
      connected with all the updates, features, and promotions designed to make car maintenance easier for you</p>
      </div>
      <div className='Newsletter__input'>
        <input type="email" placeholder='Email' />
        <div className='Newsletter__btn'>
        <button type="submit">Suscribe</button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter