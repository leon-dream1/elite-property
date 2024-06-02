import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
