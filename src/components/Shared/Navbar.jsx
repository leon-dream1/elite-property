import NavMenuItems from "../NavMenuItems/NavMenuItems";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:p-2 bg-[#F8F9FA]">
      <div className="navbar max-w-[1400px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 lg:space-y-0"
            >
              <NavMenuItems
                content="Home"
                path="/"
                activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
                defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
              />
              <NavMenuItems
                content="All Property"
                path="/allProperty"
                activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
                defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
              />
              <NavMenuItems
                content="DashBoard"
                path="/dashBoard"
                activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
                defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
              />
              <NavMenuItems
                content="Login"
                path="/login"
                activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
                defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
              />
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-[35px] font-playfair font-bold cursor-pointer"
          >
            Elite Property
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10">
            <NavMenuItems
              content="Home"
              path="/"
              activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
              defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
            />
            <NavMenuItems
              content="All Property"
              path="/allProperty"
              activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
              defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
            />
            <NavMenuItems
              content="DashBoard"
              path="/dashBoard"
              activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
              defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
            />
            <NavMenuItems
              content="Login"
              path="/login"
              activeColor="text-[20px] font-playfair text-[#333333] font-extrabold"
              defaultColor="text-[20px] text-[#003366] font-open-sans font-medium"
            />
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-4 lg:space-x-6">
            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white text-[18px] px-[15px] lg:px-[25px] py-[5px] lg:py-[15px] rounded-md font-playfair hover:opacity-[0.8]"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-black text-white text-[18px] px-[15px] lg:px-[25px] py-[5px] lg:py-[15px]  rounded-md font-playfair hover:opacity-[0.8]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
