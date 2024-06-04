import { IoMdHome } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { CiSquareQuestion } from "react-icons/ci";


export const AgentMenus = [
  { title: "Agent Profile", path: "myProfile", src: <IoMdHome size={25} /> },
  { title: "Add Property", path: "addProperty", src: <IoMdAdd size={25} /> },
  {
    title: "My Added Property",
    path: "myAddedProperty",
    src: <FaList size={25} />,
  },
  {
    title: "My sold properties",
    path: "mySoldProperty",
    src: <MdSell size={25} />,
  },
  {
    title: "Requested properties",
    path: "requestProperty",
    src: <CiSquareQuestion size={25} />,
  },
];
