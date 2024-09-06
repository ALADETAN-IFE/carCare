import { RxAvatar } from 'react-icons/rx'
import './reviews.css'

const Reviews = () => {
  return (
    <section className='Reviews'>
      <div className="reviewsBgBlueCard"></div>
      <div className="reviewsBlackCard">
        <div className="reviewsBlackCardWrapper">
          <div className="reviewsBlackCardLeft">
            <div className="reviewsBlackCardLeftTop">
              <h4>Hear from Our Happy Customers</h4>
              <p>Learn how CarCare has delivered exceptional service and peace of mind to our users.</p>
            </div>
            <button className='reviewsBlackCardLeftBtn'>Join now</button>
          </div>
          <div className="userReview">
            <div className="polygonHolder">
              <svg xmlns="http://www.w3.org/2000/svg" width="88" height="104" viewBox="0 0 88 104" fill="none">
                <path d="M44 104L87.3013 0.5H0.69873L44 104Z" fill="#022E50" />
              </svg>

            </div>
            <div className="userReviewImg">
              <RxAvatar size={400} />
            </div>
            <div className="userReviewDetails"></div>
            <div className="userReviewCard">
              <div className="userReviwCardWrapper">
                <div className="userReviewCardQuoteIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="50" viewBox="0 0 56 50" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.375 0C5.55164 0 3.80295 0.877973 2.51364 2.44078C1.22433 4.00358 0.5 6.1232 0.5 8.33333V20.8333C0.5 23.0435 1.22433 25.1631 2.51364 26.7259C3.80295 28.2887 5.55164 29.1667 7.375 29.1667H17.6875C17.6875 32.4819 16.601 35.6613 14.667 38.0055C12.7331 40.3497 10.11 41.6667 7.375 41.6667H3.9375C3.02582 41.6667 2.15148 42.1056 1.50682 42.8871C0.862165 43.6685 0.5 44.7283 0.5 45.8333C0.5 46.9384 0.862165 47.9982 1.50682 48.7796C2.15148 49.561 3.02582 50 3.9375 50H7.375C11.9334 50 16.3051 47.8051 19.5284 43.8981C22.7517 39.991 24.5625 34.692 24.5625 29.1667V8.33333C24.5625 6.1232 23.8382 4.00358 22.5489 2.44078C21.2595 0.877973 19.5109 0 17.6875 0H7.375ZM38.3125 0C36.4891 0 34.7405 0.877973 33.4511 2.44078C32.1618 4.00358 31.4375 6.1232 31.4375 8.33333V20.8333C31.4375 23.0435 32.1618 25.1631 33.4511 26.7259C34.7405 28.2887 36.4891 29.1667 38.3125 29.1667H48.625C48.625 32.4819 47.5385 35.6613 45.6045 38.0055C43.6706 40.3497 41.0475 41.6667 38.3125 41.6667H34.875C33.9633 41.6667 33.089 42.1056 32.4443 42.8871C31.7997 43.6685 31.4375 44.7283 31.4375 45.8333C31.4375 46.9384 31.7997 47.9982 32.4443 48.7796C33.089 49.561 33.9633 50 34.875 50H38.3125C42.8709 50 47.2426 47.8051 50.4659 43.8981C53.6892 39.991 55.5 34.692 55.5 29.1667V8.33333C55.5 6.1232 54.7757 4.00358 53.4864 2.44078C52.197 0.877973 50.4484 0 48.625 0H38.3125Z" fill="#0066B2" />
                  </svg>
                </div>
                <div className="userReviewReview">
                  CarCare has been a game-changer for me. As someone with a busy schedule, being able to book a mechanic the comfort of my home and have my car fixed has made my life so much easier. I highly recommend it
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews