import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className=" md:p-12 lg:p-24 p-5 md:gap-10 gap-2 h-screen w-full md:flex items-center">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
