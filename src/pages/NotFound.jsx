import { useState, useEffect } from "react";
import LightImage from "/404-light.png"; // Use from `public` folder
import DarkImage from "/404-dark.png"; // Use from `public` folder

const NotFound = () => {
  const [imageSrc, setImageSrc] = useState(LightImage);

  useEffect(() => {
    // Function to detect the current theme
    const detectTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setImageSrc(theme === "dark" ? DarkImage : LightImage);
    };

    detectTheme(); // Run once on mount
    const observer = new MutationObserver(detectTheme);

    // Observe changes in the `data-theme` attribute
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <img src={imageSrc} alt="404 Not Found" className="max-w-full h-auto" />
    </div>
  );
};

export default NotFound;
