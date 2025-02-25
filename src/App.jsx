import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Main Layout for general pages */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Home Page */}
        <Route path="about" element={<About />} /> {/* About Page */}

        {/* Nested Dashboard Layout inside MainLayout */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />  {/* Default Dashboard */}
          <Route path="profile" element={<Profile />} /> {/* Profile Page */}
          <Route path="settings" element={<Settings />} /> {/* Settings Page */}
        </Route>
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
