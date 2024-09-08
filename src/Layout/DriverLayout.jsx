import "./layout.css"
import { Outlet } from 'react-router-dom'
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import SideBar from "./SideBar/SideBar"

const DriverLayout = () => {
  return (
    <div className="layout">
      <SideBar/>
      <div className="layoutDown">
      <LayoutHeader />
        <Outlet />
      </div>
    </div>
  )
}

export default DriverLayout