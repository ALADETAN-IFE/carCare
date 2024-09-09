import Footer from "../../../../Components/Footer/Footer"
import LayoutHeader from "../../../../Layout/LayoutHeader/LayoutHeader"
import "./serviceList.css"
import serviceListimg from '../../../../assets/images/serviceListimg.png'
import ServiceCategory from "./ServiceCategory/ServiceCategory"

const ServiceList = () => (
  <div className="ServiceList__container">
    <div>
      <LayoutHeader />
    </div>
    <div className="heropicture">
      <img src={serviceListimg} alt="" />
    </div>

    <div className="serviceList__main">
      <div>
           <ServiceCategory/>
      </div>
      <div className="serviceSelect">
        <div className="selectBox">
          <input type="checkbox" name="" id="" />
          <div className="categoryDetails"></div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails"></div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails"></div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails"></div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails"></div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails"></div>
        </div>
        <div className="selectBox">
        <input type="checkbox" name="" id="" />
        <div className="categoryDetails"></div>
        </div>

      </div>
    </div>

    <div>
      <Footer/>
    </div>


  </div>
)

export default ServiceList