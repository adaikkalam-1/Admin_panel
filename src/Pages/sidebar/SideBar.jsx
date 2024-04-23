import { NavLink } from "react-router-dom";
import { sideBar } from "../../data/constant";
import './sidebar.css'
const SideBar = () => {
  return (
    <div className="side_bar_container">
      <ul>
        {sideBar.map((item,index) => (
          <li key={index}>
            <NavLink className="navLink" to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
