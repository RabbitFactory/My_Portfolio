import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <>
    {/* <Navbar></Navbar> */}
      <div>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </div>

      <div>
        <Outlet />
         {/* This renders Profile, Settings based on nested routes */}
      </div>
    </>
  );
}

export default DashboardLayout;
