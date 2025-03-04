import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FlickeringText from "../components/FlickeringText";

function MainLayout() {
  const [showContent, setShowContent] = useState(false);
  const [bgColor, setBgColor] = useState("#FFFFFF"); // Default light mode

  useEffect(() => {
    // Function to detect the current theme
    const detectTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setBgColor(theme === "dark" ? "#1D232A" : "#FFFFFF");
    };

    detectTheme(); // Run once on mount
    const observer = new MutationObserver(detectTheme);

    // Observe changes in the `data-theme` attribute
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Wait for flickering effect to finish before showing the layout
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000); // Match FlickeringText duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full overflow-auto transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      {/* Flickering Text (Full-Screen Overlay) */}
      {!showContent && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: bgColor }}
        >
          <FlickeringText text="Rabbit Factory" duration={3} />
        </div>
      )}

      {/* Main Content (Navbar + Pages) */}
      <div
        className={`min-h-screen md:h-screen w-full md:flex items-center transition-opacity duration-1000 p-4 lg:p-10 gap-4 lg:gap-10
          ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
