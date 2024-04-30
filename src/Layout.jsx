import {  Outlet } from "react-router-dom";
import SideBar from "./Pages/sidebar/SideBar";
import "./layout.css";
import { sideBar } from "./data/constant";



const Layout = () => {
  
  
  return (
    <div className="layout_grid">
      <SideBar />
      <div className="head-grid">
        {sideBar.map((item,index) => (    
          <p key={index} >{item.title}</p>
            
        ))}
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
