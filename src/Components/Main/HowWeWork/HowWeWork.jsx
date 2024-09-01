import './howWeWork.css'

const HowWeWork = () => {
  const howWeWorkBoxes = [
    {
      borderLeft: "1px solid #000000",
      icon:``,
      header: `Search for Mechanics`,
      body: `Enter your location and the type of service you need to find nearby, highly-rated and reliable mechanics`
    },
    {
      icon:``,
      header: `Choose and Book`,
      body: `Select a mechanic based on ratings and reviews, and choose a convenient time for your service`
    },
    {
      icon:``,
      header: `Easy Delivery or Pickup`,
      body: `Once your car has been fixed, we will either deliver your car to the location you provided or notify you when it's ready for pickup.`
    },
    {
      icon:``,
      header: `Reviews and Ratings`,
      body: `Rate your experience and leave reviews for other car owners to help them choose the best mechanics`
    },
  ]
  return (
    <div className='HowWeWorkBody'>
        <div className="HowWeWorkWrapper">
            <div className="howWeWorkTop">
                <h3>How We Work </h3>
                <p>Get to Know the Easy, Transparent Steps We Use to Provide You with Effective and 
                Stress-Free Car Maintenance Solutions</p>
            </div>
            <div className="howWeWorkBottom">
              <div className="howWeWorkBoxes">
                {
                  howWeWorkBoxes?.map((e, i)=>(
                <div className="howWeWorkBox" key={i}>
                  <div className="boxIcon"></div>
                  <div className="boxesBox" style={{borderLeft: e?.borderLeft}}>
                    <div className="boxesBoxWrapper">
                      <h4>{e?.header}</h4>
                      <p>{e?.body}</p>
                    </div>
                  </div>
                </div>

                  ))
                }
                {/* <div className="howWeWorkBox">
                  <div className="boxIcon"></div>
                  <div className="boxesBox"></div>
                </div>
                <div className="howWeWorkBox">
                  <div className="boxIcon"></div>
                  <div className="boxesBox"></div>
                </div>
                <div className="howWeWorkBox">
                  <div className="boxIcon"></div>
                  <div className="boxesBox"></div>
                </div> */}
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default HowWeWork