import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/DashBoard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />

      <div className="flex-1 md:ml-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
