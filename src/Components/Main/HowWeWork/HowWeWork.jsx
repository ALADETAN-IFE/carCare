import './howWeWork.css'
import { useEffect, useState } from 'react'

const HowWeWork = () => {
  const [border, setborder] = useState(["none", "none", "none"])
  const [width, setwidth] = useState(window.innerWidth)
  // console.log(border)
   // Update the width when the window resizes
  setInterval(() => {
    setwidth(window.innerWidth)
  }, 100);

  // Update the borders based on the width
  useEffect(() => {
    if (width <  "1343" && width > "1026" ) {
      setborder((prev) => {
        const updatedBorders = [...prev];
        updatedBorders[2] = "1px solid #000000"; // Modify the third border
        updatedBorders[0] = "none"; // Modify the first border
        updatedBorders[1] = "none"; // Modify the second border
        return updatedBorders;
      });
    } 
    else if (width <  "1026" && width > "684" ) {
      setborder((prev) => {
        const updatedBorders = [...prev];
        updatedBorders[1] = "1px solid #000000"; // Modify the second border
        updatedBorders[0] = "none"; // Modify the first border
        updatedBorders[2] = "none"; // Modify the third border
        return updatedBorders;
      });
    }
     else if (width < "685" ) {
      setborder(["1px solid #000000", "1px solid #000000", "1px solid #000000"])
    }
    else{
      setborder(["none", "none", "none"])
    }
  }, [width])
  const howWeWorkBoxes = [
    {
      style: {

        borderLeft: "1px solid #000000",
      },
      // icon: offline?.icons?.car,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M18.927 18.927L20.1489 20.1489M20.1489 20.1489V23.2065L27.9424 31L31 27.9424L23.2065 20.1489H20.1489ZM22.0016 11.5008C22.0016 17.3002 17.3002 22.0016 11.5008 22.0016C5.70137 22.0016 1 17.3002 1 11.5008C1 5.70137 5.70137 1 11.5008 1C17.3002 1 22.0016 5.70137 22.0016 11.5008Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      header: `Search for Mechanics`,
      body: `Enter your location and the type of service you need to find nearby, highly-rated and reliable mechanics.`
    },
    {
      style: {

        borderLeft: border[0],
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M26.25 1.875V7.5H20.625V1.875H9.375V7.5H3.75V1.875H0V30H30V1.875H26.25ZM5.625 28.125H1.875V24.375H5.625V28.125ZM5.625 22.5H1.875V18.75H5.625V22.5ZM5.625 16.875H1.875V13.125H5.625V16.875ZM11.25 28.125H7.5V24.375H11.25V28.125ZM11.25 22.5H7.5V18.75H11.25V22.5ZM11.25 16.875H7.5V13.125H11.25V16.875ZM16.875 28.125H13.125V24.375H16.875V28.125ZM16.875 22.5H13.125V18.75H16.875V22.5ZM16.875 16.875H13.125V13.125H16.875V16.875ZM22.5 28.125H18.75V24.375H22.5V28.125ZM22.5 22.5H18.75V18.75H22.5V22.5ZM22.5 16.875H18.75V13.125H22.5V16.875ZM28.125 28.125H24.375V24.375H28.125V28.125ZM28.125 22.5H24.375V18.75H28.125V22.5ZM28.125 16.875H24.375V13.125H28.125V16.875Z" fill="white" />
        <path d="M5.625 0H7.5V5.625H5.625V0ZM22.5 0H24.375V5.625H22.5V0Z" fill="white" />
      </svg>,
      header: `Choose and Book`,
      body: `Select a mechanic based on ratings and reviews, and choose a convenient time for your service.`
    },
    {
      style: {

        borderLeft: border[1],
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M26.9395 19.6553C26.9545 19.4185 26.9995 19.1817 26.9995 18.9449V19.7342L26.9395 19.6553ZM11.9998 18.9449C11.9998 20.0658 12.2248 21.1393 12.6298 22.1024H4.49992V23.6811C4.49992 24.5494 3.82493 25.2598 2.99994 25.2598H1.49997C0.674987 25.2598 0 24.5494 0 23.6811V11.0512L3.11994 1.57874C3.41994 0.663071 4.25992 0 5.2499 0H21.7496C22.7396 0 23.5796 0.663071 23.8796 1.57874L26.9995 11.0512V18.9449C26.9995 14.5876 23.6396 11.0512 19.4996 11.0512C15.3597 11.0512 11.9998 14.5876 11.9998 18.9449ZM7.49986 14.998C7.49986 13.6877 6.49488 12.6299 5.2499 12.6299C4.00492 12.6299 2.99994 13.6877 2.99994 14.998C2.99994 16.3084 4.00492 17.3661 5.2499 17.3661C6.49488 17.3661 7.49986 16.3084 7.49986 14.998ZM23.9995 9.47244L21.7496 2.36811H5.2499L2.99994 9.47244H23.9995ZM29.8044 27.1385L23.6396 20.6499C24.2545 19.008 23.9096 17.082 22.6196 15.74C21.2696 14.3034 19.2446 14.0192 17.6097 14.8086L20.5196 17.8713L18.4947 20.0184L15.5097 16.9399C14.6997 18.6607 15.0747 20.792 16.3947 22.2287C16.9904 22.8683 17.7508 23.3107 18.5822 23.5014C19.4137 23.6921 20.28 23.6229 21.0746 23.3022L27.2395 29.775C27.5095 30.075 27.9145 30.075 28.1845 29.775L29.7444 28.1489C30.0744 27.8648 30.0744 27.3596 29.8044 27.1385Z" fill="white" />
      </svg>,
      header: `Easy Delivery or Pickup`,
      body: `Once your car has been fixed, we will either deliver your car to the location you provided or notify you when it's ready for pickup.`
    },
    {
      style: {

        borderLeft: border[2],
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32" fill="none">
        <path d="M25.2305 31.263C26.4045 30.9921 27.5928 30.2244 27.5928 28.7801C27.5928 28.1933 27.4271 27.7876 27.232 27.441C27.1113 27.2458 27.1267 27.095 27.3071 27.0199C28.2546 26.5988 29.0371 25.7566 29.0371 24.5375C29.0371 23.8603 28.8567 23.2434 28.5107 22.8075C28.3451 22.5816 28.3753 22.4012 28.6455 22.2362C29.3529 21.8446 29.8049 20.9716 29.8049 19.9785C29.8049 19.2865 29.5789 18.5194 29.1571 18.1433C28.9325 17.9327 28.9774 17.7825 29.2329 17.5719C29.7291 17.1958 30 16.4736 30 15.616C30 14.1415 28.8567 12.9526 27.352 12.9526H21.981C20.6265 12.9526 19.7086 12.2458 19.7086 11.1321C19.7086 9.05608 22.2821 5.32454 22.2821 2.63164C22.2821 1.23223 21.3641 0.390015 20.1752 0.390015C19.0923 0.390015 18.5358 1.14236 17.949 2.28564C15.7068 6.70854 12.6679 10.2745 10.3659 13.3288C8.40994 15.9466 7.44704 18.1433 7.40211 21.7541C7.327 27.3062 11.825 31.5333 18.8965 31.5936L20.9879 31.609C22.9587 31.6238 24.403 31.4736 25.2311 31.2624M0 21.8594C0 26.3728 2.79882 30.1493 6.57466 30.1493H9.26756C6.54449 28.1638 5.29593 25.1544 5.35563 21.7092C5.40057 17.8878 6.89049 15.1641 8.21479 13.5092H6.0027C2.61779 13.5092 0 17.181 0 21.8594Z" fill="white" />
      </svg>,
      header: `Reviews and Ratings`,
      body: `Rate your experience and leave reviews for other car owners to help them choose the best mechanics.`
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
              howWeWorkBoxes?.map((e, i) => (
                <div className="howWeWorkBox" key={i}>
                  <div className="boxIcon">
                    {e?.icon}
                    {/* <svg xmlns={e?.icon?.svg?.link} width={e?.icon?.svg?.width} height={e?.icon?.svg?.height} viewBox={e?.icon?.svg?.viewBox} fill={e?.icon?.svg?.fill}>
                    <path d={e?.icon?.path?.d} fill={e?.icon?.path?.fill}/>
                    </svg> */}
                  </div>
                  {/* <div className="boxesBox" style={{borderLeft: e?.borderLeft}}> */}
                  <div className="boxesBox" style={e?.style}>
                    <div className="boxesBoxWrapper">
                      <h4>{e?.header}</h4>
                      <p>{e?.body}</p>
                    </div>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork