import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-[80px] bg-[#F8F9FA] mt-[100px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-6 text-center md:text-start p-0 md:p-10 lg:p-0">
        <div className="">
          <Link
            to={"/"}
            className="text-[20px] md:text-[35px] font-playfair font-extrabold cursor-pointer"
          >
            Elite Property
          </Link>
          <p className="text-[20px] font-inter text-[#003366] mt-2">
            Discover Your Next Property: Your Trusted Real State Partner
          </p>
          <p className="text-[14px] font-raleway text-[#003366] mt-5">
            Embark on unforgettable journeys with our comprehensive hotel
            management services. From meticulously planned itineraries to
            personalized experiences, we specialize in crafting moments that
            linger in memory. Let us be your compass in the world of exploration
            and discovery.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-2 md:space-y-4 text-[18px] lg:pl-10">
          <h6 className="footer-title text-[#003366]">Services</h6>
          <NavLink to={"/"} className="link link-hover text-[#003366]">
            Home
          </NavLink>
          <NavLink to={"/login"} className="link link-hover text-[#003366]">
            Login
          </NavLink>
          <NavLink to={"/register"} className="link link-hover text-[#003366]">
            Register
          </NavLink>
          <NavLink to={"/allProperty"} className="link link-hover text-[#003366]">
            All Property
          </NavLink>
          <NavLink to={"/Dashboard"} className="link link-hover text-[#003366]">
            Dashboard
          </NavLink>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4 text-[18px] text-[#003366]">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
        <div className="space-y-4 text-[18px] text-[#003366]">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control">
            <label className="">
              <span className="text-center font-merriweather">
                Enter your email address
              </span>
            </label>
            <div className="join mt-4 mx-auto md:mx-0">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </div>
      <footer className="footer footer-center py-8 bg-[#F8F9FA] text-base-content text-[16px]">
        <aside>
          <p className="text-black">
            Copyright © 2024 - All right reserved by Elite Property BD
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
