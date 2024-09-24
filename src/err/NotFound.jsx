import "./notFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not_found_container">
      <h1>404-Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist</p>
      <Link to="/" className="back_home_btn">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound