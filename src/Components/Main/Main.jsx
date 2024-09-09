import'./main.css'
import HowWeWork from "./HowWeWork/HowWeWork"
import JoinOurCommunity from './JoinOurCommunity/JoinOurCommunity'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import WeService from './We Service/WeService'
import Reviews from './Reviews/Reviews'
import Partner from './Partner/Partner'
import GrowYourMechanicBusiness from './GrowYourMechanicBusiness/GrowYourMechanicBusiness'

const Main = () => {
  return (
    <main>
      <HowWeWork/>
      <JoinOurCommunity/>
      <WhyChooseUs/>
      <GrowYourMechanicBusiness/>
      <WeService/>
      <Reviews/>
      <Partner/>
    </main>
  )
}

export default Main