import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

const Navbar = () => {
  return (
    <div 
    className="flex flex-col justify-between gap-5 ">
      <div className="flex flex-col gap-5">
        <Link className="btn" to="/">Home</Link>
        <Link className="btn" to="/about">About Me</Link>
        <Link className="btn" to="/dashboard">Projects</Link>
        <Link className="btn" to="/dashboard">Socials</Link>
        <Link className="btn" to="/text">R</Link>
      </div>
      <div>
      <ThemeController/>
      </div>
    </div>
  )
}

export default Navbar