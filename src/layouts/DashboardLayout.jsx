import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <>
    {/* <Navbar></Navbar> */}
      <div>
        <Link className="btn" to="profile">Profile</Link>
        <Link className="btn" to="settings">Settings</Link>
      </div>

      <div>
        <Outlet />
         {/* This renders Profile, Settings based on nested routes */}
      </div>
    </>
  );
}

export default DashboardLayout;
