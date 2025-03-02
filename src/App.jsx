// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import DashboardLayout from "./layouts/DashboardLayout";
// import Settings from "./pages/Settings";
// import FlickeringText from "./components/FlickeringText";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Socials from "./pages/Socials";
import Projects from "./pages/Projects";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="socials" element={<Socials />} />
				<Route path="projects" element={<Projects />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
