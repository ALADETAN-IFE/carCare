import "./layout.css"
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <LayoutHeader />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout