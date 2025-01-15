import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="w-11/12 mx-auto pt-2 min-h-[calc(100vh-68px)]">
      <Sidebar />
      <div className='flex-1  md:ml-64'>
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
