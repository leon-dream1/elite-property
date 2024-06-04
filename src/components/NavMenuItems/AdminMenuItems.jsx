import { IoMdHome } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { MdManageHistory } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";

export const AdminMenus = [
  { title: "Admin Profile", path: "myProfile", src: <IoMdHome size={25} /> },
  {
    title: "Manage Properties",
    path: "manageProperties",
    src: <MdManageHistory size={25} />,
  },
  {
    title: "Manage Users",
    path: "manageUsers",
    src: <GrUserManager size={25} />,
  },
  {
    title: "Manage reviews",
    path: "manageReviews",
    src: <VscPreview size={25} />,
  },
];
