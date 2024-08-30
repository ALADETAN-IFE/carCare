import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import HeroPage from "../../Components/HeroPage/HeroPage"
import Main from "../../Components/Main/Main"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <HeroPage/>
      Home
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home