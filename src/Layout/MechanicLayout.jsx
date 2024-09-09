import "./layout.css"
import { Outlet } from 'react-router-dom'

const MechanicLayout = () => {
  return (
    <div>
      <LayoutHeader />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MechanicLayout