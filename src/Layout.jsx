import {  Outlet } from "react-router-dom";
import SideBar from "./Pages/sidebar/SideBar";
import "./layout.css";
import { AiOutlineLogin } from "react-icons/ai";
// import { sideBar } from "./data/constant";

const Layout = () => {
  const handleClick = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className="layout_grid">
      <SideBar />
      <div className="head-grid"> welcome
     
      {/* {sideBar.map((data, i) => (
          <NavLink key={i} className="navLink" to={data.path}>
            {data.name}
          </NavLink>
        ))} */}
        <div className="icons">
          <div className="sign">
            <AiOutlineLogin onClick={handleClick} />
          </div>
          <div className="text_btn" onClick={handleClick}>
            Logout
          </div>
        </div>
      </div>

      <main className="outlet_grid">
        <div className="con">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;