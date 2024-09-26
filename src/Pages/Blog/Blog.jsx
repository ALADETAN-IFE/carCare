import Header from "../../Components/Header/Header"
import "./blog.css"
import "../../Components/HeroPage/heroPage.css"
import BlogArticle from "./BlogArticle"
import Maintenance from "./Maintenance"
import Post from "./Post"
import Newsletter from "../../Components/Footer/Newsletter/Newsletter"
import Footer from "../../Components/Footer/Footer"

const Blog = () => {
    return (
        <div className="blog">
            <Header/>
      <div className="heropart">
      <div className="carousel__container">
      {/* This is a background color */}
      <div className="carousel__bgColor"></div>
      {/* <img
        src={image}
        className="carousel__image"/> */}

      {/* Text Content Overlay */}
      <div className="carousel__text-container">
       <div className="carousel__text">
       <h1 className="carousel__title">
             Stay Informed with <br />
             CarCare Insights
        </h1>
        <p className="carousel__description">Explore        expert tips, industry news, and 
            the latest updates to keep your car in 
            top shape.</p>
       </div>
      
    </div>
 </div> 

     </div> 
     <BlogArticle/>
     <Maintenance/>
     <Post/>
     <Newsletter/>
     <Footer/>
        </div>
    )
}

export default Blog