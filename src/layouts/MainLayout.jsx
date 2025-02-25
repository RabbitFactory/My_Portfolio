import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";  // Keep Navbar if you want

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Main Content</h1>
        <Outlet /> {/* Only renders Home, About, or other pages */}
      </main>
    </>
  );
}

export default MainLayout;
