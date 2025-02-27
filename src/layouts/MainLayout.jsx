import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex p-24 gap-10 items-center h-screen w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
