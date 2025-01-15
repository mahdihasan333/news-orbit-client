import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    // <div className="w-11/12 mx-auto pt-2 min-h-[calc(100vh-68px)]">
    //   <Sidebar />
    //   <div className='flex-1  md:ml-64'>
    //     <div className="p-5">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>

    <div className="w-11/12 mx-auto flex min-h-screen">
      {/* Sidebar Section */}
      <div className="w-64 bg-green-800 text-white min-h-full">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          {/* Title or Breadcrumb Section */}
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
            <p className="text-gray-600">
              Welcome to the admin panel, manage your content here.
            </p>
          </div>

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
