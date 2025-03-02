import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 ">
      <div className="flex md:flex-col flex-wrap gap-5">
        <Link to="/">
          <Buttons label="Home" />
        </Link>
        <Link to="/about">
          <Buttons label="About Me" />
        </Link>
        <Link to="/projects">
          <Buttons label="Projects" />
        </Link>
        <Link to="/socials">
          <Buttons label="Socials" />
        </Link>
        <Link to="/text">
          <Buttons label="Error" />
        </Link>
      </div>
      <div className="w-20 bg-black">
        <ThemeController />
      </div>
    </div>
  )
}

export default Navbar