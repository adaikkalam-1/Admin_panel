import { NavLink } from "react-router-dom";
import { sideBar } from "../../data/constant";

const SideBar = () => {
  return (
    <div className="side_bar">
      <ul>
        {sideBar.map((item,index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
