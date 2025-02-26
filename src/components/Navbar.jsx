import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="btn" to="/">Home</Link>
      <Link className="btn" to="/about">About</Link>
      <Link className="btn" to="/dashboard">Dashboard</Link>
      <Link className="btn" to="/text">text</Link>
    </nav>
  )
}

export default Navbar