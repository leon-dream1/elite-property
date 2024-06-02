import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] mx-auto min-h-[calc(100vh-89px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
