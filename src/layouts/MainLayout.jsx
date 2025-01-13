import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
        {/* navbar */}
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        {/* outlet */}
        <Outlet />
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default MainLayout;
