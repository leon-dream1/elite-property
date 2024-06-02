/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavMenuItems = ({ content, path, activeColor, defaultColor }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? activeColor : defaultColor) + " hover:text-[#DAA520]"
      }
      to={path}
    >
      {content}
    </NavLink>
  );
};

export default NavMenuItems;




