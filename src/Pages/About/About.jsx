import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./about.css"
import AboutHeroPage from "./AboutDetails/AboutHeroPage"
import OurStory from "./AboutDetails/OurStory/OurStory"
// import AboutHeroPage from "./AboutDetails/AboutDetails"

const About = () => {
  return (
    <div className="about">
        <Header/>
        <AboutHeroPage/>
        <OurStory/>
        <Footer/>
    </div>
  )
}

export default About