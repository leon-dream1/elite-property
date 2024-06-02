import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
