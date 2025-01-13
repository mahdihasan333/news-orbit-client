import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
        {/* navbar */}
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        {/* outlet */}
        <Outlet />
      </div>
      {/* footer */}
      <h1>mahdi</h1>
    </div>
  );
};

export default MainLayout;
