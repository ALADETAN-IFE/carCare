import "./layout.css"
import { Outlet } from 'react-router-dom'
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import SideBar from "./SideBar/SideBar"

const DriverLayout = () => {
  return (
    <div className="layout">
      <LayoutHeader />
      <div className="layoutDown">
      <SideBar/>
        <Outlet />
      </div>
    </div>
  )
}

export default DriverLayout