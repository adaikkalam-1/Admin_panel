import { Outlet } from "react-router-dom";
import SideBar from "./Pages/sidebar/SideBar";
import './layout.css'

const Layout = () => {
  return (
    <div className="layout_grid">
      <SideBar/>
      <h1 className="head-grid">Welcome</h1>
      <main className="outlet_grid">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
