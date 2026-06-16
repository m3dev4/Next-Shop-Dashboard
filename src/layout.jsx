
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
