import'./weService.css'

const WeService = () => {
  const carBrands1 = [
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
  const carBrands2 = [
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
  return (
    <section className='WeService'>
      <div className="weServiceWrapper">
        <div className="weServiceTop">
          <h4>Car Brands We Service</h4>
          <p>Expert Care for Different Make and Model. From luxury to everyday use, we service them all with precision and care</p>
        </div>
        <div className="weServiceBottom">
          <div className="weServiceBottomCarBrandsWrapper">
            {
              carBrands1?.map((e, i)=> (
                <div className="weServiceCarBrands" key={i}>{e}</div>     
              ))
            }
          </div>
          <div className="weServiceBottomCarBrandsWrapper">
            {
              carBrands2?.map((e, i)=> (
                <div className="weServiceCarBrands" key={i}>{e}</div>   
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeService