import "./serviceList.css"
const ServiceList = () => (
  <div className="ServiceList__container">
    <div>
      <LayoutHeader />
    </div>
    <div className="heropicture">
      <img src={serviceListimg} alt="" />
    </div>

    <div className="serviceList__main">
      <div className="serviceCategoryCall">
           <ServiceCategory/>
      </div>
      <div className="serviceSelect">
        <div className="selectBox">
          <input type="checkbox" name="" id="" />
          <div className="categoryDetails">
            <div className="categoryDetails__text">
              <h1>Tire Replacement (One)</h1>
              <p>Parts Needed: 
                 - 1 Tire 
                 - Valve Stems 
                 - Tire Balancing Weights (optional)      </p>
            </div>
          </div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails">
        <div className="categoryDetails__text">
              <h1>Tire Replacement (One)</h1>
              <p>Parts Needed: 
                 - 2 Tire 
                 - Valve Stems 
                 - Tire Balancing Weights (optional)      </p>
            </div>
        </div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails">
        <div className="categoryDetails__text">
              <h1>Tire Replacement (All)</h1>
              <p>Parts Needed: 
                 - 4 Tire 
                 - Valve Stems 
                 - Tire Balancing Weights (optional)      </p>
            </div>
        </div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails">
        <div className="categoryDetails__text">
              <h1>Wheel Allignments</h1>
              <p>Parts Needed: 
                 None      </p>
            </div>
        </div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails">
        <div className="categoryDetails__text">
              <h1>Wheel Balancing</h1>
              <p>Parts Needed: 
                 - Wheel weights
                       </p>
            </div>
        </div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails">
        <div className="categoryDetails__text">
              <h1>Tire Punctures</h1>
              <p>Parts Needed: 
                 -Tire Patch or Plug 
                 - Sealant(if required)
                       </p>
            </div>
        </div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails">
        <div className="categoryDetails__text">
              <h1>Tire Rotation</h1>
              <p>Parts Needed: 
                </p>
            </div>
        </div>
        </div>
      </div>

      <div className="selection__card">
        <div className="selection__card__text">
          <h1>Your Selection</h1>
          <p>Service Selected (0)</p>
        </div>
        <div className="service__btn">
          <button>Book Now</button>
        </div>
      </div>
      
    </div>
    

    <div>
      <Footer/>
    </div>


  </div>
)

export default ServiceList