import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-white">
        {/* navbar */}
        <Navbar/>
      <div className="w-11/12 mx-auto pt-2 min-h-[calc(100vh-68px)]">
        {/* outlet */}
        <Outlet />
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default MainLayout;
