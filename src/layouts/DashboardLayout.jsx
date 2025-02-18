import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar Section */}
      <div className="w-64 bg-green-800 text-white min-h-full">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          {/* Content Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Outlet renders the child routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
