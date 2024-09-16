import ScrollToTop from "../ScrollToTop"
import "./footer.css"
import FooterDetails from "./FooterDetails/FooterDetails"
import Newsletter from "./Newsletter/Newsletter"

const Footer = () => {
  return (
    <footer>
      <Newsletter/>
      <FooterDetails/>
      <ScrollToTop/>
    </footer>
  )
}

export default Footer