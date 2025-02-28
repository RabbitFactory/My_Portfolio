import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import FlickeringText from "./components/FlickeringText";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />

				<Route path="dashboard" element={<DashboardLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="settings" element={<Settings />} />
				</Route>
			</Route>

			<Route path="*" element={<NotFound />} />
			<Route path="text" element={<FlickeringText text="RABBIT FACTORY" duration={3} />} />
		</Routes>
	);
}

export default App;
