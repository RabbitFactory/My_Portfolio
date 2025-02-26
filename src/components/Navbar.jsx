import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
      <Link className="btn" to="/">Home</Link>
      <Link className="btn" to="/about">About</Link>
      <Link className="btn" to="/dashboard">Dashboard</Link>
      <Link className="btn" to="/text">text</Link>
      </div>
      <div>
      <ThemeController></ThemeController>
      </div>
    </div>
  )
}

export default Navbar