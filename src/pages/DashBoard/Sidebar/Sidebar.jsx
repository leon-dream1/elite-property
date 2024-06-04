import { useState } from "react";

import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserMenus } from "../../../components/NavMenuItems/UserMenuItems";
import { AgentMenus } from "../../../components/NavMenuItems/AgentMenuItems";
import { AdminMenus } from "../../../components/NavMenuItems/AdminMenuItems";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [role] = useRole();
  
  console.log("Role", role);
  const sidebarMenus =
    role === "user" ? UserMenus : role === "agent" ? AgentMenus : AdminMenus;

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-[300px]" : "w-20"
        } bg-black h-screen p-5 pt-8 relative duration-300`}
      >
        <span
          className={`absolute cursor-pointer right-0 top-9 w-7 border-dark-purple border-2 rounded-full
           ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <MdArrowForwardIos color="white" size={25} />
        </span>
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Elite Property
          </h1>
        </div>
        <ul className="pt-6 space-y-3">
          {sidebarMenus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-700 text-gray-300 text-sm items-center gap-x-4  `}
              onClick={() => navigate(Menu?.path)}
            >
              <span> {Menu?.src}</span>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[20px]`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
