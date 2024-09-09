import './partner.css'

const Partner = () => {
  const partners1 = [
    "",
    "",
    "",
    "",
    ""
  ]
  const partners2 = [
    "",
    "",
    "",
    "",
    ""
  ]
  return (
    <section className='Partner'>
      <div className="PartnerTop">
        <h4>Our Partner Network</h4>
        <p>Discover the trusted partners that enhance our services and support our mission to keep your car running smoothly.</p>
      </div>
      <div className="PartnerBottom">
        <div className="PartnerBottom1">
          {
            partners1?.map((e, i)=> (
              <div className="PartnerIcons" key={i}>{e}</div>
            ))
          }
        </div>
        <div className="PartnerBottom2">
        {
            partners2?.map((e, i)=> (
              <div className="PartnerIcons" key={i}>{e}</div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Partner