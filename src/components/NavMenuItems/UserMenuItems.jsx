import { IoMdHome } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

export const UserMenus = [
  { title: "My Profile", path: "myProfile", src: <IoMdHome size={25} /> },
  { title: "WishList", path: "wishList", src: <FaList size={25} /> },
  {
    title: "Property Bought",
    path: "propertyBought",
    src: <FaShoppingCart size={25} />,
  },
  { title: "My Reviews", path: "myReview", src: <MdReviews size={25} /> },
];
