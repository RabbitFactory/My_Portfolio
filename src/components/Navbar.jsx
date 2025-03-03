import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between h-full items-center">
      <div>
          <ThemeButton></ThemeButton>
        </div>

      <div className="flex md:flex-col flex-wrap gap-5 my-5 mx-0 justify-center items-center">
        
        {/* <Link to="/">
          <Buttons label="Home" />
        </Link> */}
        <Link to="/">
          <Buttons label="About" />
        </Link>
        <Link to="/projects">
          <Buttons label="Projects" />
        </Link>
        <Link to="/socials">
          <Buttons label="Socials" />
        </Link>
        {/* <Link to="/text">
          <Buttons label="Error" />
        </Link> */}

      </div>
      <div>
        {/* this is for aligning the links.don't delete this by mistake remember */}
      </div>

    </div>
  )
}

export default Navbar