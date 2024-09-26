import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./about.css"
import AboutHeroPage from "./AboutDetails/AboutHeroPage"
import Offers from "./AboutDetails/Offers/Offers"
import OurMission from "./AboutDetails/OurMission/OurMission"
import OurStory from "./AboutDetails/OurStory/OurStory"
import TheTeam from "./AboutDetails/The-Team/TheTeam"
// import AboutHeroPage from "./AboutDetails/AboutDetails"

const About = () => {
  return (
    <div className="about">
        <Header/>
        <AboutHeroPage/>
        <OurStory/>
        <OurMission/>
        <Offers/>
        <TheTeam/>
        <Footer/>
    </div>
  )
}

export default About